import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { MenuLink } from "./menus";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * check if a menu item is active or has active child
 */
export function isItemActive(item: MenuLink, currentRoute: string): boolean {
  // console.log(`itemlink = ${item.href} - path = ${currentRoute}`);
  
  if (item.href === currentRoute) return true;
  else if (item.hasChildren) {
    return item.children?.some((i) => {
      return isItemActive(i, currentRoute)
    }) || false;
  }
  return false;
}
