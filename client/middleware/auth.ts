import { tokenService } from "~/services/tokenService";

// const protectedRoutes = ["dashboard"];

export default defineNuxtRouteMiddleware(async () => {
  // if (protectedRoutes.includes(String(to.name))) {
  // verify token
  const token = await tokenService.getToken();
  if (!token) {
    return navigateTo("/auth/login");
  }
  
  const { $api } = useNuxtApp();
  const res = await $api.get("verifytoken");
  
  if (res.data) return;
  
  return navigateTo("/auth/login");

});
