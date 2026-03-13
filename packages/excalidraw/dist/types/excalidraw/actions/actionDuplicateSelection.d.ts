export declare const actionDuplicateSelection: {
    name: "duplicateSelection";
    label: string;
    icon: import("react/jsx-runtime").JSX.Element;
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>, formData: unknown, app: import("../types").AppClassProperties) => false | {
        elements: readonly OrderedExcalidrawElement[];
        appState: import("../types").AppState;
        captureUpdate: "IMMEDIATELY";
    };
    keyTest: (event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean;
    PanelComponent: ({ elements, appState, updateData, app }: import("./types").PanelComponentProps) => import("react/jsx-runtime").JSX.Element;
} & {
    keyTest?: ((event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean) | undefined;
};
