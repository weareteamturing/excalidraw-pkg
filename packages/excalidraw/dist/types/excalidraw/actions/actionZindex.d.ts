export declare const actionSendBackward: {
    name: "sendBackward";
    label: string;
    keywords: string[];
    icon: import("react/jsx-runtime").JSX.Element;
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>, value: unknown, app: import("../types").AppClassProperties) => {
        elements: readonly import("@excalidraw/element/dist/types/element/src/types").ExcalidrawElement[];
        appState: Readonly<import("../types").AppState>;
        captureUpdate: "IMMEDIATELY";
    };
    keyPriority: number;
    keyTest: (event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean;
    PanelComponent: ({ updateData, appState }: import("./types").PanelComponentProps) => import("react/jsx-runtime").JSX.Element;
} & {
    keyTest?: ((event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean) | undefined;
};
export declare const actionBringForward: {
    name: "bringForward";
    label: string;
    keywords: string[];
    icon: import("react/jsx-runtime").JSX.Element;
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>, value: unknown, app: import("../types").AppClassProperties) => {
        elements: readonly import("@excalidraw/element/dist/types/element/src/types").ExcalidrawElement[];
        appState: Readonly<import("../types").AppState>;
        captureUpdate: "IMMEDIATELY";
    };
    keyPriority: number;
    keyTest: (event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean;
    PanelComponent: ({ updateData, appState }: import("./types").PanelComponentProps) => import("react/jsx-runtime").JSX.Element;
} & {
    keyTest?: ((event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean) | undefined;
};
export declare const actionSendToBack: {
    name: "sendToBack";
    label: string;
    keywords: string[];
    icon: import("react/jsx-runtime").JSX.Element;
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>) => {
        elements: readonly import("@excalidraw/element/dist/types/element/src/types").ExcalidrawElement[] | import("@excalidraw/element/dist/types/element/src/types").ExcalidrawElement[];
        appState: Readonly<import("../types").AppState>;
        captureUpdate: "IMMEDIATELY";
    };
    keyTest: (event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean;
    PanelComponent: ({ updateData, appState }: import("./types").PanelComponentProps) => import("react/jsx-runtime").JSX.Element;
} & {
    keyTest?: ((event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean) | undefined;
};
export declare const actionBringToFront: {
    name: "bringToFront";
    label: string;
    keywords: string[];
    icon: import("react/jsx-runtime").JSX.Element;
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>) => {
        elements: readonly import("@excalidraw/element/dist/types/element/src/types").ExcalidrawElement[] | import("@excalidraw/element/dist/types/element/src/types").ExcalidrawElement[];
        appState: Readonly<import("../types").AppState>;
        captureUpdate: "IMMEDIATELY";
    };
    keyTest: (event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean;
    PanelComponent: ({ updateData, appState }: import("./types").PanelComponentProps) => import("react/jsx-runtime").JSX.Element;
} & {
    keyTest?: ((event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean) | undefined;
};
