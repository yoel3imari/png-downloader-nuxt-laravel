import {
  DollarSign,
  Layout,
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
    href: "/users",
    label: "Users",
    icon: User,
    customClass: "text-rose-900",
    hasChildren: true,
    children: [
      {
        href: "/users/active",
        label: "Active",
        icon: UserCheck,
        customClass: "text-sky-900",
        hasChildren: false,
      },
      {
        href: "/users/unverified",
        label: "Unverified",
        icon: UserCog,
        customClass: "text-amber-900",
        hasChildren: false,
      },
      {
        href: "/users/banned",
        label: "Banned",
        icon: UserX,
        customClass: "text-rose-900",
        hasChildren: true,
        children: [
          {
            href: "/users/active",
            label: "Active",
            icon: UserCheck,
            customClass: "text-sky-900",
            hasChildren: false,
          },
          {
            href: "/users/unverified",
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
    href: "/billing",
    label: "Billing",
    icon: DollarSign,
    customClass: "text-purple-900",
    hasChildren: false,
  },
];
