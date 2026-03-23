import {
  EXPORT_DATA_TYPES,
  MIME_TYPES,
  blobToArrayBuffer,
  decode,
  encode
} from "./chunk-KMWHXRKO.js";
import "./chunk-MNNOHETD.js";
import "./chunk-7AOJXSRG.js";

// data/image.ts
import tEXt from "png-chunk-text";
import encodePng from "png-chunks-encode";
import decodePng from "png-chunks-extract";
var getTEXtChunk = async (blob) => {
  const chunks = decodePng(new Uint8Array(await blobToArrayBuffer(blob)));
  const metadataChunk = chunks.find((chunk) => chunk.name === "tEXt");
  if (metadataChunk) {
    return tEXt.decode(metadataChunk.data);
  }
  return null;
};
var encodePngMetadata = async ({
  blob,
  metadata
}) => {
  const chunks = decodePng(new Uint8Array(await blobToArrayBuffer(blob)));
  const metadataChunk = tEXt.encode(
    MIME_TYPES.excalidraw,
    JSON.stringify(
      encode({
        text: metadata,
        compress: true
      })
    )
  );
  chunks.splice(-1, 0, metadataChunk);
  return new Blob([encodePng(chunks)], { type: MIME_TYPES.png });
};
var decodePngMetadata = async (blob) => {
  const metadata = await getTEXtChunk(blob);
  if (metadata?.keyword === MIME_TYPES.excalidraw) {
    try {
      const encodedData = JSON.parse(metadata.text);
      if (!("encoded" in encodedData)) {
        if ("type" in encodedData && encodedData.type === EXPORT_DATA_TYPES.excalidraw) {
          return metadata.text;
        }
        throw new Error("FAILED");
      }
      return decode(encodedData);
    } catch (error) {
      console.error(error);
      throw new Error("FAILED");
    }
  }
  throw new Error("INVALID");
};
export {
  decodePngMetadata,
  encodePngMetadata,
  getTEXtChunk
};
//# sourceMappingURL=image-XNPNN2K6.js.map
