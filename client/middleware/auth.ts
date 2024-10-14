import { useToast } from "~/components/ui/toast";
import { tokenService } from "~/services/tokenService";
import { USER_KEY } from "../stores/auth";
import { useStorage } from "@vueuse/core";

// const protectedRoutes = ["dashboard"];

export default defineNuxtRouteMiddleware(async () => {
  try {
    if (!tokenService.hasToken()) {
      return navigateTo("/auth/login");
    }
    const { $api } = useNuxtApp();
    await $api.get("verify-token");
    setPageLayout("dashboard");
    return;
  } catch (error: any) {
    // purge token and user
    tokenService.removeToken();
    const user = useStorage(USER_KEY, "");
    user.value = null;

    useToast().toast({
      title: error?.message || "Unauthenticated",
      description: "Login to get access to this place",
      variant: "destructive",
    });
    return navigateTo("/auth/login");
  }
});
