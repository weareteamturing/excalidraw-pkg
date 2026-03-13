import type { ExcalidrawElement } from "@excalidraw/element/types";
import type { AppClassProperties, AppState } from "../types";
export declare const actionGroup: {
    name: "group";
    label: string;
    icon: (appState: import("../types").UIAppState) => import("react/jsx-runtime").JSX.Element;
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<AppState>, _: unknown, app: AppClassProperties) => {
        appState: Readonly<AppState>;
        elements: readonly OrderedExcalidrawElement[];
        captureUpdate: "EVENTUALLY";
    } | {
        appState: {
            selectedElementIds: AppState["selectedElementIds"];
            selectedGroupIds: AppState["selectedGroupIds"];
            editingGroupId: AppState["editingGroupId"];
            contextMenu: {
                items: import("../components/ContextMenu").ContextMenuItems;
                top: number;
                left: number;
            } | null;
            showWelcomeScreen: boolean;
            isLoading: boolean;
            errorMessage: React.ReactNode;
            activeEmbeddable: {
                element: ExcalidrawElement;
                state: "hover" | "active";
            } | null;
            newElement: ExcalidrawElement<ExcalidrawElement> | null;
            resizingElement: ExcalidrawElement | null;
            multiElement: ExcalidrawElement<ExcalidrawElement> | null;
            selectionElement: ExcalidrawElement | null;
            isBindingEnabled: boolean;
            bindingPreference: "enabled" | "disabled";
            isMidpointSnappingEnabled: boolean;
            startBoundElement: ExcalidrawElement<ExcalidrawElement> | null;
            suggestedBinding: {
                element: ExcalidrawElement<ExcalidrawElement>;
                midPoint?: import("@excalidraw/math").GlobalPoint;
            } | null;
            frameToHighlight: ExcalidrawElement<ExcalidrawElement> | null;
            frameRendering: {
                enabled: boolean;
                name: boolean;
                outline: boolean;
                clip: boolean;
            };
            editingFrame: string | null;
            elementsToHighlight: ExcalidrawElement<ExcalidrawElement>[] | null;
            editingTextElement: ExcalidrawElement | null;
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
            currentItemFontFamily: ExcalidrawElement;
            currentItemFontSize: number;
            currentItemTextAlign: ExcalidrawElement;
            currentItemStartArrowhead: ExcalidrawElement | null;
            currentItemEndArrowhead: ExcalidrawElement | null;
            currentHoveredFontFamily: ExcalidrawElement | null;
            currentItemRoundness: ExcalidrawElement;
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
            lastPointerDownWith: ExcalidrawElement;
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
            theme: ExcalidrawElement;
            gridSize: number;
            gridStep: number;
            gridModeEnabled: boolean;
            viewModeEnabled: boolean;
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
            selectedLinearElement: import("@excalidraw/element").LinearElementEditor | null;
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
            bindMode: ExcalidrawElement;
        };
        elements: import("@excalidraw/element/dist/types/element/src/types").OrderedExcalidrawElement[];
        captureUpdate: "IMMEDIATELY";
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
        captureUpdate: "EVENTUALLY";
    } | {
        appState: any;
        elements: OrderedExcalidrawElement[];
        captureUpdate: "IMMEDIATELY";
    };
    keyTest: (event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean;
    predicate: (elements: readonly ExcalidrawElement[], appState: AppState) => boolean;
    PanelComponent: ({ elements, appState, updateData }: import("./types").PanelComponentProps) => import("react/jsx-runtime").JSX.Element;
} & {
    keyTest?: ((event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean) | undefined;
};
