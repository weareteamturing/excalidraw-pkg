import { CaptureUpdateAction } from "@excalidraw/element";
export declare const actionToggleObjectsSnapMode: {
    name: "objectsSnapMode";
    label: string;
    icon: import("react/jsx-runtime").JSX.Element;
    viewMode: false;
    trackEvent: {
        category: "canvas";
        predicate: (appState: Readonly<import("../types").AppState>) => boolean;
    };
    perform(elements: readonly OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>): {
        appState: {
            objectsSnapModeEnabled: boolean;
            gridModeEnabled: false;
            contextMenu: {
                items: import("../components/ContextMenu").ContextMenuItems;
                top: number;
                left: number;
            } | null;
            showWelcomeScreen: boolean;
            isLoading: boolean;
            errorMessage: React.ReactNode;
            activeEmbeddable: {
                element: CaptureUpdateAction;
                state: "hover" | "active";
            } | null;
            newElement: CaptureUpdateAction<CaptureUpdateAction> | null;
            resizingElement: CaptureUpdateAction | null;
            multiElement: CaptureUpdateAction<CaptureUpdateAction> | null;
            selectionElement: CaptureUpdateAction | null;
            isBindingEnabled: boolean;
            bindingPreference: "enabled" | "disabled";
            isMidpointSnappingEnabled: boolean;
            startBoundElement: CaptureUpdateAction<CaptureUpdateAction> | null;
            suggestedBinding: {
                element: CaptureUpdateAction<CaptureUpdateAction>;
                midPoint?: import("@excalidraw/math").GlobalPoint;
            } | null;
            frameToHighlight: CaptureUpdateAction<CaptureUpdateAction> | null;
            frameRendering: {
                enabled: boolean;
                name: boolean;
                outline: boolean;
                clip: boolean;
            };
            editingFrame: string | null;
            elementsToHighlight: CaptureUpdateAction<CaptureUpdateAction>[] | null;
            editingTextElement: CaptureUpdateAction | null;
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
            currentItemFillStyle: CaptureUpdateAction["fillStyle"];
            currentItemStrokeWidth: number;
            currentItemStrokeStyle: CaptureUpdateAction["strokeStyle"];
            currentItemRoughness: number;
            currentItemOpacity: number;
            currentItemFontFamily: CaptureUpdateAction;
            currentItemFontSize: number;
            currentItemTextAlign: CaptureUpdateAction;
            currentItemStartArrowhead: CaptureUpdateAction | null;
            currentItemEndArrowhead: CaptureUpdateAction | null;
            currentHoveredFontFamily: CaptureUpdateAction | null;
            currentItemRoundness: CaptureUpdateAction;
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
                sourceElementId: CaptureUpdateAction["id"];
            } | {
                name: "charts";
                data: import("../charts").Spreadsheet;
                rawText: string;
            };
            defaultSidebarDockedPreference: boolean;
            lastPointerDownWith: CaptureUpdateAction;
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
            theme: CaptureUpdateAction;
            gridSize: number;
            gridStep: number;
            viewModeEnabled: boolean;
            selectedGroupIds: {
                [groupId: string]: boolean;
            };
            editingGroupId: CaptureUpdateAction | null;
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
            selectedLinearElement: CaptureUpdateAction | null;
            snapLines: readonly import("../snapping").SnapLine[];
            originSnapOffset: {
                x: number;
                y: number;
            } | null;
            userToFollow: import("../types").UserToFollow | null;
            followedBy: Set<import("../types").SocketId>;
            isCropping: boolean;
            croppingElementId: CaptureUpdateAction["id"] | null;
            searchMatches: Readonly<{
                focusedId: CaptureUpdateAction["id"] | null;
                matches: readonly import("../types").SearchMatch[];
            }> | null;
            activeLockedId: string | null;
            lockedMultiSelections: {
                [groupId: string]: true;
            };
            bindMode: CaptureUpdateAction;
        };
        captureUpdate: any;
    };
    checked: (appState: Readonly<import("../types").AppState>) => boolean;
    predicate: (elements: readonly ExcalidrawElement[], appState: import("../types").AppState, appProps: import("../types").ExcalidrawProps) => boolean;
    keyTest: (event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean;
} & {
    keyTest?: ((event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean) | undefined;
};
