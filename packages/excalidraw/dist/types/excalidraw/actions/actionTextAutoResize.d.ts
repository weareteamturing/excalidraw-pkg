import type { AppClassProperties } from "../types";
export declare const actionTextAutoResize: {
    name: "autoResize";
    label: string;
    icon: null;
    trackEvent: {
        category: "element";
    };
    predicate: (elements: readonly ExcalidrawElement[], appState: import("../types").AppState, _: unknown, app: AppClassProperties) => any;
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>, _: unknown, app: AppClassProperties) => {
        appState: Readonly<import("../types").AppState>;
        elements: any[];
        captureUpdate: any;
    };
} & {
    keyTest?: undefined;
};
