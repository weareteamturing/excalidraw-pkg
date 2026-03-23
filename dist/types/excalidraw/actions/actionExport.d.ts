import { getNonDeletedElements } from "@excalidraw/element";
import type { Theme } from "@excalidraw/element/types";
import "../components/ToolIcon.scss";
import type { AppState } from "../types";
export declare const actionChangeProjectName: import("./types").Action<string | null> & {
    keyTest?: ((event: React.KeyboardEvent | KeyboardEvent, appState: AppState, elements: readonly getNonDeletedElements[], app: import("../types").AppClassProperties) => boolean) | undefined;
};
export declare const actionChangeExportScale: import("./types").Action<number> & {
    keyTest?: ((event: React.KeyboardEvent | KeyboardEvent, appState: AppState, elements: readonly getNonDeletedElements[], app: import("../types").AppClassProperties) => boolean) | undefined;
};
export declare const actionChangeExportBackground: import("./types").Action<boolean> & {
    keyTest?: ((event: React.KeyboardEvent | KeyboardEvent, appState: AppState, elements: readonly getNonDeletedElements[], app: import("../types").AppClassProperties) => boolean) | undefined;
};
export declare const actionChangeExportEmbedScene: import("./types").Action<boolean> & {
    keyTest?: ((event: React.KeyboardEvent | KeyboardEvent, appState: AppState, elements: readonly getNonDeletedElements[], app: import("../types").AppClassProperties) => boolean) | undefined;
};
export declare const actionSaveToActiveFile: {
    name: "saveToActiveFile";
    label: string;
    icon: import("react/jsx-runtime").JSX.Element;
    trackEvent: {
        category: "export";
    };
    predicate: (elements: readonly ExcalidrawElement[], appState: AppState, props: import("../types").ExcalidrawProps, app: import("../types").AppClassProperties) => boolean;
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<AppState>, value: unknown, app: import("../types").AppClassProperties) => Promise<{
        captureUpdate: any;
        appState: {
            fileHandle: import("browser-fs-access").FileSystemHandle | null;
            toast: {
                message: string;
            } | null;
            contextMenu: {
                items: import("../components/ContextMenu").ContextMenuItems;
                top: number;
                left: number;
            } | null;
            showWelcomeScreen: boolean;
            isLoading: boolean;
            errorMessage: React.ReactNode;
            activeEmbeddable: {
                element: getNonDeletedElements;
                state: "hover" | "active";
            } | null;
            newElement: getNonDeletedElements<getNonDeletedElements> | null;
            resizingElement: getNonDeletedElements | null;
            multiElement: getNonDeletedElements<getNonDeletedElements> | null;
            selectionElement: getNonDeletedElements | null;
            isBindingEnabled: boolean;
            bindingPreference: "enabled" | "disabled";
            isMidpointSnappingEnabled: boolean;
            startBoundElement: getNonDeletedElements<getNonDeletedElements> | null;
            suggestedBinding: {
                element: getNonDeletedElements<getNonDeletedElements>;
                midPoint?: import("@excalidraw/math").GlobalPoint;
            } | null;
            frameToHighlight: getNonDeletedElements<getNonDeletedElements> | null;
            frameRendering: {
                enabled: boolean;
                name: boolean;
                outline: boolean;
                clip: boolean;
            };
            editingFrame: string | null;
            elementsToHighlight: getNonDeletedElements<getNonDeletedElements>[] | null;
            editingTextElement: getNonDeletedElements | null;
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
            currentItemFillStyle: getNonDeletedElements["fillStyle"];
            currentItemStrokeWidth: number;
            currentItemStrokeStyle: getNonDeletedElements["strokeStyle"];
            currentItemRoughness: number;
            currentItemOpacity: number;
            currentItemFontFamily: getNonDeletedElements;
            currentItemFontSize: number;
            currentItemTextAlign: getNonDeletedElements;
            currentItemStartArrowhead: getNonDeletedElements | null;
            currentItemEndArrowhead: getNonDeletedElements | null;
            currentHoveredFontFamily: getNonDeletedElements | null;
            currentItemRoundness: getNonDeletedElements;
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
                sourceElementId: getNonDeletedElements["id"];
            } | {
                name: "charts";
                data: import("../charts").Spreadsheet;
                rawText: string;
            };
            defaultSidebarDockedPreference: boolean;
            lastPointerDownWith: getNonDeletedElements;
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
            zenModeEnabled: boolean;
            theme: Theme;
            gridSize: number;
            gridStep: number;
            gridModeEnabled: boolean;
            viewModeEnabled: boolean;
            selectedGroupIds: {
                [groupId: string]: boolean;
            };
            editingGroupId: getNonDeletedElements | null;
            width: number;
            height: number;
            offsetTop: number;
            offsetLeft: number;
            collaborators: Map<import("../types").SocketId, import("../types").Collaborator>;
            stats: {
                open: boolean;
                panels: number;
            };
            showHyperlinkPopup: false | "info" | "editor";
            selectedLinearElement: getNonDeletedElements | null;
            snapLines: readonly import("../snapping").SnapLine[];
            originSnapOffset: {
                x: number;
                y: number;
            } | null;
            objectsSnapModeEnabled: boolean;
            userToFollow: import("../types").UserToFollow | null;
            followedBy: Set<import("../types").SocketId>;
            isCropping: boolean;
            croppingElementId: getNonDeletedElements["id"] | null;
            searchMatches: Readonly<{
                focusedId: getNonDeletedElements["id"] | null;
                matches: readonly import("../types").SearchMatch[];
            }> | null;
            activeLockedId: string | null;
            lockedMultiSelections: {
                [groupId: string]: true;
            };
            bindMode: getNonDeletedElements;
        };
    } | {
        captureUpdate: any;
        appState?: undefined;
    }>;
    keyTest: (event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean;
} & {
    keyTest?: ((event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean) | undefined;
};
export declare const actionSaveFileToDisk: {
    name: "saveFileToDisk";
    label: string;
    icon: import("react/jsx-runtime").JSX.Element;
    viewMode: true;
    trackEvent: {
        category: "export";
    };
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<AppState>, value: unknown, app: import("../types").AppClassProperties) => Promise<{
        captureUpdate: any;
        appState: {
            openDialog: null;
            fileHandle: import("browser-fs-access").FileSystemHandle | null;
            toast: {
                message: string;
            };
            contextMenu: {
                items: import("../components/ContextMenu").ContextMenuItems;
                top: number;
                left: number;
            } | null;
            showWelcomeScreen: boolean;
            isLoading: boolean;
            errorMessage: React.ReactNode;
            activeEmbeddable: {
                element: getNonDeletedElements;
                state: "hover" | "active";
            } | null;
            newElement: getNonDeletedElements<getNonDeletedElements> | null;
            resizingElement: getNonDeletedElements | null;
            multiElement: getNonDeletedElements<getNonDeletedElements> | null;
            selectionElement: getNonDeletedElements | null;
            isBindingEnabled: boolean;
            bindingPreference: "enabled" | "disabled";
            isMidpointSnappingEnabled: boolean;
            startBoundElement: getNonDeletedElements<getNonDeletedElements> | null;
            suggestedBinding: {
                element: getNonDeletedElements<getNonDeletedElements>;
                midPoint?: import("@excalidraw/math").GlobalPoint;
            } | null;
            frameToHighlight: getNonDeletedElements<getNonDeletedElements> | null;
            frameRendering: {
                enabled: boolean;
                name: boolean;
                outline: boolean;
                clip: boolean;
            };
            editingFrame: string | null;
            elementsToHighlight: getNonDeletedElements<getNonDeletedElements>[] | null;
            editingTextElement: getNonDeletedElements | null;
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
            currentItemFillStyle: getNonDeletedElements["fillStyle"];
            currentItemStrokeWidth: number;
            currentItemStrokeStyle: getNonDeletedElements["strokeStyle"];
            currentItemRoughness: number;
            currentItemOpacity: number;
            currentItemFontFamily: getNonDeletedElements;
            currentItemFontSize: number;
            currentItemTextAlign: getNonDeletedElements;
            currentItemStartArrowhead: getNonDeletedElements | null;
            currentItemEndArrowhead: getNonDeletedElements | null;
            currentHoveredFontFamily: getNonDeletedElements | null;
            currentItemRoundness: getNonDeletedElements;
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
            defaultSidebarDockedPreference: boolean;
            lastPointerDownWith: getNonDeletedElements;
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
            zenModeEnabled: boolean;
            theme: Theme;
            gridSize: number;
            gridStep: number;
            gridModeEnabled: boolean;
            viewModeEnabled: boolean;
            selectedGroupIds: {
                [groupId: string]: boolean;
            };
            editingGroupId: getNonDeletedElements | null;
            width: number;
            height: number;
            offsetTop: number;
            offsetLeft: number;
            collaborators: Map<import("../types").SocketId, import("../types").Collaborator>;
            stats: {
                open: boolean;
                panels: number;
            };
            showHyperlinkPopup: false | "info" | "editor";
            selectedLinearElement: getNonDeletedElements | null;
            snapLines: readonly import("../snapping").SnapLine[];
            originSnapOffset: {
                x: number;
                y: number;
            } | null;
            objectsSnapModeEnabled: boolean;
            userToFollow: import("../types").UserToFollow | null;
            followedBy: Set<import("../types").SocketId>;
            isCropping: boolean;
            croppingElementId: getNonDeletedElements["id"] | null;
            searchMatches: Readonly<{
                focusedId: getNonDeletedElements["id"] | null;
                matches: readonly import("../types").SearchMatch[];
            }> | null;
            activeLockedId: string | null;
            lockedMultiSelections: {
                [groupId: string]: true;
            };
            bindMode: getNonDeletedElements;
        };
    } | {
        captureUpdate: any;
        appState?: undefined;
    }>;
    keyTest: (event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean;
    PanelComponent: ({ updateData }: import("./types").PanelComponentProps) => import("react/jsx-runtime").JSX.Element;
} & {
    keyTest?: ((event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean) | undefined;
};
export declare const actionLoadScene: {
    name: "loadScene";
    label: string;
    trackEvent: {
        category: "export";
    };
    predicate: (elements: readonly ExcalidrawElement[], appState: AppState, props: import("../types").ExcalidrawProps, app: import("../types").AppClassProperties) => boolean;
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<AppState>, _: unknown, app: import("../types").AppClassProperties) => Promise<false | {
        elements: CombineBrandsIfNeeded<T, OrderedExcalidrawElement>;
        appState: {
            contextMenu: {
                items: import("../components/ContextMenu").ContextMenuItems;
                top: number;
                left: number;
            } | null;
            stats: {
                open: boolean;
                panels: number;
            };
            exportWithDarkMode: boolean;
            startBoundElement: getNonDeletedElements<getNonDeletedElements> | null;
            cursorButton: "up" | "down";
            scrollX: number;
            scrollY: number;
            showWelcomeScreen: boolean;
            isLoading: boolean;
            errorMessage: React.ReactNode;
            activeEmbeddable: {
                element: getNonDeletedElements;
                state: "hover" | "active";
            } | null;
            newElement: getNonDeletedElements<getNonDeletedElements> | null;
            resizingElement: getNonDeletedElements | null;
            multiElement: getNonDeletedElements<getNonDeletedElements> | null;
            selectionElement: getNonDeletedElements | null;
            isBindingEnabled: boolean;
            bindingPreference: "enabled" | "disabled";
            isMidpointSnappingEnabled: boolean;
            suggestedBinding: {
                element: getNonDeletedElements<getNonDeletedElements>;
                midPoint?: import("@excalidraw/math").GlobalPoint;
            } | null;
            frameToHighlight: getNonDeletedElements<getNonDeletedElements> | null;
            frameRendering: {
                enabled: boolean;
                name: boolean;
                outline: boolean;
                clip: boolean;
            };
            editingFrame: string | null;
            elementsToHighlight: getNonDeletedElements<getNonDeletedElements>[] | null;
            editingTextElement: getNonDeletedElements | null;
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
            exportScale: number;
            currentItemStrokeColor: string;
            currentItemBackgroundColor: string;
            currentItemFillStyle: getNonDeletedElements["fillStyle"];
            currentItemStrokeWidth: number;
            currentItemStrokeStyle: getNonDeletedElements["strokeStyle"];
            currentItemRoughness: number;
            currentItemOpacity: number;
            currentItemFontFamily: getNonDeletedElements;
            currentItemFontSize: number;
            currentItemTextAlign: getNonDeletedElements;
            currentItemStartArrowhead: getNonDeletedElements | null;
            currentItemEndArrowhead: getNonDeletedElements | null;
            currentHoveredFontFamily: getNonDeletedElements | null;
            currentItemRoundness: getNonDeletedElements;
            currentItemArrowType: "sharp" | "round" | "elbow";
            viewBackgroundColor: string;
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
                sourceElementId: getNonDeletedElements["id"];
            } | {
                name: "charts";
                data: import("../charts").Spreadsheet;
                rawText: string;
            };
            defaultSidebarDockedPreference: boolean;
            lastPointerDownWith: getNonDeletedElements;
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
            theme: Theme;
            gridSize: number;
            gridStep: number;
            gridModeEnabled: boolean;
            viewModeEnabled: boolean;
            selectedGroupIds: {
                [groupId: string]: boolean;
            };
            editingGroupId: getNonDeletedElements | null;
            fileHandle: import("browser-fs-access").FileSystemHandle | null;
            collaborators: Map<import("../types").SocketId, import("../types").Collaborator>;
            showHyperlinkPopup: false | "info" | "editor";
            selectedLinearElement: getNonDeletedElements | null;
            snapLines: readonly import("../snapping").SnapLine[];
            originSnapOffset: {
                x: number;
                y: number;
            } | null;
            objectsSnapModeEnabled: boolean;
            userToFollow: import("../types").UserToFollow | null;
            followedBy: Set<import("../types").SocketId>;
            isCropping: boolean;
            croppingElementId: getNonDeletedElements["id"] | null;
            searchMatches: Readonly<{
                focusedId: getNonDeletedElements["id"] | null;
                matches: readonly import("../types").SearchMatch[];
            }> | null;
            activeLockedId: string | null;
            lockedMultiSelections: {
                [groupId: string]: true;
            };
            bindMode: getNonDeletedElements;
        };
        files: import("../types").BinaryFiles;
        captureUpdate: any;
    } | {
        elements: readonly OrderedExcalidrawElement[];
        appState: {
            errorMessage: any;
            contextMenu: {
                items: import("../components/ContextMenu").ContextMenuItems;
                top: number;
                left: number;
            } | null;
            showWelcomeScreen: boolean;
            isLoading: boolean;
            activeEmbeddable: {
                element: getNonDeletedElements;
                state: "hover" | "active";
            } | null;
            newElement: getNonDeletedElements<getNonDeletedElements> | null;
            resizingElement: getNonDeletedElements | null;
            multiElement: getNonDeletedElements<getNonDeletedElements> | null;
            selectionElement: getNonDeletedElements | null;
            isBindingEnabled: boolean;
            bindingPreference: "enabled" | "disabled";
            isMidpointSnappingEnabled: boolean;
            startBoundElement: getNonDeletedElements<getNonDeletedElements> | null;
            suggestedBinding: {
                element: getNonDeletedElements<getNonDeletedElements>;
                midPoint?: import("@excalidraw/math").GlobalPoint;
            } | null;
            frameToHighlight: getNonDeletedElements<getNonDeletedElements> | null;
            frameRendering: {
                enabled: boolean;
                name: boolean;
                outline: boolean;
                clip: boolean;
            };
            editingFrame: string | null;
            elementsToHighlight: getNonDeletedElements<getNonDeletedElements>[] | null;
            editingTextElement: getNonDeletedElements | null;
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
            currentItemFillStyle: getNonDeletedElements["fillStyle"];
            currentItemStrokeWidth: number;
            currentItemStrokeStyle: getNonDeletedElements["strokeStyle"];
            currentItemRoughness: number;
            currentItemOpacity: number;
            currentItemFontFamily: getNonDeletedElements;
            currentItemFontSize: number;
            currentItemTextAlign: getNonDeletedElements;
            currentItemStartArrowhead: getNonDeletedElements | null;
            currentItemEndArrowhead: getNonDeletedElements | null;
            currentHoveredFontFamily: getNonDeletedElements | null;
            currentItemRoundness: getNonDeletedElements;
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
                sourceElementId: getNonDeletedElements["id"];
            } | {
                name: "charts";
                data: import("../charts").Spreadsheet;
                rawText: string;
            };
            defaultSidebarDockedPreference: boolean;
            lastPointerDownWith: getNonDeletedElements;
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
            theme: Theme;
            gridSize: number;
            gridStep: number;
            gridModeEnabled: boolean;
            viewModeEnabled: boolean;
            selectedGroupIds: {
                [groupId: string]: boolean;
            };
            editingGroupId: getNonDeletedElements | null;
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
            selectedLinearElement: getNonDeletedElements | null;
            snapLines: readonly import("../snapping").SnapLine[];
            originSnapOffset: {
                x: number;
                y: number;
            } | null;
            objectsSnapModeEnabled: boolean;
            userToFollow: import("../types").UserToFollow | null;
            followedBy: Set<import("../types").SocketId>;
            isCropping: boolean;
            croppingElementId: getNonDeletedElements["id"] | null;
            searchMatches: Readonly<{
                focusedId: getNonDeletedElements["id"] | null;
                matches: readonly import("../types").SearchMatch[];
            }> | null;
            activeLockedId: string | null;
            lockedMultiSelections: {
                [groupId: string]: true;
            };
            bindMode: getNonDeletedElements;
        };
        files: import("../types").BinaryFiles;
        captureUpdate: any;
    }>;
    keyTest: (event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean;
} & {
    keyTest?: ((event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean) | undefined;
};
export declare const actionExportWithDarkMode: import("./types").Action<boolean> & {
    keyTest?: ((event: React.KeyboardEvent | KeyboardEvent, appState: AppState, elements: readonly getNonDeletedElements[], app: import("../types").AppClassProperties) => boolean) | undefined;
};
