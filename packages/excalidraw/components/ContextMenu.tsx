import clsx from "clsx";
import React from "react";
import { createPortal } from "react-dom";

import { getShortcutFromShortcutName } from "../actions/shortcuts";
import { t } from "../i18n";

import { useExcalidrawAppState, useExcalidrawElements } from "./App";

import { Popover } from "./Popover";

import "./ContextMenu.scss";

import type { ActionManager } from "../actions/manager";
import type { ShortcutName } from "../actions/shortcuts";
import type { Action } from "../actions/types";

import type { TranslationKeys } from "../i18n";

export type ContextMenuItem = typeof CONTEXT_MENU_SEPARATOR | Action;

export type ContextMenuItems = (ContextMenuItem | false | null | undefined)[];

type ContextMenuProps = {
  actionManager: ActionManager;
  items: ContextMenuItems;
  top: number;
  left: number;
  onClose: (callback?: () => void) => void;
};

export const CONTEXT_MENU_SEPARATOR = "separator";

export const ContextMenu = React.memo(
  ({ actionManager, items, top, left, onClose }: ContextMenuProps) => {
    const appState = useExcalidrawAppState();
    const elements = useExcalidrawElements();

    const filteredItems = items.reduce((acc: ContextMenuItem[], item) => {
      if (
        item &&
        (item === CONTEXT_MENU_SEPARATOR ||
          !item.predicate ||
          item.predicate(
            elements,
            appState,
            actionManager.app.props,
            actionManager.app,
          ))
      ) {
        acc.push(item);
      }
      return acc;
    }, []);

    return createPortal(
      <div
        className={clsx("excalidraw", {
          "theme--dark": appState.theme === "dark",
        })}
        style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 2147483647 }}
      >
        <Popover
          onCloseRequest={() => {
            onClose();
          }}
          top={top}
          left={left}
          fitInViewport={true}
          offsetLeft={0}
          offsetTop={0}
          viewportWidth={window.innerWidth}
          viewportHeight={window.innerHeight}
          className="context-menu-popover"
        >
          <ul
            className="context-menu"
            onContextMenu={(event) => event.preventDefault()}
          >
            {filteredItems.map((item, idx) => {
              if (item === CONTEXT_MENU_SEPARATOR) {
                if (
                  !filteredItems[idx - 1] ||
                  filteredItems[idx - 1] === CONTEXT_MENU_SEPARATOR
                ) {
                  return null;
                }
                return <hr key={idx} className="context-menu-item-separator" />;
              }

              const actionName = item.name;
              let label = "";
              if (item.label) {
                if (typeof item.label === "function") {
                  label = t(
                    item.label(
                      elements,
                      appState,
                      actionManager.app,
                    ) as unknown as TranslationKeys,
                  );
                } else {
                  label = t(item.label as unknown as TranslationKeys);
                }
              }

              return (
                <li
                  key={idx}
                  data-testid={actionName}
                  onClick={() => {
                    onClose(() => {
                      actionManager.executeAction(item, "contextMenu");
                    });
                  }}
                >
                  <button
                    type="button"
                    className={clsx("context-menu-item", {
                      dangerous: actionName === "deleteSelectedElements",
                      checkmark: item.checked?.(appState),
                    })}
                  >
                    <div className="context-menu-item__label">{label}</div>
                    <kbd className="context-menu-item__shortcut">
                      {actionName
                        ? getShortcutFromShortcutName(actionName as ShortcutName)
                        : ""}
                    </kbd>
                  </button>
                </li>
              );
            })}
          </ul>
        </Popover>
      </div>,
      document.body,
    );
  },
);
