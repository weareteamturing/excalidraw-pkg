import { getFontString } from "@excalidraw/common";
import type { ChartType } from "@excalidraw/element/types";
import type { NonDeletedExcalidrawElement } from "@excalidraw/element/types";
import { type CartesianChartLayout, type CartesianChartType } from "./charts.constants";
import type { ChartElements, Spreadsheet, SpreadsheetSeries } from "./charts.types";
export declare const isSpreadsheetValidForChartType: (spreadsheet: Spreadsheet | null, chartType: ChartType) => boolean;
export declare const getCartesianChartLayout: (chartType: CartesianChartType, seriesCount: number) => CartesianChartLayout;
export declare const getChartDimensions: (spreadsheet: Spreadsheet, layout: CartesianChartLayout) => {
    chartWidth: number;
    chartHeight: number;
};
export declare const getRadarDimensions: () => {
    chartWidth: number;
    chartHeight: number;
};
export declare const getSeriesColors: (seriesCount: number, colorOffset: number) => readonly string[];
export declare const getColorOffset: (colorSeed?: number) => number;
export declare const getBackgroundColor: (colorOffset: number) => string;
export declare const getRadarValueScale: (series: SpreadsheetSeries[], _labelsLength: number) => {
    renderSteps: boolean;
    normalize: (value: number, _axisIndex: number) => number;
};
export declare const getRadarDisplayText: (text: string, fontString: ReturnType<typeof getFontString>, maxWidth: number) => any;
export declare const createRadarAxisLabels: (labels: readonly string[], angles: readonly number[], centerX: number, centerY: number, radius: number, backgroundColor: string) => {
    axisLabels: ChartElements;
    axisLabelTopY: number;
    axisLabelBottomY: number;
};
export declare const createSeriesLegend: (series: SpreadsheetSeries[], seriesColors: readonly string[], centerX: number, minLegendTopY: number, fallbackLegendY: number, backgroundColor: string) => ChartElements;
export declare const getRotatedTextElementBottom: (element: NonDeletedExcalidrawElement) => any;
export declare const chartXLabels: (spreadsheet: Spreadsheet, x: number, y: number, backgroundColor: string, layout: CartesianChartLayout) => ChartElements;
export declare const chartBaseElements: (spreadsheet: Spreadsheet, x: number, y: number, backgroundColor: string, layout: CartesianChartLayout, maxValue?: number, debug?: boolean) => ChartElements;
