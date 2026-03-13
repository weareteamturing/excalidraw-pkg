import type { ExcalidrawTextElement } from "@excalidraw/element/types";
export declare let copiedStyles: string;
export declare const actionCopyStyles: {
    name: "copyStyles";
    label: string;
    icon: import("react/jsx-runtime").JSX.Element;
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>, formData: unknown, app: import("../types").AppClassProperties) => {
        appState: {
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
                element: ExcalidrawTextElement;
                state: "hover" | "active";
            } | null;
            newElement: ExcalidrawTextElement<ExcalidrawTextElement> | null;
            resizingElement: ExcalidrawTextElement | null;
            multiElement: ExcalidrawTextElement<ExcalidrawTextElement> | null;
            selectionElement: ExcalidrawTextElement | null;
            isBindingEnabled: boolean;
            bindingPreference: "enabled" | "disabled";
            isMidpointSnappingEnabled: boolean;
            startBoundElement: ExcalidrawTextElement<ExcalidrawTextElement> | null;
            suggestedBinding: {
                element: ExcalidrawTextElement<ExcalidrawTextElement>;
                midPoint?: import("@excalidraw/math").GlobalPoint;
            } | null;
            frameToHighlight: ExcalidrawTextElement<ExcalidrawTextElement> | null;
            frameRendering: {
                enabled: boolean;
                name: boolean;
                outline: boolean;
                clip: boolean;
            };
            editingFrame: string | null;
            elementsToHighlight: ExcalidrawTextElement<ExcalidrawTextElement>[] | null;
            editingTextElement: ExcalidrawTextElement | null;
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
            currentItemFillStyle: ExcalidrawTextElement["fillStyle"];
            currentItemStrokeWidth: number;
            currentItemStrokeStyle: ExcalidrawTextElement["strokeStyle"];
            currentItemRoughness: number;
            currentItemOpacity: number;
            currentItemFontFamily: ExcalidrawTextElement;
            currentItemFontSize: number;
            currentItemTextAlign: ExcalidrawTextElement;
            currentItemStartArrowhead: ExcalidrawTextElement | null;
            currentItemEndArrowhead: ExcalidrawTextElement | null;
            currentHoveredFontFamily: ExcalidrawTextElement | null;
            currentItemRoundness: ExcalidrawTextElement;
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
                sourceElementId: ExcalidrawTextElement["id"];
            } | {
                name: "charts";
                data: import("../charts").Spreadsheet;
                rawText: string;
            };
            defaultSidebarDockedPreference: boolean;
            lastPointerDownWith: ExcalidrawTextElement;
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
            theme: ExcalidrawTextElement;
            gridSize: number;
            gridStep: number;
            gridModeEnabled: boolean;
            viewModeEnabled: boolean;
            selectedGroupIds: {
                [groupId: string]: boolean;
            };
            editingGroupId: ExcalidrawTextElement | null;
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
            croppingElementId: ExcalidrawTextElement["id"] | null;
            searchMatches: Readonly<{
                focusedId: ExcalidrawTextElement["id"] | null;
                matches: readonly import("../types").SearchMatch[];
            }> | null;
            activeLockedId: string | null;
            lockedMultiSelections: {
                [groupId: string]: true;
            };
            bindMode: ExcalidrawTextElement;
        };
        captureUpdate: "EVENTUALLY";
    };
    keyTest: (event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean;
} & {
    keyTest?: ((event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean) | undefined;
};
export declare const actionPasteStyles: {
    name: "pasteStyles";
    label: string;
    icon: import("react/jsx-runtime").JSX.Element;
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>, formData: unknown, app: import("../types").AppClassProperties) => {
        elements: readonly OrderedExcalidrawElement[];
        captureUpdate: "EVENTUALLY";
    } | {
        elements: OrderedExcalidrawElement[];
        captureUpdate: "IMMEDIATELY";
    };
    keyTest: (event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean;
} & {
    keyTest?: ((event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean) | undefined;
};
