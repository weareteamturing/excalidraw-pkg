import { isElbowArrow } from "@excalidraw/element";
import type { ExcalidrawLinearElement } from "@excalidraw/element/types";
export declare const actionToggleLinearEditor: {
    name: "toggleLinearEditor";
    category: string;
    label: (elements: readonly ExcalidrawElement[], appState: Readonly<import("../types").AppState>, app: import("../types").AppClassProperties) => "labels.lineEditor.editArrow" | "labels.lineEditor.edit";
    keywords: string[];
    trackEvent: {
        category: "element";
    };
    predicate: (elements: readonly ExcalidrawElement[], appState: import("../types").AppState, _: import("../types").ExcalidrawProps, app: import("../types").AppClassProperties) => boolean;
    perform(elements: readonly OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>, _: unknown, app: import("../types").AppClassProperties): {
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
                element: isElbowArrow;
                state: "hover" | "active";
            } | null;
            newElement: isElbowArrow<isElbowArrow> | null;
            resizingElement: isElbowArrow | null;
            multiElement: isElbowArrow<ExcalidrawLinearElement> | null;
            selectionElement: isElbowArrow | null;
            isBindingEnabled: boolean;
            bindingPreference: "enabled" | "disabled";
            isMidpointSnappingEnabled: boolean;
            startBoundElement: isElbowArrow<isElbowArrow> | null;
            suggestedBinding: {
                element: isElbowArrow<isElbowArrow>;
                midPoint?: import("@excalidraw/math").GlobalPoint;
            } | null;
            frameToHighlight: isElbowArrow<isElbowArrow> | null;
            frameRendering: {
                enabled: boolean;
                name: boolean;
                outline: boolean;
                clip: boolean;
            };
            editingFrame: string | null;
            elementsToHighlight: isElbowArrow<isElbowArrow>[] | null;
            editingTextElement: isElbowArrow | null;
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
            currentItemFillStyle: isElbowArrow["fillStyle"];
            currentItemStrokeWidth: number;
            currentItemStrokeStyle: isElbowArrow["strokeStyle"];
            currentItemRoughness: number;
            currentItemOpacity: number;
            currentItemFontFamily: isElbowArrow;
            currentItemFontSize: number;
            currentItemTextAlign: isElbowArrow;
            currentItemStartArrowhead: isElbowArrow | null;
            currentItemEndArrowhead: isElbowArrow | null;
            currentHoveredFontFamily: isElbowArrow | null;
            currentItemRoundness: isElbowArrow;
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
                sourceElementId: isElbowArrow["id"];
            } | {
                name: "charts";
                data: import("../charts").Spreadsheet;
                rawText: string;
            };
            defaultSidebarDockedPreference: boolean;
            lastPointerDownWith: isElbowArrow;
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
            theme: isElbowArrow;
            gridSize: number;
            gridStep: number;
            gridModeEnabled: boolean;
            viewModeEnabled: boolean;
            selectedGroupIds: {
                [groupId: string]: boolean;
            };
            editingGroupId: isElbowArrow | null;
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
            croppingElementId: isElbowArrow["id"] | null;
            searchMatches: Readonly<{
                focusedId: isElbowArrow["id"] | null;
                matches: readonly import("../types").SearchMatch[];
            }> | null;
            activeLockedId: string | null;
            lockedMultiSelections: {
                [groupId: string]: true;
            };
            bindMode: isElbowArrow;
        };
        captureUpdate: any;
    };
    PanelComponent: ({ appState, updateData, app }: import("./types").PanelComponentProps) => import("react/jsx-runtime").JSX.Element | null;
} & {
    keyTest?: undefined;
};
export declare const actionTogglePolygon: {
    name: "togglePolygon";
    category: string;
    icon: import("react/jsx-runtime").JSX.Element;
    keywords: string[];
    label: (elements: readonly ExcalidrawElement[], appState: Readonly<import("../types").AppState>, app: import("../types").AppClassProperties) => "labels.polygon.breakPolygon" | "labels.polygon.convertToPolygon";
    trackEvent: {
        category: "element";
    };
    predicate: (elements: readonly ExcalidrawElement[], appState: import("../types").AppState, _: import("../types").ExcalidrawProps, app: import("../types").AppClassProperties) => any;
    perform(elements: readonly OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>, _: unknown, app: import("../types").AppClassProperties): false | {
        elements: OrderedExcalidrawElement[];
        appState: Readonly<import("../types").AppState>;
        captureUpdate: any;
    };
    PanelComponent: ({ appState, updateData, app }: import("./types").PanelComponentProps) => import("react/jsx-runtime").JSX.Element | null;
} & {
    keyTest?: undefined;
};
