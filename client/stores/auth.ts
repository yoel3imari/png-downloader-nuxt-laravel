import { tokenService } from "~/services/tokenService";
import type { Credentials } from "~/libs/definitions";
import { useStorage } from '@vueuse/core';

const USER_KEY = "user_info";

export const useAuthStore = defineStore("auth", () => {
  const user = useStorage(USER_KEY, "");
  const { $api } = useNuxtApp();

  const login = async ({ email, password }: Credentials) => {
    try {
      // get /sanctum/csrf-cookie => xrsf-token
      const res = await $api.post("/login", { email, password });

      if (res?.data.access_token) {
        await tokenService.setToken(res.data.access_token);
      }

      if (res.data.user) {
        user.value = res.data.user;
      }

      return true;
    } catch (error: any) {
      throw new Error(error);
    }
  };

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
      const res = await $api.post("/register", { name, email, password });
      if (res?.data.access_token) {
        await tokenService.setToken(res.data.access_token);
      }

      if (res.data.user) {
        user.value = res.data.user;
      }

      return true;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const logout = async () => {
    try {
      await $api.post("logout", {});
      tokenService.removeToken();
      user.clear();
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return {
    user,
    login,
    register,
    logout
  };
});
