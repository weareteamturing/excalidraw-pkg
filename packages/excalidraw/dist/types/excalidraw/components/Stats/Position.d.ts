import type { ElementsMap, ExcalidrawElement } from "../../../element/src/types";
import type { Scene } from "../../../element/src/index";
import type { AppState } from "../../types";
interface PositionProps {
    property: "x" | "y";
    element: ExcalidrawElement;
    elementsMap: ElementsMap;
    scene: Scene;
    appState: AppState;
}
declare const Position: ({ property, element, elementsMap, scene, appState, }: PositionProps) => import("react/jsx-runtime").JSX.Element;
export default Position;
