import { MOBILE_ACTION_BUTTON_BG } from "@excalidraw/common";
import type { ExcalidrawElement } from "@excalidraw/element/types";
import type { AppClassProperties, AppState } from "../types";
export declare const actionDeleteSelected: {
    name: "deleteSelectedElements";
    label: string;
    icon: import("react/jsx-runtime").JSX.Element;
    trackEvent: {
        category: "element";
        action: string;
    };
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<AppState>, formData: unknown, app: AppClassProperties) => false | {
        elements: readonly OrderedExcalidrawElement[];
        appState: {
            selectedLinearElement: any;
            contextMenu: {
                items: import("../components/ContextMenu").ContextMenuItems;
                top: number;
                left: number;
            } | null;
            showWelcomeScreen: boolean;
            isLoading: boolean;
            errorMessage: React.ReactNode;
            activeEmbeddable: {
                element: MOBILE_ACTION_BUTTON_BG;
                state: "hover" | "active";
            } | null;
            newElement: MOBILE_ACTION_BUTTON_BG<MOBILE_ACTION_BUTTON_BG> | null;
            resizingElement: MOBILE_ACTION_BUTTON_BG | null;
            multiElement: MOBILE_ACTION_BUTTON_BG<MOBILE_ACTION_BUTTON_BG> | null;
            selectionElement: MOBILE_ACTION_BUTTON_BG | null;
            isBindingEnabled: boolean;
            bindingPreference: "enabled" | "disabled";
            isMidpointSnappingEnabled: boolean;
            startBoundElement: MOBILE_ACTION_BUTTON_BG<MOBILE_ACTION_BUTTON_BG> | null;
            suggestedBinding: {
                element: MOBILE_ACTION_BUTTON_BG<MOBILE_ACTION_BUTTON_BG>;
                midPoint?: import("@excalidraw/math").GlobalPoint;
            } | null;
            frameToHighlight: MOBILE_ACTION_BUTTON_BG<MOBILE_ACTION_BUTTON_BG> | null;
            frameRendering: {
                enabled: boolean;
                name: boolean;
                outline: boolean;
                clip: boolean;
            };
            editingFrame: string | null;
            elementsToHighlight: MOBILE_ACTION_BUTTON_BG<ExcalidrawElement>[] | null;
            editingTextElement: MOBILE_ACTION_BUTTON_BG | null;
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
            currentItemFontFamily: MOBILE_ACTION_BUTTON_BG;
            currentItemFontSize: number;
            currentItemTextAlign: MOBILE_ACTION_BUTTON_BG;
            currentItemStartArrowhead: MOBILE_ACTION_BUTTON_BG | null;
            currentItemEndArrowhead: MOBILE_ACTION_BUTTON_BG | null;
            currentHoveredFontFamily: MOBILE_ACTION_BUTTON_BG | null;
            currentItemRoundness: MOBILE_ACTION_BUTTON_BG;
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
            lastPointerDownWith: MOBILE_ACTION_BUTTON_BG;
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
            theme: MOBILE_ACTION_BUTTON_BG;
            gridSize: number;
            gridStep: number;
            gridModeEnabled: boolean;
            viewModeEnabled: boolean;
            selectedGroupIds: {
                [groupId: string]: boolean;
            };
            editingGroupId: MOBILE_ACTION_BUTTON_BG | null;
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
            activeLockedId: string | null;
            lockedMultiSelections: {
                [groupId: string]: true;
            };
            bindMode: MOBILE_ACTION_BUTTON_BG;
        };
        captureUpdate: any;
    } | {
        elements: any[];
        appState: any;
        captureUpdate: any;
    };
    keyTest: (event: import("react").KeyboardEvent<Element> | KeyboardEvent, appState: AppState, elements: readonly ExcalidrawElement[]) => boolean;
    PanelComponent: ({ elements, appState, updateData, app }: import("./types").PanelComponentProps) => import("react/jsx-runtime").JSX.Element;
} & {
    keyTest?: ((event: import("react").KeyboardEvent<Element> | KeyboardEvent, appState: AppState, elements: readonly ExcalidrawElement[]) => boolean) | undefined;
};
