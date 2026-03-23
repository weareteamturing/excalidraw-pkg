import type { AppState, NormalizedZoomValue } from "./types";
export declare const getDefaultAppState: () => Omit<AppState, "offsetTop" | "offsetLeft" | "width" | "height">;
export declare const clearAppStateForLocalStorage: (appState: Partial<AppState>) => {
    stats?: {
        open: boolean;
        panels: number;
    } | undefined;
    exportWithDarkMode?: boolean | undefined;
    cursorButton?: "up" | "down" | undefined;
    scrollX?: number | undefined;
    scrollY?: number | undefined;
    showWelcomeScreen?: boolean | undefined;
    isBindingEnabled?: boolean | undefined;
    bindingPreference?: "enabled" | "disabled" | undefined;
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
    currentItemArrowType?: "sharp" | "round" | "elbow" | undefined;
    viewBackgroundColor?: string | undefined;
    scrolledOutside?: boolean | undefined;
    name?: string | null | undefined;
    zoom?: Readonly<{
        value: NormalizedZoomValue;
    }> | undefined;
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
    theme?: any;
    gridSize?: number | undefined;
    gridStep?: number | undefined;
    gridModeEnabled?: boolean | undefined;
    selectedGroupIds?: {
        [groupId: string]: boolean;
    } | undefined;
    editingGroupId?: any;
    selectedLinearElement?: any;
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
