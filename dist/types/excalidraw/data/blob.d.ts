import { IMAGE_MIME_TYPES, MIME_TYPES } from "@excalidraw/common";
import type { ValueOf } from "@excalidraw/common/utility-types";
import type { ExcalidrawElement, FileId } from "@excalidraw/element/types";
import type { AppState, DataURL, LibraryItem } from "../types";
import type { FileSystemHandle } from "browser-fs-access";
import type { ImportedLibraryData } from "./types";
export declare const getMimeType: (blob: Blob | string) => string;
export declare const getFileHandleType: (handle: FileSystemHandle | null) => string | null;
export declare const isImageFileHandleType: (type: string | null) => type is "png" | "svg";
export declare const isImageFileHandle: (handle: FileSystemHandle | null) => boolean;
export declare const isSupportedImageFileType: (type: string | null | undefined) => boolean;
export declare const isSupportedImageFile: (blob: Blob | null | undefined) => blob is Blob & {
    type: ValueOf<typeof IMAGE_MIME_TYPES>;
};
export declare const loadSceneOrLibraryFromBlob: (blob: Blob | File, 
/** @see restore.localAppState */
localAppState: AppState | null, localElements: readonly ExcalidrawElement[] | null, 
/** FileSystemHandle. Defaults to `blob.handle` if defined, otherwise null. */
fileHandle?: FileSystemHandle | null) => Promise<{
    type: "application/vnd.excalidraw+json";
    data: {
        elements: CombineBrandsIfNeeded<T, OrderedExcalidrawElement>;
        appState: {
            contextMenu: {
                items: import("../components/ContextMenu").ContextMenuItems;
                top: number;
                left: number;
            } | null;
            stats: {
                open: boolean;
                panels: number;
            };
            exportWithDarkMode: boolean;
            startBoundElement: ValueOf<ValueOf> | null;
            cursorButton: "up" | "down";
            scrollX: number;
            scrollY: number;
            showWelcomeScreen: boolean;
            isLoading: boolean;
            errorMessage: React.ReactNode;
            activeEmbeddable: {
                element: ValueOf;
                state: "hover" | "active";
            } | null;
            newElement: ValueOf<ValueOf> | null;
            resizingElement: ValueOf | null;
            multiElement: ValueOf<ValueOf> | null;
            selectionElement: ValueOf | null;
            isBindingEnabled: boolean;
            bindingPreference: "enabled" | "disabled";
            isMidpointSnappingEnabled: boolean;
            suggestedBinding: {
                element: ValueOf<ValueOf>;
                midPoint?: import("@excalidraw/math").GlobalPoint;
            } | null;
            frameToHighlight: ValueOf<ValueOf> | null;
            frameRendering: {
                enabled: boolean;
                name: boolean;
                outline: boolean;
                clip: boolean;
            };
            editingFrame: string | null;
            elementsToHighlight: ValueOf<ExcalidrawElement>[] | null;
            editingTextElement: ValueOf | null;
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
            exportScale: number;
            currentItemStrokeColor: string;
            currentItemBackgroundColor: string;
            currentItemFillStyle: ExcalidrawElement["fillStyle"];
            currentItemStrokeWidth: number;
            currentItemStrokeStyle: ExcalidrawElement["strokeStyle"];
            currentItemRoughness: number;
            currentItemOpacity: number;
            currentItemFontFamily: ValueOf;
            currentItemFontSize: number;
            currentItemTextAlign: ValueOf;
            currentItemStartArrowhead: ValueOf | null;
            currentItemEndArrowhead: ValueOf | null;
            currentHoveredFontFamily: ValueOf | null;
            currentItemRoundness: ValueOf;
            currentItemArrowType: "sharp" | "round" | "elbow";
            viewBackgroundColor: string;
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
            lastPointerDownWith: ValueOf;
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
            theme: ValueOf;
            gridSize: number;
            gridStep: number;
            gridModeEnabled: boolean;
            viewModeEnabled: boolean;
            selectedGroupIds: {
                [groupId: string]: boolean;
            };
            editingGroupId: ValueOf | null;
            fileHandle: FileSystemHandle | null;
            collaborators: Map<import("../types").SocketId, import("../types").Collaborator>;
            showHyperlinkPopup: false | "info" | "editor";
            selectedLinearElement: ValueOf | null;
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
            bindMode: ValueOf;
        };
        files: import("../types").BinaryFiles;
    };
} | {
    type: "application/vnd.excalidrawlib+json";
    data: ImportedLibraryData;
}>;
export declare const loadFromBlob: (blob: Blob, 
/** @see restore.localAppState */
localAppState: AppState | null, localElements: readonly ExcalidrawElement[] | null, 
/** FileSystemHandle. Defaults to `blob.handle` if defined, otherwise null. */
fileHandle?: FileSystemHandle | null) => Promise<{
    elements: CombineBrandsIfNeeded<T, OrderedExcalidrawElement>;
    appState: {
        contextMenu: {
            items: import("../components/ContextMenu").ContextMenuItems;
            top: number;
            left: number;
        } | null;
        stats: {
            open: boolean;
            panels: number;
        };
        exportWithDarkMode: boolean;
        startBoundElement: ValueOf<ValueOf> | null;
        cursorButton: "up" | "down";
        scrollX: number;
        scrollY: number;
        showWelcomeScreen: boolean;
        isLoading: boolean;
        errorMessage: React.ReactNode;
        activeEmbeddable: {
            element: ValueOf;
            state: "hover" | "active";
        } | null;
        newElement: ValueOf<ValueOf> | null;
        resizingElement: ValueOf | null;
        multiElement: ValueOf<ValueOf> | null;
        selectionElement: ValueOf | null;
        isBindingEnabled: boolean;
        bindingPreference: "enabled" | "disabled";
        isMidpointSnappingEnabled: boolean;
        suggestedBinding: {
            element: ValueOf<ValueOf>;
            midPoint?: import("@excalidraw/math").GlobalPoint;
        } | null;
        frameToHighlight: ValueOf<ValueOf> | null;
        frameRendering: {
            enabled: boolean;
            name: boolean;
            outline: boolean;
            clip: boolean;
        };
        editingFrame: string | null;
        elementsToHighlight: ValueOf<ExcalidrawElement>[] | null;
        editingTextElement: ValueOf | null;
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
        exportScale: number;
        currentItemStrokeColor: string;
        currentItemBackgroundColor: string;
        currentItemFillStyle: ExcalidrawElement["fillStyle"];
        currentItemStrokeWidth: number;
        currentItemStrokeStyle: ExcalidrawElement["strokeStyle"];
        currentItemRoughness: number;
        currentItemOpacity: number;
        currentItemFontFamily: ValueOf;
        currentItemFontSize: number;
        currentItemTextAlign: ValueOf;
        currentItemStartArrowhead: ValueOf | null;
        currentItemEndArrowhead: ValueOf | null;
        currentHoveredFontFamily: ValueOf | null;
        currentItemRoundness: ValueOf;
        currentItemArrowType: "sharp" | "round" | "elbow";
        viewBackgroundColor: string;
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
        lastPointerDownWith: ValueOf;
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
        theme: ValueOf;
        gridSize: number;
        gridStep: number;
        gridModeEnabled: boolean;
        viewModeEnabled: boolean;
        selectedGroupIds: {
            [groupId: string]: boolean;
        };
        editingGroupId: ValueOf | null;
        fileHandle: FileSystemHandle | null;
        collaborators: Map<import("../types").SocketId, import("../types").Collaborator>;
        showHyperlinkPopup: false | "info" | "editor";
        selectedLinearElement: ValueOf | null;
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
        bindMode: ValueOf;
    };
    files: import("../types").BinaryFiles;
}>;
export declare const parseLibraryJSON: (json: string, defaultStatus?: LibraryItem["status"]) => LibraryItem[];
export declare const loadLibraryFromBlob: (blob: Blob, defaultStatus?: LibraryItem["status"]) => Promise<LibraryItem[]>;
export declare const canvasToBlob: (canvas: HTMLCanvasElement | Promise<HTMLCanvasElement>) => Promise<Blob>;
/** generates SHA-1 digest from supplied file (if not supported, falls back
    to a 40-char base64 random id) */
export declare const generateIdFromFile: (file: File) => Promise<FileId>;
/** async. For sync variant, use getDataURL_sync */
export declare const getDataURL: (file: Blob | File) => Promise<DataURL>;
export declare const getDataURL_sync: (data: string | Uint8Array | ArrayBuffer, mimeType: ValueOf<typeof MIME_TYPES>) => DataURL;
export declare const dataURLToFile: (dataURL: DataURL, filename?: string) => File;
export declare const dataURLToString: (dataURL: DataURL) => string;
export declare const resizeImageFile: (file: File, opts: {
    /** undefined indicates auto */
    outputType?: (typeof MIME_TYPES)["jpg"];
    maxWidthOrHeight: number;
}) => Promise<File>;
export declare const SVGStringToFile: (SVGString: string, filename?: string) => File & {
    type: typeof MIME_TYPES.svg;
};
export declare const ImageURLToFile: (imageUrl: string, filename?: string) => Promise<File | undefined>;
export declare const getFileHandle: (event: DragEvent | React.DragEvent | DataTransferItem) => Promise<FileSystemHandle | null>;
export declare const createFile: (blob: File | Blob | ArrayBuffer, mimeType: string, name: string | undefined) => File;
/** attempts to detect correct mimeType if none is set, or if an image
 * has an incorrect extension.
 * Note: doesn't handle missing .excalidraw/.excalidrawlib extension  */
export declare const normalizeFile: (file: File) => Promise<File>;
export declare const blobToArrayBuffer: (blob: Blob) => Promise<ArrayBuffer>;
