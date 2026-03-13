import type { ExcalidrawElement } from "@excalidraw/element/types";
import type { AppState, BinaryFiles, LibraryItems } from "../types";
import type { ImportedDataState, ImportedLibraryData } from "./types";
export declare const serializeAsJSON: (elements: readonly ExcalidrawElement[], appState: Partial<AppState>, files: BinaryFiles, type: "local" | "database") => string;
export declare const saveAsJSON: (elements: readonly ExcalidrawElement[], appState: AppState, files: BinaryFiles, 
/** filename */
name?: string) => Promise<{
    fileHandle: import("browser-fs-access").FileSystemHandle | null;
}>;
export declare const loadFromJSON: (localAppState: AppState, localElements: readonly ExcalidrawElement[] | null) => Promise<{
    elements: ExcalidrawElement[];
    appState: {
        zoom: import("../types").Zoom;
        name: string | null;
        theme: ExcalidrawElement;
        isLoading: boolean;
        startBoundElement: ExcalidrawElement<ExcalidrawElement> | null;
        cursorButton: "up" | "down";
        scrollX: number;
        scrollY: number;
        contextMenu: {
            items: import("../components/ContextMenu").ContextMenuItems;
            top: number;
            left: number;
        } | null;
        showWelcomeScreen: boolean;
        errorMessage: React.ReactNode;
        activeEmbeddable: {
            element: ExcalidrawElement;
            state: "hover" | "active";
        } | null;
        newElement: ExcalidrawElement<ExcalidrawElement> | null;
        resizingElement: ExcalidrawElement | null;
        multiElement: ExcalidrawElement<ExcalidrawElement> | null;
        selectionElement: ExcalidrawElement | null;
        isBindingEnabled: boolean;
        bindingPreference: "enabled" | "disabled";
        isMidpointSnappingEnabled: boolean;
        suggestedBinding: {
            element: ExcalidrawElement<ExcalidrawElement>;
            midPoint?: import("@excalidraw/math").GlobalPoint;
        } | null;
        frameToHighlight: ExcalidrawElement<ExcalidrawElement> | null;
        frameRendering: {
            enabled: boolean;
            name: boolean;
            outline: boolean;
            clip: boolean;
        };
        editingFrame: string | null;
        elementsToHighlight: ExcalidrawElement<ExcalidrawElement>[] | null;
        editingTextElement: ExcalidrawElement | null;
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
        currentItemFontFamily: ExcalidrawElement;
        currentItemFontSize: number;
        currentItemTextAlign: ExcalidrawElement;
        currentItemStartArrowhead: ExcalidrawElement | null;
        currentItemEndArrowhead: ExcalidrawElement | null;
        currentHoveredFontFamily: ExcalidrawElement | null;
        currentItemRoundness: ExcalidrawElement;
        currentItemArrowType: "sharp" | "round" | "elbow";
        viewBackgroundColor: string;
        scrolledOutside: boolean;
        isResizing: boolean;
        isRotating: boolean;
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
        lastPointerDownWith: ExcalidrawElement;
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
        gridSize: number;
        gridStep: number;
        gridModeEnabled: boolean;
        viewModeEnabled: boolean;
        selectedGroupIds: {
            [groupId: string]: boolean;
        };
        editingGroupId: ExcalidrawElement | null;
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
        croppingElementId: ExcalidrawElement["id"] | null;
        searchMatches: Readonly<{
            focusedId: ExcalidrawElement["id"] | null;
            matches: readonly import("../types").SearchMatch[];
        }> | null;
        activeLockedId: string | null;
        lockedMultiSelections: {
            [groupId: string]: true;
        };
        bindMode: ExcalidrawElement;
    };
    files: BinaryFiles;
}>;
export declare const isValidExcalidrawData: (data?: {
    type?: any;
    elements?: any;
    appState?: any;
}) => data is ImportedDataState;
export declare const isValidLibrary: (json: any) => json is ImportedLibraryData;
export declare const serializeLibraryAsJSON: (libraryItems: LibraryItems) => string;
export declare const saveLibraryAsJSON: (libraryItems: LibraryItems) => Promise<void>;
