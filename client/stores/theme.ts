export const useThemeStore = defineStore('theme', () => {

  const isdashboardSidebarWide = ref(true);
  const isHovered = ref(false);
  const toggleDashboardSidebar = () => isdashboardSidebarWide.value = !isdashboardSidebarWide.value
  const openDashboardSidebar = () => isdashboardSidebarWide.value = true;
  const closeDashboardSidebar = () => isdashboardSidebarWide.value = false;

  return {
    isdashboardSidebarWide,
    isHovered,
    toggleDashboardSidebar,
    openDashboardSidebar,
    closeDashboardSidebar,
  }
})