import { tokenService } from "~/services/tokenService";

// only for unauthenticated users (guests)
const authRoutes = [
  "auth-login",
  "auth-sign-up",
  "auth-reset-password-token",
  "auth-forgot-password",
];

export default defineNuxtRouteMiddleware(async (to) => {
  console.log(to.name, "guest middleware");

  if (authRoutes.includes(String(to.name)) && tokenService.hasToken()) {
    setPageLayout('auth')
    return navigateTo("/dashboard");
  }

  return;
});
