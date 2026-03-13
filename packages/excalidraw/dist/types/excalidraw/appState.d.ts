import type { AppState, NormalizedZoomValue } from "./types";
export declare const getDefaultAppState: () => Omit<AppState, "offsetTop" | "offsetLeft" | "width" | "height">;
export declare const clearAppStateForLocalStorage: (appState: Partial<AppState>) => {
    zoom?: Readonly<{
        value: NormalizedZoomValue;
    }> | undefined;
    name?: string | null | undefined;
    theme?: any;
    cursorButton?: "up" | "down" | undefined;
    scrollX?: number | undefined;
    scrollY?: number | undefined;
    showWelcomeScreen?: boolean | undefined;
    isBindingEnabled?: boolean | undefined;
    bindingPreference?: "disabled" | "enabled" | undefined;
    isMidpointSnappingEnabled?: boolean | undefined;
    activeTool?: ({
        lastActiveTool: import("./types").ActiveTool | null;
        locked: boolean;
        fromSelection: boolean;
    } & import("./types").ActiveTool) | undefined;
    preferredSelectionTool?: {
        type: "selection" | "lasso";
        initialized: boolean;
    } | undefined;
    penMode?: boolean | undefined;
    penDetected?: boolean | undefined;
    exportBackground?: boolean | undefined;
    exportEmbedScene?: boolean | undefined;
    exportWithDarkMode?: boolean | undefined;
    exportScale?: number | undefined;
    currentItemStrokeColor?: string | undefined;
    currentItemBackgroundColor?: string | undefined;
    currentItemFillStyle?: any;
    currentItemStrokeWidth?: number | undefined;
    currentItemStrokeStyle?: any;
    currentItemRoughness?: number | undefined;
    currentItemOpacity?: number | undefined;
    currentItemFontFamily?: any;
    currentItemFontSize?: number | undefined;
    currentItemTextAlign?: any;
    currentItemStartArrowhead?: any;
    currentItemEndArrowhead?: any;
    currentItemRoundness?: any;
    currentItemArrowType?: "round" | "sharp" | "elbow" | undefined;
    viewBackgroundColor?: string | undefined;
    scrolledOutside?: boolean | undefined;
    openMenu?: "canvas" | null | undefined;
    openSidebar?: {
        name: import("./types").SidebarName;
        tab?: import("./types").SidebarTabName;
    } | null | undefined;
    defaultSidebarDockedPreference?: boolean | undefined;
    lastPointerDownWith?: any;
    selectedElementIds?: Readonly<{
        [id: string]: true;
    }> | undefined;
    previousSelectedElementIds?: {
        [id: string]: true;
    } | undefined;
    shouldCacheIgnoreZoom?: boolean | undefined;
    zenModeEnabled?: boolean | undefined;
    gridSize?: number | undefined;
    gridStep?: number | undefined;
    gridModeEnabled?: boolean | undefined;
    selectedGroupIds?: {
        [groupId: string]: boolean;
    } | undefined;
    editingGroupId?: any;
    stats?: {
        open: boolean;
        panels: number;
    } | undefined;
    selectedLinearElement?: import("@excalidraw/element").LinearElementEditor | null | undefined;
    objectsSnapModeEnabled?: boolean | undefined;
    lockedMultiSelections?: {
        [groupId: string]: true;
    } | undefined;
    bindMode?: any;
};
export declare const cleanAppStateForExport: (appState: Partial<AppState>) => {
    viewBackgroundColor?: string | undefined;
    gridSize?: number | undefined;
    gridStep?: number | undefined;
    gridModeEnabled?: boolean | undefined;
    lockedMultiSelections?: {
        [groupId: string]: true;
    } | undefined;
};
export declare const clearAppStateForDatabase: (appState: Partial<AppState>) => {
    viewBackgroundColor?: string | undefined;
    gridSize?: number | undefined;
    gridStep?: number | undefined;
    gridModeEnabled?: boolean | undefined;
    lockedMultiSelections?: {
        [groupId: string]: true;
    } | undefined;
};
export declare const isEraserActive: ({ activeTool, }: {
    activeTool: AppState["activeTool"];
}) => boolean;
export declare const isHandToolActive: ({ activeTool, }: {
    activeTool: AppState["activeTool"];
}) => boolean;
