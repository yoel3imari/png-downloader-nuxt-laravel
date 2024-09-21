import { tokenService } from "~/services/tokenService"

// only for unauthenticated users 
const authRoutes = ["/auth/login", "/auth/sign-up", "/auth/forgot-password"]

export default defineNuxtRouteMiddleware((to) => {
  if( authRoutes.includes(to.path) && tokenService.hasToken() ) {
    return navigateTo('/dashboard')
  }
})