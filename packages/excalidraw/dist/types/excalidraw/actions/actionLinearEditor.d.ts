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
            selectedLinearElement: {
                isEditing: boolean;
                elementId: import("@excalidraw/element/dist/types/element/src/types").ExcalidrawElement["id"] & {
                    _brand: "excalidrawLinearElementId";
                };
                selectedPointsIndices: readonly number[] | null;
                initialState: Readonly<{
                    prevSelectedPointsIndices: readonly number[] | null;
                    lastClickedPoint: number;
                    origin: Readonly<import("@excalidraw/math").GlobalPoint> | null;
                    segmentMidpoint: {
                        value: import("@excalidraw/math").GlobalPoint | null;
                        index: number | null;
                        added: boolean;
                    };
                    arrowStartIsInside: boolean;
                    altFocusPoint: Readonly<import("@excalidraw/math").GlobalPoint> | null;
                }>;
                isDragging: boolean;
                lastUncommittedPoint: import("@excalidraw/math").LocalPoint | null;
                lastCommittedPoint: import("@excalidraw/math").LocalPoint | null;
                pointerOffset: Readonly<{
                    x: number;
                    y: number;
                }>;
                hoverPointIndex: number;
                segmentMidPointHoveredCoords: import("@excalidraw/math").GlobalPoint | null;
                hoveredFocusPointBinding: "start" | "end" | null;
                draggedFocusPointBinding: "start" | "end" | null;
                elbowed: boolean;
                customLineAngle: number | null;
                pointerDownState: never;
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
                element: ExcalidrawLinearElement;
                state: "hover" | "active";
            } | null;
            newElement: ExcalidrawLinearElement<ExcalidrawLinearElement> | null;
            resizingElement: ExcalidrawLinearElement | null;
            multiElement: ExcalidrawLinearElement<ExcalidrawLinearElement> | null;
            selectionElement: ExcalidrawLinearElement | null;
            isBindingEnabled: boolean;
            bindingPreference: "enabled" | "disabled";
            isMidpointSnappingEnabled: boolean;
            startBoundElement: ExcalidrawLinearElement<ExcalidrawLinearElement> | null;
            suggestedBinding: {
                element: ExcalidrawLinearElement<ExcalidrawLinearElement>;
                midPoint?: import("@excalidraw/math").GlobalPoint;
            } | null;
            frameToHighlight: ExcalidrawLinearElement<ExcalidrawLinearElement> | null;
            frameRendering: {
                enabled: boolean;
                name: boolean;
                outline: boolean;
                clip: boolean;
            };
            editingFrame: string | null;
            elementsToHighlight: ExcalidrawLinearElement<ExcalidrawLinearElement>[] | null;
            editingTextElement: ExcalidrawLinearElement | null;
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
            currentItemFillStyle: ExcalidrawLinearElement["fillStyle"];
            currentItemStrokeWidth: number;
            currentItemStrokeStyle: ExcalidrawLinearElement["strokeStyle"];
            currentItemRoughness: number;
            currentItemOpacity: number;
            currentItemFontFamily: ExcalidrawLinearElement;
            currentItemFontSize: number;
            currentItemTextAlign: ExcalidrawLinearElement;
            currentItemStartArrowhead: ExcalidrawLinearElement | null;
            currentItemEndArrowhead: ExcalidrawLinearElement | null;
            currentHoveredFontFamily: ExcalidrawLinearElement | null;
            currentItemRoundness: ExcalidrawLinearElement;
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
                sourceElementId: ExcalidrawLinearElement["id"];
            } | {
                name: "charts";
                data: import("../charts").Spreadsheet;
                rawText: string;
            };
            defaultSidebarDockedPreference: boolean;
            lastPointerDownWith: ExcalidrawLinearElement;
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
            theme: ExcalidrawLinearElement;
            gridSize: number;
            gridStep: number;
            gridModeEnabled: boolean;
            viewModeEnabled: boolean;
            selectedGroupIds: {
                [groupId: string]: boolean;
            };
            editingGroupId: ExcalidrawLinearElement | null;
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
            croppingElementId: ExcalidrawLinearElement["id"] | null;
            searchMatches: Readonly<{
                focusedId: ExcalidrawLinearElement["id"] | null;
                matches: readonly import("../types").SearchMatch[];
            }> | null;
            activeLockedId: string | null;
            lockedMultiSelections: {
                [groupId: string]: true;
            };
            bindMode: ExcalidrawLinearElement;
        };
        captureUpdate: "IMMEDIATELY";
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
    predicate: (elements: readonly ExcalidrawElement[], appState: import("../types").AppState, _: import("../types").ExcalidrawProps, app: import("../types").AppClassProperties) => boolean;
    perform(elements: readonly OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>, _: unknown, app: import("../types").AppClassProperties): false | {
        elements: any[];
        appState: Readonly<import("../types").AppState>;
        captureUpdate: "IMMEDIATELY";
    };
    PanelComponent: ({ appState, updateData, app }: import("./types").PanelComponentProps) => import("react/jsx-runtime").JSX.Element | null;
} & {
    keyTest?: undefined;
};
