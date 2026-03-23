import { FONT_SIZES } from "@excalidraw/common";
import { LinearElementEditor } from "@excalidraw/element";
import type { Arrowhead, ExcalidrawBindableElement, ExcalidrawElement, ExcalidrawLinearElement, FontFamilyValues, TextAlign } from "@excalidraw/element/types";
import type { AppClassProperties, AppState, Primitive } from "../types";
export declare const changeProperty: (elements: readonly ExcalidrawElement[], appState: AppState, callback: (element: ExcalidrawElement) => ExcalidrawElement, includeBoundText?: boolean) => ExcalidrawElement[];
export declare const getFormValue: <T extends Primitive>(elements: readonly ExcalidrawElement[], app: AppClassProperties, getAttribute: (element: ExcalidrawElement) => T, isRelevantElement: true | ((element: ExcalidrawElement) => boolean), defaultValue: T | ((isSomeElementSelected: boolean) => T)) => T;
export declare const actionChangeStrokeColor: import("./types").Action<Pick<AppState, "currentItemStrokeColor">> & {
    keyTest?: ((event: React.KeyboardEvent | KeyboardEvent, appState: AppState, elements: readonly ExcalidrawElement[], app: AppClassProperties) => boolean) | undefined;
};
export declare const actionChangeBackgroundColor: import("./types").Action<Pick<AppState, "currentItemBackgroundColor" | "viewBackgroundColor">> & {
    keyTest?: ((event: React.KeyboardEvent | KeyboardEvent, appState: AppState, elements: readonly ExcalidrawElement[], app: AppClassProperties) => boolean) | undefined;
};
export declare const actionChangeFillStyle: import("./types").Action<ExcalidrawElement> & {
    keyTest?: ((event: React.KeyboardEvent | KeyboardEvent, appState: AppState, elements: readonly ExcalidrawElement[], app: AppClassProperties) => boolean) | undefined;
};
export declare const actionChangeStrokeWidth: import("./types").Action<ExcalidrawElement> & {
    keyTest?: ((event: React.KeyboardEvent | KeyboardEvent, appState: AppState, elements: readonly ExcalidrawElement[], app: AppClassProperties) => boolean) | undefined;
};
export declare const actionChangeSloppiness: import("./types").Action<ExcalidrawElement> & {
    keyTest?: ((event: React.KeyboardEvent | KeyboardEvent, appState: AppState, elements: readonly ExcalidrawElement[], app: AppClassProperties) => boolean) | undefined;
};
export declare const actionChangeStrokeStyle: import("./types").Action<ExcalidrawElement> & {
    keyTest?: ((event: React.KeyboardEvent | KeyboardEvent, appState: AppState, elements: readonly ExcalidrawElement[], app: AppClassProperties) => boolean) | undefined;
};
export declare const actionChangeOpacity: import("./types").Action<ExcalidrawElement> & {
    keyTest?: ((event: React.KeyboardEvent | KeyboardEvent, appState: AppState, elements: readonly ExcalidrawElement[], app: AppClassProperties) => boolean) | undefined;
};
export declare const actionChangeFontSize: import("./types").Action<ExcalidrawTextElement> & {
    keyTest?: ((event: React.KeyboardEvent | KeyboardEvent, appState: AppState, elements: readonly ExcalidrawElement[], app: AppClassProperties) => boolean) | undefined;
};
export declare const actionDecreaseFontSize: {
    name: "decreaseFontSize";
    label: string;
    icon: import("react/jsx-runtime").JSX.Element;
    trackEvent: false;
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<AppState>, value: unknown, app: AppClassProperties) => {
        elements: ExcalidrawElement[];
        appState: {
            currentItemFontSize: any;
            contextMenu: {
                items: import("../components/ContextMenu").ContextMenuItems;
                top: number;
                left: number;
            } | null;
            showWelcomeScreen: boolean;
            isLoading: boolean;
            errorMessage: React.ReactNode;
            activeEmbeddable: {
                element: FONT_SIZES;
                state: "hover" | "active";
            } | null;
            newElement: FONT_SIZES<FONT_SIZES> | null;
            resizingElement: FONT_SIZES | null;
            multiElement: FONT_SIZES<ExcalidrawLinearElement> | null;
            selectionElement: FONT_SIZES | null;
            isBindingEnabled: boolean;
            bindingPreference: "enabled" | "disabled";
            isMidpointSnappingEnabled: boolean;
            startBoundElement: FONT_SIZES<ExcalidrawBindableElement> | null;
            suggestedBinding: {
                element: FONT_SIZES<ExcalidrawBindableElement>;
                midPoint?: import("@excalidraw/math").GlobalPoint;
            } | null;
            frameToHighlight: FONT_SIZES<FONT_SIZES> | null;
            frameRendering: {
                enabled: boolean;
                name: boolean;
                outline: boolean;
                clip: boolean;
            };
            editingFrame: string | null;
            elementsToHighlight: FONT_SIZES<ExcalidrawElement>[] | null;
            editingTextElement: FONT_SIZES | null;
            activeTool: {
                lastActiveTool: import("../types").ActiveTool | null;
                locked: boolean;
                fromSelection: boolean;
            } & import("../types").ActiveTool;
            preferredSelectionTool: {
                type: "selection" | "lasso";
                initialized: boolean;
            };
            penMode: boolean;
            penDetected: boolean;
            exportBackground: boolean;
            exportEmbedScene: boolean;
            exportWithDarkMode: boolean;
            exportScale: number;
            currentItemStrokeColor: string;
            currentItemBackgroundColor: string;
            currentItemFillStyle: ExcalidrawElement["fillStyle"];
            currentItemStrokeWidth: number;
            currentItemStrokeStyle: ExcalidrawElement["strokeStyle"];
            currentItemRoughness: number;
            currentItemOpacity: number;
            currentItemFontFamily: FontFamilyValues;
            currentItemTextAlign: TextAlign;
            currentItemStartArrowhead: Arrowhead | null;
            currentItemEndArrowhead: Arrowhead | null;
            currentHoveredFontFamily: FontFamilyValues | null;
            currentItemRoundness: FONT_SIZES;
            currentItemArrowType: "sharp" | "round" | "elbow";
            viewBackgroundColor: string;
            scrollX: number;
            scrollY: number;
            cursorButton: "up" | "down";
            scrolledOutside: boolean;
            name: string | null;
            isResizing: boolean;
            isRotating: boolean;
            zoom: import("../types").Zoom;
            openMenu: "canvas" | null;
            openPopup: "canvasBackground" | "elementBackground" | "elementStroke" | "fontFamily" | "compactTextProperties" | "compactStrokeStyles" | "compactOtherProperties" | "compactArrowProperties" | null;
            openSidebar: {
                name: import("../types").SidebarName;
                tab?: import("../types").SidebarTabName;
            } | null;
            openDialog: null | {
                name: "imageExport" | "help" | "jsonExport";
            } | {
                name: "ttd";
                tab: "text-to-diagram" | "mermaid";
            } | {
                name: "commandPalette";
            } | {
                name: "settings";
            } | {
                name: "elementLinkSelector";
                sourceElementId: ExcalidrawElement["id"];
            } | {
                name: "charts";
                data: import("../charts").Spreadsheet;
                rawText: string;
            };
            defaultSidebarDockedPreference: boolean;
            lastPointerDownWith: FONT_SIZES;
            selectedElementIds: Readonly<{
                [id: string]: true;
            }>;
            hoveredElementIds: Readonly<{
                [id: string]: true;
            }>;
            previousSelectedElementIds: {
                [id: string]: true;
            };
            selectedElementsAreBeingDragged: boolean;
            shouldCacheIgnoreZoom: boolean;
            toast: {
                message: string;
                closable?: boolean;
                duration?: number;
            } | null;
            zenModeEnabled: boolean;
            theme: FONT_SIZES;
            gridSize: number;
            gridStep: number;
            gridModeEnabled: boolean;
            viewModeEnabled: boolean;
            selectedGroupIds: {
                [groupId: string]: boolean;
            };
            editingGroupId: FONT_SIZES | null;
            width: number;
            height: number;
            offsetTop: number;
            offsetLeft: number;
            fileHandle: import("browser-fs-access").FileSystemHandle | null;
            collaborators: Map<import("../types").SocketId, import("../types").Collaborator>;
            stats: {
                open: boolean;
                panels: number;
            };
            showHyperlinkPopup: false | "info" | "editor";
            selectedLinearElement: LinearElementEditor | null;
            snapLines: readonly import("../snapping").SnapLine[];
            originSnapOffset: {
                x: number;
                y: number;
            } | null;
            objectsSnapModeEnabled: boolean;
            userToFollow: import("../types").UserToFollow | null;
            followedBy: Set<import("../types").SocketId>;
            isCropping: boolean;
            croppingElementId: ExcalidrawElement["id"] | null;
            searchMatches: Readonly<{
                focusedId: ExcalidrawElement["id"] | null;
                matches: readonly import("../types").SearchMatch[];
            }> | null;
            activeLockedId: string | null;
            lockedMultiSelections: {
                [groupId: string]: true;
            };
            bindMode: FONT_SIZES;
        };
        captureUpdate: any;
    };
    keyTest: (event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean;
} & {
    keyTest?: ((event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean) | undefined;
};
export declare const actionIncreaseFontSize: {
    name: "increaseFontSize";
    label: string;
    icon: import("react/jsx-runtime").JSX.Element;
    trackEvent: false;
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<AppState>, value: unknown, app: AppClassProperties) => {
        elements: ExcalidrawElement[];
        appState: {
            currentItemFontSize: any;
            contextMenu: {
                items: import("../components/ContextMenu").ContextMenuItems;
                top: number;
                left: number;
            } | null;
            showWelcomeScreen: boolean;
            isLoading: boolean;
            errorMessage: React.ReactNode;
            activeEmbeddable: {
                element: FONT_SIZES;
                state: "hover" | "active";
            } | null;
            newElement: FONT_SIZES<FONT_SIZES> | null;
            resizingElement: FONT_SIZES | null;
            multiElement: FONT_SIZES<ExcalidrawLinearElement> | null;
            selectionElement: FONT_SIZES | null;
            isBindingEnabled: boolean;
            bindingPreference: "enabled" | "disabled";
            isMidpointSnappingEnabled: boolean;
            startBoundElement: FONT_SIZES<ExcalidrawBindableElement> | null;
            suggestedBinding: {
                element: FONT_SIZES<ExcalidrawBindableElement>;
                midPoint?: import("@excalidraw/math").GlobalPoint;
            } | null;
            frameToHighlight: FONT_SIZES<FONT_SIZES> | null;
            frameRendering: {
                enabled: boolean;
                name: boolean;
                outline: boolean;
                clip: boolean;
            };
            editingFrame: string | null;
            elementsToHighlight: FONT_SIZES<ExcalidrawElement>[] | null;
            editingTextElement: FONT_SIZES | null;
            activeTool: {
                lastActiveTool: import("../types").ActiveTool | null;
                locked: boolean;
                fromSelection: boolean;
            } & import("../types").ActiveTool;
            preferredSelectionTool: {
                type: "selection" | "lasso";
                initialized: boolean;
            };
            penMode: boolean;
            penDetected: boolean;
            exportBackground: boolean;
            exportEmbedScene: boolean;
            exportWithDarkMode: boolean;
            exportScale: number;
            currentItemStrokeColor: string;
            currentItemBackgroundColor: string;
            currentItemFillStyle: ExcalidrawElement["fillStyle"];
            currentItemStrokeWidth: number;
            currentItemStrokeStyle: ExcalidrawElement["strokeStyle"];
            currentItemRoughness: number;
            currentItemOpacity: number;
            currentItemFontFamily: FontFamilyValues;
            currentItemTextAlign: TextAlign;
            currentItemStartArrowhead: Arrowhead | null;
            currentItemEndArrowhead: Arrowhead | null;
            currentHoveredFontFamily: FontFamilyValues | null;
            currentItemRoundness: FONT_SIZES;
            currentItemArrowType: "sharp" | "round" | "elbow";
            viewBackgroundColor: string;
            scrollX: number;
            scrollY: number;
            cursorButton: "up" | "down";
            scrolledOutside: boolean;
            name: string | null;
            isResizing: boolean;
            isRotating: boolean;
            zoom: import("../types").Zoom;
            openMenu: "canvas" | null;
            openPopup: "canvasBackground" | "elementBackground" | "elementStroke" | "fontFamily" | "compactTextProperties" | "compactStrokeStyles" | "compactOtherProperties" | "compactArrowProperties" | null;
            openSidebar: {
                name: import("../types").SidebarName;
                tab?: import("../types").SidebarTabName;
            } | null;
            openDialog: null | {
                name: "imageExport" | "help" | "jsonExport";
            } | {
                name: "ttd";
                tab: "text-to-diagram" | "mermaid";
            } | {
                name: "commandPalette";
            } | {
                name: "settings";
            } | {
                name: "elementLinkSelector";
                sourceElementId: ExcalidrawElement["id"];
            } | {
                name: "charts";
                data: import("../charts").Spreadsheet;
                rawText: string;
            };
            defaultSidebarDockedPreference: boolean;
            lastPointerDownWith: FONT_SIZES;
            selectedElementIds: Readonly<{
                [id: string]: true;
            }>;
            hoveredElementIds: Readonly<{
                [id: string]: true;
            }>;
            previousSelectedElementIds: {
                [id: string]: true;
            };
            selectedElementsAreBeingDragged: boolean;
            shouldCacheIgnoreZoom: boolean;
            toast: {
                message: string;
                closable?: boolean;
                duration?: number;
            } | null;
            zenModeEnabled: boolean;
            theme: FONT_SIZES;
            gridSize: number;
            gridStep: number;
            gridModeEnabled: boolean;
            viewModeEnabled: boolean;
            selectedGroupIds: {
                [groupId: string]: boolean;
            };
            editingGroupId: FONT_SIZES | null;
            width: number;
            height: number;
            offsetTop: number;
            offsetLeft: number;
            fileHandle: import("browser-fs-access").FileSystemHandle | null;
            collaborators: Map<import("../types").SocketId, import("../types").Collaborator>;
            stats: {
                open: boolean;
                panels: number;
            };
            showHyperlinkPopup: false | "info" | "editor";
            selectedLinearElement: LinearElementEditor | null;
            snapLines: readonly import("../snapping").SnapLine[];
            originSnapOffset: {
                x: number;
                y: number;
            } | null;
            objectsSnapModeEnabled: boolean;
            userToFollow: import("../types").UserToFollow | null;
            followedBy: Set<import("../types").SocketId>;
            isCropping: boolean;
            croppingElementId: ExcalidrawElement["id"] | null;
            searchMatches: Readonly<{
                focusedId: ExcalidrawElement["id"] | null;
                matches: readonly import("../types").SearchMatch[];
            }> | null;
            activeLockedId: string | null;
            lockedMultiSelections: {
                [groupId: string]: true;
            };
            bindMode: FONT_SIZES;
        };
        captureUpdate: any;
    };
    keyTest: (event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean;
} & {
    keyTest?: ((event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean) | undefined;
};
export declare const actionChangeFontFamily: import("./types").Action<{
    currentItemFontFamily: any;
    currentHoveredFontFamily: any;
}> & {
    keyTest?: ((event: React.KeyboardEvent | KeyboardEvent, appState: AppState, elements: readonly ExcalidrawElement[], app: AppClassProperties) => boolean) | undefined;
};
export declare const actionChangeTextAlign: import("./types").Action<TextAlign> & {
    keyTest?: ((event: React.KeyboardEvent | KeyboardEvent, appState: AppState, elements: readonly ExcalidrawElement[], app: AppClassProperties) => boolean) | undefined;
};
export declare const actionChangeVerticalAlign: import("./types").Action<VerticalAlign> & {
    keyTest?: ((event: React.KeyboardEvent | KeyboardEvent, appState: AppState, elements: readonly ExcalidrawElement[], app: AppClassProperties) => boolean) | undefined;
};
export declare const actionChangeRoundness: import("./types").Action<"sharp" | "round"> & {
    keyTest?: ((event: React.KeyboardEvent | KeyboardEvent, appState: AppState, elements: readonly ExcalidrawElement[], app: AppClassProperties) => boolean) | undefined;
};
export declare const actionChangeArrowhead: import("./types").Action<{
    position: "start" | "end";
    type: Arrowhead;
}> & {
    keyTest?: ((event: React.KeyboardEvent | KeyboardEvent, appState: AppState, elements: readonly ExcalidrawElement[], app: AppClassProperties) => boolean) | undefined;
};
export declare const actionChangeArrowProperties: {
    name: "changeArrowProperties";
    label: string;
    trackEvent: false;
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<AppState>, value: unknown, app: AppClassProperties) => false;
    PanelComponent: ({ elements, appState, updateData, app, renderAction }: import("./types").PanelComponentProps) => import("react/jsx-runtime").JSX.Element;
} & {
    keyTest?: undefined;
};
export declare const actionChangeArrowType: import("./types").Action<"sharp" | "round" | "elbow"> & {
    keyTest?: ((event: React.KeyboardEvent | KeyboardEvent, appState: AppState, elements: readonly ExcalidrawElement[], app: AppClassProperties) => boolean) | undefined;
};
