import { tokenService } from "~/services/tokenService"

// only for unauthenticated users (guests)
const authRoutes = ["auth-login", "auth-sign-up", "auth-reset-password-token", "auth-forgot-password"]

export default defineNuxtRouteMiddleware((to) => {
  console.log(to, "guest");
  
  if( authRoutes.includes(String(to.name)) && tokenService.hasToken() ) {
    return navigateTo('/dashboard')
  }

  return;
})