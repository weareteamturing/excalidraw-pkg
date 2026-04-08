import React from "react";
import { type FontFamilyValues } from "../../../element/src/types";
import type { ValueOf } from "../../../common/src/utility-types";
import { DropDownMenuItemBadgeType } from "../dropdownMenu/DropdownMenuItem";
import type { JSX } from "react";
export interface FontDescriptor {
    value: number;
    icon: JSX.Element;
    text: string;
    deprecated?: true;
    badge?: {
        type: ValueOf<typeof DropDownMenuItemBadgeType>;
        placeholder: string;
    };
}
interface FontPickerListProps {
    selectedFontFamily: FontFamilyValues | null;
    hoveredFontFamily: FontFamilyValues | null;
    onSelect: (value: number) => void;
    onHover: (value: number) => void;
    onLeave: () => void;
    onOpen: () => void;
    onClose: () => void;
}
export declare const FontPickerList: React.MemoExoticComponent<({ selectedFontFamily, hoveredFontFamily, onSelect, onHover, onLeave, onOpen, onClose, }: FontPickerListProps) => import("react/jsx-runtime").JSX.Element>;
export {};
