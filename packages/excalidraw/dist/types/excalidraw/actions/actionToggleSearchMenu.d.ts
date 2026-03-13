import type { AppState } from "../types";
export declare const actionToggleSearchMenu: {
    name: "searchMenu";
    icon: import("react/jsx-runtime").JSX.Element;
    keywords: string[];
    label: string;
    viewMode: true;
    trackEvent: {
        category: "search_menu";
        action: string;
        predicate: (appState: Readonly<AppState>) => boolean;
    };
    perform(elements: readonly OrderedExcalidrawElement[], appState: Readonly<AppState>, _: unknown, app: import("../types").AppClassProperties): false | {
        appState: {
            openSidebar: {
                name: "default";
                tab: string;
            };
            openDialog: null;
            contextMenu: {
                items: import("../components/ContextMenu").ContextMenuItems;
                top: number;
                left: number;
            } | null;
            showWelcomeScreen: boolean;
            isLoading: boolean;
            errorMessage: React.ReactNode;
            activeEmbeddable: {
                element: NonDeletedExcalidrawElement;
                state: "hover" | "active";
            } | null;
            newElement: NonDeleted<ExcalidrawNonSelectionElement> | null;
            resizingElement: NonDeletedExcalidrawElement | null;
            multiElement: NonDeleted<ExcalidrawLinearElement> | null;
            selectionElement: NonDeletedExcalidrawElement | null;
            isBindingEnabled: boolean;
            bindingPreference: "enabled" | "disabled";
            isMidpointSnappingEnabled: boolean;
            startBoundElement: NonDeleted<ExcalidrawBindableElement> | null;
            suggestedBinding: {
                element: NonDeleted<ExcalidrawBindableElement>;
                midPoint?: import("@excalidraw/math").GlobalPoint;
            } | null;
            frameToHighlight: NonDeleted<ExcalidrawFrameLikeElement> | null;
            frameRendering: {
                enabled: boolean;
                name: boolean;
                outline: boolean;
                clip: boolean;
            };
            editingFrame: string | null;
            elementsToHighlight: NonDeleted<ExcalidrawElement>[] | null;
            editingTextElement: NonDeletedExcalidrawElement | null;
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
            currentItemFillStyle: ExcalidrawElement;
            currentItemStrokeWidth: number;
            currentItemStrokeStyle: ExcalidrawElement;
            currentItemRoughness: number;
            currentItemOpacity: number;
            currentItemFontFamily: FontFamilyValues;
            currentItemFontSize: number;
            currentItemTextAlign: TextAlign;
            currentItemStartArrowhead: Arrowhead | null;
            currentItemEndArrowhead: Arrowhead | null;
            currentHoveredFontFamily: FontFamilyValues | null;
            currentItemRoundness: StrokeRoundness;
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
            defaultSidebarDockedPreference: boolean;
            lastPointerDownWith: PointerType;
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
            editingGroupId: GroupId | null;
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
            croppingElementId: ExcalidrawElement | null;
            searchMatches: Readonly<{
                focusedId: ExcalidrawElement | null;
                matches: readonly import("../types").SearchMatch[];
            }> | null;
            activeLockedId: string | null;
            lockedMultiSelections: {
                [groupId: string]: true;
            };
            bindMode: BindMode;
        };
        captureUpdate: "EVENTUALLY";
    };
    checked: (appState: AppState) => boolean;
    predicate: (element: readonly ExcalidrawElement[], appState: AppState, props: import("../types").ExcalidrawProps) => boolean;
    keyTest: (event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean;
} & {
    keyTest?: ((event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean) | undefined;
};
