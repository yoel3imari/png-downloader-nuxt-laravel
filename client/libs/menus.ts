import {
  Image,
  Layout,
  LogOut,
  UploadCloud,
  type IconNode,
} from "lucide-vue-next";
import type { Component } from "vue";

export type MenuLink = {
  href: string;
  label: string;
  icon?: string | IconNode | Component;
  target?: string;
  customClass?: string;
  hasChildren: boolean;
  isRoot?: boolean; 
  children?: MenuLink[];
};

export const dashboardSidebarMenu: MenuLink[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: Layout,
    isRoot: true,
    hasChildren: false,
  },
  {
    href: "/dashboard/images",
    label: "Images",
    icon: Image,
    hasChildren: true,
    isRoot: true,
    children: [
      {
        href: "/dashboard/images/upload",
        label: "Upload",
        icon: UploadCloud,
        hasChildren: false,
        isRoot: false,
      },
    ]
  },
  {
    href: "/auth/login",
    label: "Logout",
    icon: LogOut,
    customClass: "text-gray-500",
    hasChildren: false,
    isRoot: true,
  },
];
