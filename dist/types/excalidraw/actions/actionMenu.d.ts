import { CaptureUpdateAction } from "@excalidraw/element";
export declare const actionShortcuts: {
    name: "toggleShortcuts";
    label: string;
    icon: import("react/jsx-runtime").JSX.Element;
    viewMode: true;
    trackEvent: {
        category: "menu";
        action: string;
    };
    perform: (_elements: readonly OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>, _: unknown, { focusContainer }: import("../types").AppClassProperties) => {
        appState: {
            openDialog: {
                name: "help";
            } | null;
            openMenu: null;
            openPopup: null;
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
            openSidebar: {
                name: import("../types").SidebarName;
                tab?: import("../types").SidebarTabName;
            } | null;
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
            gridModeEnabled: boolean;
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
            objectsSnapModeEnabled: boolean;
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
    keyTest: (event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean;
} & {
    keyTest?: ((event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean) | undefined;
};
