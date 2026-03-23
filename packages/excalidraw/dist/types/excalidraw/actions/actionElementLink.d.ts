import { canCreateLinkFromElements } from "@excalidraw/element";
export declare const actionCopyElementLink: {
    name: "copyElementLink";
    label: string;
    icon: import("react/jsx-runtime").JSX.Element;
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>, _: unknown, app: import("../types").AppClassProperties) => Promise<{
        appState: {
            toast: {
                message: string;
                closable: true;
            };
        };
        captureUpdate: any;
        elements?: undefined;
        app?: undefined;
    } | {
        appState: Readonly<import("../types").AppState>;
        elements: readonly OrderedExcalidrawElement[];
        app: import("../types").AppClassProperties;
        captureUpdate: any;
    }>;
    predicate: (elements: readonly ExcalidrawElement[], appState: import("../types").AppState) => any;
} & {
    keyTest?: undefined;
};
export declare const actionLinkToElement: {
    name: "linkToElement";
    label: string;
    icon: import("react/jsx-runtime").JSX.Element;
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>, _: unknown, app: import("../types").AppClassProperties) => {
        elements: readonly OrderedExcalidrawElement[];
        appState: Readonly<import("../types").AppState>;
        app: import("../types").AppClassProperties;
        captureUpdate: any;
    } | {
        appState: {
            openDialog: {
                name: "elementLinkSelector";
                sourceElementId: any;
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
                element: canCreateLinkFromElements;
                state: "hover" | "active";
            } | null;
            newElement: canCreateLinkFromElements<canCreateLinkFromElements> | null;
            resizingElement: canCreateLinkFromElements | null;
            multiElement: canCreateLinkFromElements<canCreateLinkFromElements> | null;
            selectionElement: canCreateLinkFromElements | null;
            isBindingEnabled: boolean;
            bindingPreference: "enabled" | "disabled";
            isMidpointSnappingEnabled: boolean;
            startBoundElement: canCreateLinkFromElements<canCreateLinkFromElements> | null;
            suggestedBinding: {
                element: canCreateLinkFromElements<canCreateLinkFromElements>;
                midPoint?: import("@excalidraw/math").GlobalPoint;
            } | null;
            frameToHighlight: canCreateLinkFromElements<canCreateLinkFromElements> | null;
            frameRendering: {
                enabled: boolean;
                name: boolean;
                outline: boolean;
                clip: boolean;
            };
            editingFrame: string | null;
            elementsToHighlight: canCreateLinkFromElements<canCreateLinkFromElements>[] | null;
            editingTextElement: canCreateLinkFromElements | null;
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
            currentItemFillStyle: canCreateLinkFromElements["fillStyle"];
            currentItemStrokeWidth: number;
            currentItemStrokeStyle: canCreateLinkFromElements["strokeStyle"];
            currentItemRoughness: number;
            currentItemOpacity: number;
            currentItemFontFamily: canCreateLinkFromElements;
            currentItemFontSize: number;
            currentItemTextAlign: canCreateLinkFromElements;
            currentItemStartArrowhead: canCreateLinkFromElements | null;
            currentItemEndArrowhead: canCreateLinkFromElements | null;
            currentHoveredFontFamily: canCreateLinkFromElements | null;
            currentItemRoundness: canCreateLinkFromElements;
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
            lastPointerDownWith: canCreateLinkFromElements;
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
            theme: canCreateLinkFromElements;
            gridSize: number;
            gridStep: number;
            gridModeEnabled: boolean;
            viewModeEnabled: boolean;
            selectedGroupIds: {
                [groupId: string]: boolean;
            };
            editingGroupId: canCreateLinkFromElements | null;
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
            selectedLinearElement: canCreateLinkFromElements | null;
            snapLines: readonly import("../snapping").SnapLine[];
            originSnapOffset: {
                x: number;
                y: number;
            } | null;
            objectsSnapModeEnabled: boolean;
            userToFollow: import("../types").UserToFollow | null;
            followedBy: Set<import("../types").SocketId>;
            isCropping: boolean;
            croppingElementId: canCreateLinkFromElements["id"] | null;
            searchMatches: Readonly<{
                focusedId: canCreateLinkFromElements["id"] | null;
                matches: readonly import("../types").SearchMatch[];
            }> | null;
            activeLockedId: string | null;
            lockedMultiSelections: {
                [groupId: string]: true;
            };
            bindMode: canCreateLinkFromElements;
        };
        captureUpdate: any;
        elements?: undefined;
        app?: undefined;
    };
    predicate: (elements: readonly ExcalidrawElement[], appState: import("../types").AppState, appProps: import("../types").ExcalidrawProps, app: import("../types").AppClassProperties) => any;
    trackEvent: false;
} & {
    keyTest?: undefined;
};
