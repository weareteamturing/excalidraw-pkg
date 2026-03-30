import { useEffect, useRef, useState } from "react";

import { useExcalidrawAPI } from "../components/App";

import { getDefaultAppState } from "../appState";

import type { AppState } from "../types";

/**
 * Subscribes to specific appState changes. The component re-renders
 * only when the specified prop(s) change — not on every appState update.
 */
export function useAppStateValue<K extends keyof AppState>(
  prop: K,
  callback?: (value: AppState[K], appState: AppState) => void,
  _internal?: boolean,
): AppState[K];
export function useAppStateValue(
  props: (keyof AppState)[],
  callback?: (props: AppState, appState: AppState) => void,
  _internal?: boolean,
): AppState;
export function useAppStateValue<T>(
  selector: (appState: AppState) => T,
  callback?: (value: T, appState: AppState) => void,
  _internal?: boolean,
): T;
export function useAppStateValue(
  selector:
    | keyof AppState
    | (keyof AppState)[]
    | ((appState: AppState) => unknown),
  callback?: (value: any, appState: AppState) => void,
  _internal: boolean = true,
): unknown {
  const api = useExcalidrawAPI();

  const getLatestValue = () => {
    let appState = api?.getAppState();
    if (!appState) {
      if (!_internal) {
        return undefined;
      }
      console.warn(
        "useAppStateValue: excalidrawAPI not defined yet for internal component in which case it should always be defined. Are you sure you're rendering inside of <Excalidraw/> component tree?",
      );
      appState = Object.assign(
        { width: 0, height: 0, offsetLeft: 0, offsetTop: 0 },
        getDefaultAppState(),
      );
    }
    if (typeof selector === "function") {
      return selector(appState);
    }
    if (Array.isArray(selector)) {
      return appState;
    }
    return appState[selector];
  };

  const [value, setValue] = useState<unknown>(getLatestValue);

  const stateRef = useRef({
    selector,
    callback,
    isInitialized: !!api,
    latestValue: value,
  });
  stateRef.current.selector = selector;
  stateRef.current.callback = callback;
  if (!stateRef.current.isInitialized && api) {
    stateRef.current.isInitialized = true;
    stateRef.current.latestValue = getLatestValue();
  }

  useEffect(() => {
    if (!api) {
      return;
    }

    return api.onStateChange(
      stateRef.current.selector,
      (newValue: any, state: AppState) => {
        stateRef.current.latestValue = newValue;
        stateRef.current.callback?.(newValue, state);
        setValue(newValue);
      },
    );
  }, [api]);

  return stateRef.current.latestValue;
}
