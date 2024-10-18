import { tokenService } from "~/services/tokenService";

// only for unauthenticated users (guests)
const authRoutes = [
  "auth-login",
  "auth-sign-up",
  "auth-reset-password-token",
  "auth-forgot-password",
];

export default defineNuxtRouteMiddleware(async (to) => {

  if (authRoutes.includes(String(to.name)) && tokenService.hasToken()) {
    // window.location.href = '/dashboard';
    await navigateTo('/dashboard');
    return;
  }

  return;
});
