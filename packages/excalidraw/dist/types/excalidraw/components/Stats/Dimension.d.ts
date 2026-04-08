import type { ExcalidrawElement } from "../../../element/src/types";
import type { Scene } from "../../../element/src/index";
import type { AppState } from "../../types";
interface DimensionDragInputProps {
    property: "width" | "height";
    element: ExcalidrawElement;
    scene: Scene;
    appState: AppState;
}
declare const DimensionDragInput: ({ property, element, scene, appState, }: DimensionDragInputProps) => import("react/jsx-runtime").JSX.Element;
export default DimensionDragInput;
