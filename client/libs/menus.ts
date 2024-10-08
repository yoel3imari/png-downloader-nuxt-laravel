import {
  DollarSign,
  Layout,
  LogOut,
  User,
  UserCheck,
  UserCog,
  UserX,
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
  children?: MenuLink[];
};

export const dashboardSidebarMenu: MenuLink[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: Layout,
    customClass: "text-sky-900",
    hasChildren: false,
  },
  {
    href: "#",
    label: "Users",
    icon: User,
    customClass: "text-rose-900",
    hasChildren: true,
    children: [
      {
        href: "#",
        label: "Active",
        icon: UserCheck,
        customClass: "text-sky-900",
        hasChildren: false,
      },
      {
        href: "#",
        label: "Unverified",
        icon: UserCog,
        customClass: "text-amber-900",
        hasChildren: false,
      },
      {
        href: "#",
        label: "Banned",
        icon: UserX,
        customClass: "text-rose-900",
        hasChildren: true,
        children: [
          {
            href: "#",
            label: "Active",
            icon: UserCheck,
            customClass: "text-sky-900",
            hasChildren: false,
          },
          {
            href: "#",
            label: "Unverified",
            icon: UserCog,
            customClass: "text-amber-900",
            hasChildren: false,
          },
          {
            href: "#",
            label: "Active",
            icon: UserCheck,
            customClass: "text-sky-900",
            hasChildren: false,
          },
          {
            href: "#",
            label: "Unverified",
            icon: UserCog,
            customClass: "text-amber-900",
            hasChildren: false,
          },
          {
            href: "#",
            label: "Active",
            icon: UserCheck,
            customClass: "text-sky-900",
            hasChildren: false,
          },
          {
            href: "#",
            label: "Unverified",
            icon: UserCog,
            customClass: "text-amber-900",
            hasChildren: false,
          },
        ],
      },
    ],
  },
  {
    href: "#",
    label: "Billing",
    icon: DollarSign,
    customClass: "text-purple-900",
    hasChildren: false,
  },
  {
    href: "#",
    label: "Logout",
    icon: LogOut,
    customClass: "text-green-900",
    hasChildren: false,
  },
];
