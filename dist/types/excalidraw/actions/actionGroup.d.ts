import type { AppClassProperties, AppState } from "../types";
export declare const actionGroup: {
    name: "group";
    label: string;
    icon: (appState: import("../types").UIAppState) => import("react/jsx-runtime").JSX.Element;
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<AppState>, _: unknown, app: AppClassProperties) => {
        appState: any;
        elements: any;
        captureUpdate: any;
    };
    predicate: (elements: readonly ExcalidrawElement[], appState: AppState, _: import("../types").ExcalidrawProps, app: AppClassProperties) => boolean;
    keyTest: (event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean;
    PanelComponent: ({ elements, appState, updateData, app }: import("./types").PanelComponentProps) => import("react/jsx-runtime").JSX.Element;
} & {
    keyTest?: ((event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean) | undefined;
};
export declare const actionUngroup: {
    name: "ungroup";
    label: string;
    icon: (appState: import("../types").UIAppState) => import("react/jsx-runtime").JSX.Element;
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<AppState>, _: unknown, app: AppClassProperties) => {
        appState: Readonly<AppState>;
        elements: readonly OrderedExcalidrawElement[];
        captureUpdate: any;
    } | {
        appState: any;
        elements: OrderedExcalidrawElement[];
        captureUpdate: any;
    };
    keyTest: (event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean;
    predicate: (elements: readonly ExcalidrawElement[], appState: AppState) => boolean;
    PanelComponent: ({ elements, appState, updateData }: import("./types").PanelComponentProps) => import("react/jsx-runtime").JSX.Element;
} & {
    keyTest?: ((event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean) | undefined;
};
