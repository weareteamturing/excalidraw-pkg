import { type ElementUpdate } from "@excalidraw/element";
import type { ExcalidrawElement, NonDeleted, ExcalidrawFrameLikeElement, ElementsMapOrArray } from "@excalidraw/element/types";
import type { Mutable } from "@excalidraw/common/utility-types";
import type { AppState } from "../../excalidraw/types";
type SceneStateCallback = () => void;
type SceneStateCallbackRemover = () => void;
export type ExcalidrawElementsIncludingDeleted = readonly ExcalidrawElement[];
export declare class Scene {
    private callbacks;
    private nonDeletedElements;
    private nonDeletedElementsMap;
    private elements;
    private nonDeletedFramesLikes;
    private frames;
    private elementsMap;
    private selectedElementsCache;
    /**
     * Random integer regenerated each scene update.
     *
     * Does not relate to elements versions, it's only a renderer
     * cache-invalidation nonce at the moment.
     */
    private sceneNonce;
    getSceneNonce(): number | undefined;
    getNonDeletedElementsMap(): any;
    getElementsIncludingDeleted(): readonly OrderedExcalidrawElement[];
    getElementsMapIncludingDeleted(): any;
    getNonDeletedElements(): readonly Ordered<NonDeletedExcalidrawElement>[];
    getFramesIncludingDeleted(): readonly ExcalidrawFrameLikeElement[];
    constructor(elements?: ElementsMapOrArray | null, options?: {
        skipValidation?: true;
    });
    getSelectedElements(opts: {
        selectedElementIds: AppState["selectedElementIds"];
        /**
         * for specific cases where you need to use elements not from current
         * scene state. This in effect will likely result in cache-miss, and
         * the cache won't be updated in this case.
         */
        elements?: ElementsMapOrArray;
        includeBoundTextElement?: boolean;
        includeElementsInFrames?: boolean;
    }): NonDeleted<ExcalidrawElement>[];
    getNonDeletedFramesLikes(): readonly NonDeleted<ExcalidrawFrameLikeElement>[];
    getElement<T extends ExcalidrawElement>(id: T["id"]): T | null;
    getNonDeletedElement(id: ExcalidrawElement["id"]): NonDeleted<ExcalidrawElement> | null;
    /**
     * A utility method to help with updating all scene elements, with the added
     * performance optimization of not renewing the array if no change is made.
     *
     * Maps all current excalidraw elements, invoking the callback for each
     * element. The callback should either return a new mapped element, or the
     * original element if no changes are made. If no changes are made to any
     * element, this results in a no-op. Otherwise, the newly mapped elements
     * are set as the next scene's elements.
     *
     * @returns whether a change was made
     */
    mapElements(iteratee: (element: ExcalidrawElement) => ExcalidrawElement): boolean;
    replaceAllElements(nextElements: ElementsMapOrArray, options?: {
        skipValidation?: true;
    }): void;
    triggerUpdate(): void;
    onUpdate(cb: SceneStateCallback): SceneStateCallbackRemover;
    destroy(): void;
    insertElementAtIndex(element: ExcalidrawElement, index: number): void;
    insertElementsAtIndex(elements: ExcalidrawElement[], index: number): void;
    insertElement: (element: ExcalidrawElement) => void;
    insertElements: (elements: ExcalidrawElement[]) => void;
    getElementIndex(elementId: string): number;
    getContainerElement: (element: (ExcalidrawElement & {
        containerId: ExcalidrawElement["id"] | null;
    }) | null) => any;
    getElementsFromId: (id: string) => ExcalidrawElement[];
    mutateElement<TElement extends Mutable<ExcalidrawElement>>(element: TElement, updates: ElementUpdate<TElement>, options?: {
        informMutation: boolean;
        isDragging: boolean;
        isBindingEnabled?: boolean;
        isMidpointSnappingEnabled?: boolean;
    }): TElement;
}
export {};
