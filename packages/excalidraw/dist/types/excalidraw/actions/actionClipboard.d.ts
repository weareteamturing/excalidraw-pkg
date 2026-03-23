import { isTextElement } from "@excalidraw/element";
export declare const actionCopy: import("./types").Action<ClipboardEvent | null> & {
    keyTest?: ((event: React.KeyboardEvent | KeyboardEvent, appState: import("../types").AppState, elements: readonly isTextElement[], app: import("../types").AppClassProperties) => boolean) | undefined;
};
export declare const actionPaste: {
    name: "paste";
    label: string;
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>, data: unknown, app: import("../types").AppClassProperties) => Promise<false | {
        captureUpdate: any;
        appState: {
            errorMessage: string;
            contextMenu: {
                items: import("../components/ContextMenu").ContextMenuItems;
                top: number;
                left: number;
            } | null;
            showWelcomeScreen: boolean;
            isLoading: boolean;
            activeEmbeddable: {
                element: isTextElement;
                state: "hover" | "active";
            } | null;
            newElement: isTextElement<isTextElement> | null;
            resizingElement: isTextElement | null;
            multiElement: isTextElement<isTextElement> | null;
            selectionElement: isTextElement | null;
            isBindingEnabled: boolean;
            bindingPreference: "enabled" | "disabled";
            isMidpointSnappingEnabled: boolean;
            startBoundElement: isTextElement<isTextElement> | null;
            suggestedBinding: {
                element: isTextElement<isTextElement>;
                midPoint?: import("@excalidraw/math").GlobalPoint;
            } | null;
            frameToHighlight: isTextElement<isTextElement> | null;
            frameRendering: {
                enabled: boolean;
                name: boolean;
                outline: boolean;
                clip: boolean;
            };
            editingFrame: string | null;
            elementsToHighlight: isTextElement<isTextElement>[] | null;
            editingTextElement: isTextElement | null;
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
            currentItemFillStyle: isTextElement["fillStyle"];
            currentItemStrokeWidth: number;
            currentItemStrokeStyle: isTextElement["strokeStyle"];
            currentItemRoughness: number;
            currentItemOpacity: number;
            currentItemFontFamily: isTextElement;
            currentItemFontSize: number;
            currentItemTextAlign: isTextElement;
            currentItemStartArrowhead: isTextElement | null;
            currentItemEndArrowhead: isTextElement | null;
            currentHoveredFontFamily: isTextElement | null;
            currentItemRoundness: isTextElement;
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
                sourceElementId: isTextElement["id"];
            } | {
                name: "charts";
                data: import("../charts").Spreadsheet;
                rawText: string;
            };
            defaultSidebarDockedPreference: boolean;
            lastPointerDownWith: isTextElement;
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
            theme: isTextElement;
            gridSize: number;
            gridStep: number;
            gridModeEnabled: boolean;
            viewModeEnabled: boolean;
            selectedGroupIds: {
                [groupId: string]: boolean;
            };
            editingGroupId: isTextElement | null;
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
            selectedLinearElement: isTextElement | null;
            snapLines: readonly import("../snapping").SnapLine[];
            originSnapOffset: {
                x: number;
                y: number;
            } | null;
            objectsSnapModeEnabled: boolean;
            userToFollow: import("../types").UserToFollow | null;
            followedBy: Set<import("../types").SocketId>;
            isCropping: boolean;
            croppingElementId: isTextElement["id"] | null;
            searchMatches: Readonly<{
                focusedId: isTextElement["id"] | null;
                matches: readonly import("../types").SearchMatch[];
            }> | null;
            activeLockedId: string | null;
            lockedMultiSelections: {
                [groupId: string]: true;
            };
            bindMode: isTextElement;
        };
    } | {
        captureUpdate: any;
        appState?: undefined;
    }>;
    keyTest: undefined;
} & {
    keyTest?: undefined;
};
export declare const actionCut: import("./types").Action<ClipboardEvent | null> & {
    keyTest?: ((event: React.KeyboardEvent | KeyboardEvent, appState: import("../types").AppState, elements: readonly isTextElement[], app: import("../types").AppClassProperties) => boolean) | undefined;
};
export declare const actionCopyAsSvg: {
    name: "copyAsSvg";
    label: string;
    icon: import("react/jsx-runtime").JSX.Element;
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>, _data: unknown, app: import("../types").AppClassProperties) => Promise<{
        captureUpdate: any;
        appState?: undefined;
    } | {
        appState: {
            toast: {
                message: string;
            };
            errorMessage?: undefined;
        };
        captureUpdate: any;
    } | {
        appState: {
            errorMessage: any;
            toast?: undefined;
        };
        captureUpdate: any;
    }>;
    predicate: (elements: readonly ExcalidrawElement[]) => boolean;
    keywords: string[];
} & {
    keyTest?: undefined;
};
export declare const actionCopyAsPng: {
    name: "copyAsPng";
    label: string;
    icon: import("react/jsx-runtime").JSX.Element;
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>, _data: unknown, app: import("../types").AppClassProperties) => Promise<{
        captureUpdate: any;
        appState?: undefined;
    } | {
        appState: {
            errorMessage: any;
            contextMenu: {
                items: import("../components/ContextMenu").ContextMenuItems;
                top: number;
                left: number;
            } | null;
            showWelcomeScreen: boolean;
            isLoading: boolean;
            activeEmbeddable: {
                element: isTextElement;
                state: "hover" | "active";
            } | null;
            newElement: isTextElement<isTextElement> | null;
            resizingElement: isTextElement | null;
            multiElement: isTextElement<isTextElement> | null;
            selectionElement: isTextElement | null;
            isBindingEnabled: boolean;
            bindingPreference: "enabled" | "disabled";
            isMidpointSnappingEnabled: boolean;
            startBoundElement: isTextElement<isTextElement> | null;
            suggestedBinding: {
                element: isTextElement<isTextElement>;
                midPoint?: import("@excalidraw/math").GlobalPoint;
            } | null;
            frameToHighlight: isTextElement<isTextElement> | null;
            frameRendering: {
                enabled: boolean;
                name: boolean;
                outline: boolean;
                clip: boolean;
            };
            editingFrame: string | null;
            elementsToHighlight: isTextElement<isTextElement>[] | null;
            editingTextElement: isTextElement | null;
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
            currentItemFillStyle: isTextElement["fillStyle"];
            currentItemStrokeWidth: number;
            currentItemStrokeStyle: isTextElement["strokeStyle"];
            currentItemRoughness: number;
            currentItemOpacity: number;
            currentItemFontFamily: isTextElement;
            currentItemFontSize: number;
            currentItemTextAlign: isTextElement;
            currentItemStartArrowhead: isTextElement | null;
            currentItemEndArrowhead: isTextElement | null;
            currentHoveredFontFamily: isTextElement | null;
            currentItemRoundness: isTextElement;
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
                sourceElementId: isTextElement["id"];
            } | {
                name: "charts";
                data: import("../charts").Spreadsheet;
                rawText: string;
            };
            defaultSidebarDockedPreference: boolean;
            lastPointerDownWith: isTextElement;
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
            theme: isTextElement;
            gridSize: number;
            gridStep: number;
            gridModeEnabled: boolean;
            viewModeEnabled: boolean;
            selectedGroupIds: {
                [groupId: string]: boolean;
            };
            editingGroupId: isTextElement | null;
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
            selectedLinearElement: isTextElement | null;
            snapLines: readonly import("../snapping").SnapLine[];
            originSnapOffset: {
                x: number;
                y: number;
            } | null;
            objectsSnapModeEnabled: boolean;
            userToFollow: import("../types").UserToFollow | null;
            followedBy: Set<import("../types").SocketId>;
            isCropping: boolean;
            croppingElementId: isTextElement["id"] | null;
            searchMatches: Readonly<{
                focusedId: isTextElement["id"] | null;
                matches: readonly import("../types").SearchMatch[];
            }> | null;
            activeLockedId: string | null;
            lockedMultiSelections: {
                [groupId: string]: true;
            };
            bindMode: isTextElement;
        };
        captureUpdate: any;
    }>;
    predicate: (elements: readonly ExcalidrawElement[]) => boolean;
    keyTest: (event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean;
    keywords: string[];
} & {
    keyTest?: ((event: import("react").KeyboardEvent<Element> | KeyboardEvent) => boolean) | undefined;
};
export declare const copyText: {
    name: "copyText";
    label: string;
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>, _: unknown, app: import("../types").AppClassProperties) => {
        captureUpdate: any;
    };
    predicate: (elements: readonly ExcalidrawElement[], appState: import("../types").AppState, _: import("../types").ExcalidrawProps, app: import("../types").AppClassProperties) => any;
    keywords: string[];
} & {
    keyTest?: undefined;
};
