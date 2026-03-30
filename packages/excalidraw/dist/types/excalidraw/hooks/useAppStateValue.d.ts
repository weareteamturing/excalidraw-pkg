import type { AppState } from "../types";
/**
 * Subscribes to specific appState changes. The component re-renders
 * only when the specified prop(s) change — not on every appState update.
 */
export declare function useAppStateValue<K extends keyof AppState>(prop: K, callback?: (value: AppState[K], appState: AppState) => void, _internal?: boolean): AppState[K];
export declare function useAppStateValue(props: (keyof AppState)[], callback?: (props: AppState, appState: AppState) => void, _internal?: boolean): AppState;
export declare function useAppStateValue<T>(selector: (appState: AppState) => T, callback?: (value: T, appState: AppState) => void, _internal?: boolean): T;
