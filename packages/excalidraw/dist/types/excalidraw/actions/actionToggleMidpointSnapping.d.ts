export declare const actionToggleMidpointSnapping: {
    name: "midpointSnapping";
    label: string;
    viewMode: false;
    trackEvent: {
        category: "canvas";
        predicate: (appState: Readonly<import("../types").AppState>) => boolean;
    };
    perform(elements: readonly OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>): {
        appState: {
            isMidpointSnappingEnabled: boolean;
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
                sourceElementId: ExcalidrawElement;
            } | {
                name: "charts";
                data: import("../charts").Spreadsheet;
                rawText: string;
            };
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
        captureUpdate: "NEVER";
    };
    checked: (appState: Readonly<import("../types").AppState>) => boolean;
} & {
    keyTest?: undefined;
};
