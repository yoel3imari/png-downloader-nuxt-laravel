import { tokenService } from "~/services/tokenService";
import type { Credentials } from "~/libs/definitions";
import { useStorage } from "@vueuse/core";

export const USER_KEY = "user_info";

export const useAuthStore = defineStore("auth", () => {
  const user = useStorage(USER_KEY, "");
  const { $api } = useNuxtApp();

  const register = async ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      await $api.crsf();
      const res = await $api.post("/register", { name, email, password });
      if (res?.data.access_token) {
        await tokenService.setToken(res.data.access_token);
      }

      if (res.data.user) {
        setUser(res.data.user);
      }

      return true;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const login = async ({ email, password }: Credentials) => {
    try {
      // get /sanctum/csrf-cookie => xrsf-token
      await $api.crsf();
      const res = await $api.post("/login", { email, password });

      if (res?.data.access_token) {
        await tokenService.setToken(res.data.access_token);
      }

      if (res.data.user) {
        setUser(res.data.user);
      }

      return true;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const sendResetLink = async ({ email }: { email: string }) => {
    try {
      const res = await $api.post("/forgot-password", { email });
      //check if link sent or error
      console.log(res);

      return res;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const resetPassword = async ({
    token,
    email,
    password,
    password_confirmation,
  }: {
    token: string;
    email: string;
    password: string;
    password_confirmation: string;
  }) => {
    try {
      const res = await $api.post("reset-password", {
        token,
        email,
        password,
        password_confirmation,
      });
      console.log(res);

      return res;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const logout = async () => {
    try {
      await $api.post("logout", {});
      return true;
    } catch (error: any) {
      // Handle the error, e.g., display a message to the user
      console.error("Error logging out:", error);
    } finally {
      // Call the `purge` function to clear any user data or session information
      purge();
    }
  };

  const verifyToken = async () => {
    try {
      $api.get("verify-token");
      return true;
    } catch (error: any) {
      purge();
      throw new Error(error?.message);
    }
  };

  const purge = () => {
    tokenService.removeToken();
    // localStorage.removeItem(USER_KEY);
    user.value = null
  };

  const setUser = (data: any) => {
    user.value = JSON.stringify(data);
  };

  return {
    user,
    register,
    login,
    sendResetLink,
    resetPassword,
    logout,
    verifyToken,
  };
});
