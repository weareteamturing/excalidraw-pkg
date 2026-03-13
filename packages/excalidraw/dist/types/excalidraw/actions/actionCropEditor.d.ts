import type { ExcalidrawImageElement } from "@excalidraw/element/types";
export declare const actionToggleCropEditor: {
    name: "cropEditor";
    label: string;
    icon: import("react/jsx-runtime").JSX.Element;
    viewMode: true;
    trackEvent: {
        category: "menu";
    };
    keywords: string[];
    perform(elements: readonly OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>, _: unknown, app: import("../types").AppClassProperties): {
        appState: {
            isCropping: false;
            croppingElementId: any;
            contextMenu: {
                items: import("../components/ContextMenu").ContextMenuItems;
                top: number;
                left: number;
            } | null;
            showWelcomeScreen: boolean;
            isLoading: boolean;
            errorMessage: React.ReactNode;
            activeEmbeddable: {
                element: ExcalidrawImageElement;
                state: "hover" | "active";
            } | null;
            newElement: ExcalidrawImageElement<ExcalidrawImageElement> | null;
            resizingElement: ExcalidrawImageElement | null;
            multiElement: ExcalidrawImageElement<ExcalidrawImageElement> | null;
            selectionElement: ExcalidrawImageElement | null;
            isBindingEnabled: boolean;
            bindingPreference: "enabled" | "disabled";
            isMidpointSnappingEnabled: boolean;
            startBoundElement: ExcalidrawImageElement<ExcalidrawImageElement> | null;
            suggestedBinding: {
                element: ExcalidrawImageElement<ExcalidrawImageElement>;
                midPoint?: import("@excalidraw/math").GlobalPoint;
            } | null;
            frameToHighlight: ExcalidrawImageElement<ExcalidrawImageElement> | null;
            frameRendering: {
                enabled: boolean;
                name: boolean;
                outline: boolean;
                clip: boolean;
            };
            editingFrame: string | null;
            elementsToHighlight: ExcalidrawImageElement<ExcalidrawImageElement>[] | null;
            editingTextElement: ExcalidrawImageElement | null;
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
            currentItemFillStyle: ExcalidrawImageElement["fillStyle"];
            currentItemStrokeWidth: number;
            currentItemStrokeStyle: ExcalidrawImageElement["strokeStyle"];
            currentItemRoughness: number;
            currentItemOpacity: number;
            currentItemFontFamily: ExcalidrawImageElement;
            currentItemFontSize: number;
            currentItemTextAlign: ExcalidrawImageElement;
            currentItemStartArrowhead: ExcalidrawImageElement | null;
            currentItemEndArrowhead: ExcalidrawImageElement | null;
            currentHoveredFontFamily: ExcalidrawImageElement | null;
            currentItemRoundness: ExcalidrawImageElement;
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
                sourceElementId: ExcalidrawImageElement["id"];
            } | {
                name: "charts";
                data: import("../charts").Spreadsheet;
                rawText: string;
            };
            defaultSidebarDockedPreference: boolean;
            lastPointerDownWith: ExcalidrawImageElement;
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
            theme: ExcalidrawImageElement;
            gridSize: number;
            gridStep: number;
            gridModeEnabled: boolean;
            viewModeEnabled: boolean;
            selectedGroupIds: {
                [groupId: string]: boolean;
            };
            editingGroupId: ExcalidrawImageElement | null;
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
            searchMatches: Readonly<{
                focusedId: ExcalidrawImageElement["id"] | null;
                matches: readonly import("../types").SearchMatch[];
            }> | null;
            activeLockedId: string | null;
            lockedMultiSelections: {
                [groupId: string]: true;
            };
            bindMode: ExcalidrawImageElement;
        };
        captureUpdate: "IMMEDIATELY";
    };
    predicate: (elements: readonly ExcalidrawElement[], appState: import("../types").AppState, _: import("../types").ExcalidrawProps, app: import("../types").AppClassProperties) => boolean;
    PanelComponent: ({ appState, updateData, app }: import("./types").PanelComponentProps) => import("react/jsx-runtime").JSX.Element;
} & {
    keyTest?: undefined;
};
