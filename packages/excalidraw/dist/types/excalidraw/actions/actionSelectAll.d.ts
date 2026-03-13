export declare const actionSelectAll: {
    name: "selectAll";
    label: string;
    icon: import("react/jsx-runtime").JSX.Element;
    trackEvent: {
        category: "canvas";
    };
    viewMode: false;
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>, value: unknown, app: import("../types").AppClassProperties) => false | {
        appState: any;
        captureUpdate: "IMMEDIATELY";
    };
    keyTest: (event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean;
} & {
    keyTest?: ((event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean) | undefined;
};
