import { elementsAreInSameGroup } from "@excalidraw/element";
import type { ExcalidrawElement } from "@excalidraw/element/types";
import type { AppState } from "../types";
export declare const actionToggleElementLock: {
    name: "toggleElementLock";
    label: (elements: readonly ExcalidrawElement[], appState: Readonly<AppState>, app: import("../types").AppClassProperties) => "labels.elementLock.lock" | "labels.elementLock.unlock";
    icon: (appState: import("../types").UIAppState, elements: readonly ExcalidrawElement[]) => import("react/jsx-runtime").JSX.Element;
    trackEvent: {
        category: "element";
    };
    predicate: (elements: readonly ExcalidrawElement[], appState: AppState, _: import("../types").ExcalidrawProps, app: import("../types").AppClassProperties) => boolean;
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<AppState>, _: unknown, app: import("../types").AppClassProperties) => false | {
        elements: any[];
        appState: {
            selectedElementIds: Readonly<{
                [id: string]: true;
            }>;
            selectedGroupIds: any;
            selectedLinearElement: any;
            lockedMultiSelections: {
                [groupId: string]: true;
            };
            activeLockedId: any;
            contextMenu: {
                items: import("../components/ContextMenu").ContextMenuItems;
                top: number;
                left: number;
            } | null;
            showWelcomeScreen: boolean;
            isLoading: boolean;
            errorMessage: React.ReactNode;
            activeEmbeddable: {
                element: elementsAreInSameGroup;
                state: "hover" | "active";
            } | null;
            newElement: elementsAreInSameGroup<elementsAreInSameGroup> | null;
            resizingElement: elementsAreInSameGroup | null;
            multiElement: elementsAreInSameGroup<elementsAreInSameGroup> | null;
            selectionElement: elementsAreInSameGroup | null;
            isBindingEnabled: boolean;
            bindingPreference: "enabled" | "disabled";
            isMidpointSnappingEnabled: boolean;
            startBoundElement: elementsAreInSameGroup<elementsAreInSameGroup> | null;
            suggestedBinding: {
                element: elementsAreInSameGroup<elementsAreInSameGroup>;
                midPoint?: import("@excalidraw/math").GlobalPoint;
            } | null;
            frameToHighlight: elementsAreInSameGroup<elementsAreInSameGroup> | null;
            frameRendering: {
                enabled: boolean;
                name: boolean;
                outline: boolean;
                clip: boolean;
            };
            editingFrame: string | null;
            elementsToHighlight: elementsAreInSameGroup<ExcalidrawElement>[] | null;
            editingTextElement: elementsAreInSameGroup | null;
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
            currentItemFontFamily: elementsAreInSameGroup;
            currentItemFontSize: number;
            currentItemTextAlign: elementsAreInSameGroup;
            currentItemStartArrowhead: elementsAreInSameGroup | null;
            currentItemEndArrowhead: elementsAreInSameGroup | null;
            currentHoveredFontFamily: elementsAreInSameGroup | null;
            currentItemRoundness: elementsAreInSameGroup;
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
            lastPointerDownWith: elementsAreInSameGroup;
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
            theme: elementsAreInSameGroup;
            gridSize: number;
            gridStep: number;
            gridModeEnabled: boolean;
            viewModeEnabled: boolean;
            editingGroupId: elementsAreInSameGroup | null;
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
            bindMode: elementsAreInSameGroup;
        };
        captureUpdate: any;
    };
    keyTest: (event: import("react").KeyboardEvent<Element> | KeyboardEvent, appState: AppState, elements: readonly ExcalidrawElement[], app: import("../types").AppClassProperties) => boolean;
} & {
    keyTest?: ((event: import("react").KeyboardEvent<Element> | KeyboardEvent, appState: AppState, elements: readonly ExcalidrawElement[], app: import("../types").AppClassProperties) => boolean) | undefined;
};
export declare const actionUnlockAllElements: {
    name: "unlockAllElements";
    trackEvent: {
        category: "canvas";
    };
    viewMode: false;
    icon: import("react/jsx-runtime").JSX.Element;
    predicate: (elements: readonly ExcalidrawElement[], appState: AppState) => boolean;
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<AppState>) => {
        elements: any[];
        appState: {
            selectedElementIds: any;
            selectedGroupIds: any;
            lockedMultiSelections: {};
            activeLockedId: null;
            contextMenu: {
                items: import("../components/ContextMenu").ContextMenuItems;
                top: number;
                left: number;
            } | null;
            showWelcomeScreen: boolean;
            isLoading: boolean;
            errorMessage: React.ReactNode;
            activeEmbeddable: {
                element: elementsAreInSameGroup;
                state: "hover" | "active";
            } | null;
            newElement: elementsAreInSameGroup<elementsAreInSameGroup> | null;
            resizingElement: elementsAreInSameGroup | null;
            multiElement: elementsAreInSameGroup<elementsAreInSameGroup> | null;
            selectionElement: elementsAreInSameGroup | null;
            isBindingEnabled: boolean;
            bindingPreference: "enabled" | "disabled";
            isMidpointSnappingEnabled: boolean;
            startBoundElement: elementsAreInSameGroup<elementsAreInSameGroup> | null;
            suggestedBinding: {
                element: elementsAreInSameGroup<elementsAreInSameGroup>;
                midPoint?: import("@excalidraw/math").GlobalPoint;
            } | null;
            frameToHighlight: elementsAreInSameGroup<elementsAreInSameGroup> | null;
            frameRendering: {
                enabled: boolean;
                name: boolean;
                outline: boolean;
                clip: boolean;
            };
            editingFrame: string | null;
            elementsToHighlight: elementsAreInSameGroup<ExcalidrawElement>[] | null;
            editingTextElement: elementsAreInSameGroup | null;
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
            currentItemFontFamily: elementsAreInSameGroup;
            currentItemFontSize: number;
            currentItemTextAlign: elementsAreInSameGroup;
            currentItemStartArrowhead: elementsAreInSameGroup | null;
            currentItemEndArrowhead: elementsAreInSameGroup | null;
            currentHoveredFontFamily: elementsAreInSameGroup | null;
            currentItemRoundness: elementsAreInSameGroup;
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
            lastPointerDownWith: elementsAreInSameGroup;
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
            theme: elementsAreInSameGroup;
            gridSize: number;
            gridStep: number;
            gridModeEnabled: boolean;
            viewModeEnabled: boolean;
            editingGroupId: elementsAreInSameGroup | null;
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
            selectedLinearElement: elementsAreInSameGroup | null;
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
            bindMode: elementsAreInSameGroup;
        };
        captureUpdate: any;
    };
    label: string;
} & {
    keyTest?: undefined;
};
