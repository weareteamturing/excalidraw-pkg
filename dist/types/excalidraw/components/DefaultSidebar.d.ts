import "../components/dropdownMenu/DropdownMenu.scss";
import type { SidebarTriggerProps } from "./Sidebar/common";
export declare const DefaultSidebar: import("react").FC<any> & {
    Trigger: import("react").FC<Omit<SidebarTriggerProps, "name"> & import("react").HTMLAttributes<HTMLDivElement> & {
        __fallback?: boolean;
    }>;
    TabTriggers: {
        ({ children }: {
            children: React.ReactNode;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
