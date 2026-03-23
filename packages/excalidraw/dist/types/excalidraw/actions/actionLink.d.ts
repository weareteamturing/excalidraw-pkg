import { isEmbeddableElement } from "@excalidraw/element";
export declare const actionLink: {
    name: "hyperlink";
    label: (elements: readonly ExcalidrawElement[], appState: Readonly<import("../types").AppState>) => "labels.link.editEmbed" | "labels.link.edit" | "labels.link.create";
    icon: import("react/jsx-runtime").JSX.Element;
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>) => false | {
        elements: readonly OrderedExcalidrawElement[];
        appState: {
            showHyperlinkPopup: "editor";
            openMenu: null;
            contextMenu: {
                items: import("../components/ContextMenu").ContextMenuItems;
                top: number;
                left: number;
            } | null;
            showWelcomeScreen: boolean;
            isLoading: boolean;
            errorMessage: React.ReactNode;
            activeEmbeddable: {
                element: isEmbeddableElement;
                state: "hover" | "active";
            } | null;
            newElement: isEmbeddableElement<isEmbeddableElement> | null;
            resizingElement: isEmbeddableElement | null;
            multiElement: isEmbeddableElement<isEmbeddableElement> | null;
            selectionElement: isEmbeddableElement | null;
            isBindingEnabled: boolean;
            bindingPreference: "enabled" | "disabled";
            isMidpointSnappingEnabled: boolean;
            startBoundElement: isEmbeddableElement<isEmbeddableElement> | null;
            suggestedBinding: {
                element: isEmbeddableElement<isEmbeddableElement>;
                midPoint?: import("@excalidraw/math").GlobalPoint;
            } | null;
            frameToHighlight: isEmbeddableElement<isEmbeddableElement> | null;
            frameRendering: {
                enabled: boolean;
                name: boolean;
                outline: boolean;
                clip: boolean;
            };
            editingFrame: string | null;
            elementsToHighlight: isEmbeddableElement<isEmbeddableElement>[] | null;
            editingTextElement: isEmbeddableElement | null;
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
            currentItemFillStyle: isEmbeddableElement["fillStyle"];
            currentItemStrokeWidth: number;
            currentItemStrokeStyle: isEmbeddableElement["strokeStyle"];
            currentItemRoughness: number;
            currentItemOpacity: number;
            currentItemFontFamily: isEmbeddableElement;
            currentItemFontSize: number;
            currentItemTextAlign: isEmbeddableElement;
            currentItemStartArrowhead: isEmbeddableElement | null;
            currentItemEndArrowhead: isEmbeddableElement | null;
            currentHoveredFontFamily: isEmbeddableElement | null;
            currentItemRoundness: isEmbeddableElement;
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
                sourceElementId: isEmbeddableElement["id"];
            } | {
                name: "charts";
                data: import("../charts").Spreadsheet;
                rawText: string;
            };
            defaultSidebarDockedPreference: boolean;
            lastPointerDownWith: isEmbeddableElement;
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
            theme: isEmbeddableElement;
            gridSize: number;
            gridStep: number;
            gridModeEnabled: boolean;
            viewModeEnabled: boolean;
            selectedGroupIds: {
                [groupId: string]: boolean;
            };
            editingGroupId: isEmbeddableElement | null;
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
            selectedLinearElement: isEmbeddableElement | null;
            snapLines: readonly import("../snapping").SnapLine[];
            originSnapOffset: {
                x: number;
                y: number;
            } | null;
            objectsSnapModeEnabled: boolean;
            userToFollow: import("../types").UserToFollow | null;
            followedBy: Set<import("../types").SocketId>;
            isCropping: boolean;
            croppingElementId: isEmbeddableElement["id"] | null;
            searchMatches: Readonly<{
                focusedId: isEmbeddableElement["id"] | null;
                matches: readonly import("../types").SearchMatch[];
            }> | null;
            activeLockedId: string | null;
            lockedMultiSelections: {
                [groupId: string]: true;
            };
            bindMode: isEmbeddableElement;
        };
        captureUpdate: any;
    };
    trackEvent: {
        category: "hyperlink";
        action: string;
    };
    keyTest: (event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean;
    predicate: (elements: readonly ExcalidrawElement[], appState: import("../types").AppState) => boolean;
    PanelComponent: ({ elements, appState, updateData }: import("./types").PanelComponentProps) => import("react/jsx-runtime").JSX.Element;
} & {
    keyTest?: ((event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean) | undefined;
};
