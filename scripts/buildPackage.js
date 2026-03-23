const path = require("path");
const fs = require("fs");
const { pathToFileURL } = require("url");

const ROOT = path.resolve(__dirname, "..");

// esbuild uses process.cwd() for package resolution. Set it to the monorepo
// root so resolution is identical regardless of which directory this script
// is invoked from.
process.chdir(ROOT);

const { build } = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");

const { parseEnvVariables } = require("../packages/excalidraw/env.cjs");

const ENV_VARS = {
  development: {
    ...parseEnvVariables(`${ROOT}/.env.development`),
    DEV: true,
  },
  production: {
    ...parseEnvVariables(`${ROOT}/.env.production`),
    PROD: true,
  },
};

const resolveRelativePath = (importPath, sourceFile) => {
  const sourceDir = path.dirname(sourceFile);
  const extensions = [".scss", ".css", ""];

  for (const ext of extensions) {
    const fullPath = path.resolve(sourceDir, importPath + ext);
    if (fs.existsSync(fullPath)) {
      return fullPath;
    }
    const partialPath = path.join(
      path.dirname(fullPath),
      `_${path.basename(fullPath)}`,
    );
    if (fs.existsSync(partialPath)) {
      return partialPath;
    }
  }
  return null;
};

const precompile = (source, sourcePath) => {
  const importRegex = /(@use|@forward)\s+["'](\.[^"']+)["']/g;

  return source.replace(importRegex, (match, directive, importPath) => {
    const resolvedPath = resolveRelativePath(importPath, sourcePath);
    if (resolvedPath) {
      const fileUrl = pathToFileURL(resolvedPath).href;
      return `${directive} "${fileUrl}"`;
    }
    return match;
  });
};

const EXTERNAL_PACKAGES = [
  "react",
  "react-dom",
  "@excalidraw/laser-pointer",
  "@excalidraw/mermaid-to-excalidraw",
  "@excalidraw/random-username",
  "jotai",
  "jotai-scope",
  "roughjs",
  "radix-ui",
  "@braintree/sanitize-url",
  "browser-fs-access",
  "canvas-roundrect-polyfill",
  "clsx",
  "es6-promise-pool",
  "fractional-indexing",
  "fuzzy",
  "image-blob-reduce",
  "lodash.debounce",
  "lodash.throttle",
  "nanoid",
  "pako",
  "perfect-freehand",
  "pica",
  "png-chunk-text",
  "png-chunks-encode",
  "png-chunks-extract",
  "points-on-curve",
  "pwacompat",
  "tunnel-rat",
];

// Source directories for workspace packages
const PKG_SRC = {
  "@excalidraw/common": `${ROOT}/packages/common/src`,
  "@excalidraw/element": `${ROOT}/packages/element/src`,
  "@excalidraw/utils": `${ROOT}/packages/utils/src`,
  "@excalidraw/math": `${ROOT}/packages/math/src`,
};

// Plugin that resolves @excalidraw/element, /common, /utils from source.
// Handles both root imports and subpath imports (e.g. @excalidraw/element/binding).
// All subpaths fall back to the package index if the specific file is not found,
// preventing esbuild from activating the "development" export condition
// (triggered by sourcemap:true) which would pull in pre-built dist files.
const bundleSrcPlugin = {
  name: "bundle-workspace-src",
  setup(b) {
    b.onResolve(
      { filter: /^@excalidraw\/(common|element|utils|math)(\/.*)?$/ },
      (args) => {
        const match = args.path.match(
          /^@excalidraw\/(common|element|utils|math)(\/(.+))?$/,
        );
        if (!match) return null;

        const srcRoot = PKG_SRC[`@excalidraw/${match[1]}`];
        if (!srcRoot) return null;

        const subpath = match[3];
        if (subpath) {
          const resolved = path.resolve(srcRoot, `${subpath}.ts`);
          if (fs.existsSync(resolved)) return { path: resolved };
          const indexResolved = path.resolve(srcRoot, subpath, "index.ts");
          if (fs.existsSync(indexResolved)) return { path: indexResolved };
        }

        // Root import or unresolved subpath: use package index
        const indexPath = path.resolve(srcRoot, "index.ts");
        return fs.existsSync(indexPath) ? { path: indexPath } : null;
      },
    );
  },
};

const PKG_DIR = `${ROOT}/packages/excalidraw`;

const getConfig = (outdir) => ({
  absWorkingDir: PKG_DIR,
  outdir,
  bundle: true,
  splitting: true,
  format: "esm",
  plugins: [bundleSrcPlugin, sassPlugin({ precompile })],
  target: "es2020",
  assetNames: "[name]",
  chunkNames: "[name]-[hash]",
  external: [...EXTERNAL_PACKAGES, "@excalidraw/excalidraw/*"],
  loader: { ".woff2": "file" },
  // Prevent esbuild from activating the "development" export condition when
  // sourcemap:true is set. Without this, @excalidraw/element subpath imports
  // that fall through resolve to packages/element/dist/dev/index.js which
  // contains externalized @excalidraw/common imports.
  conditions: ["browser", "module", "default"],
});

const createESMRawBuild = async () => {
  const chunksConfig = {
    entryPoints: ["index.tsx", "**/*.chunk.ts"],
    entryNames: "[name]",
  };

  await build({
    ...getConfig(`${PKG_DIR}/dist/dev`),
    ...chunksConfig,
    sourcemap: true,
    define: { "import.meta.env": JSON.stringify(ENV_VARS.development) },
  });

  await build({
    ...getConfig(`${PKG_DIR}/dist/prod`),
    ...chunksConfig,
    minify: true,
    define: { "import.meta.env": JSON.stringify(ENV_VARS.production) },
  });
};

(async () => {
  await createESMRawBuild();
})();
