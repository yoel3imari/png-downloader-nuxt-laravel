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

  const resetPassword = async ({ email }: {email: string}) => {
    try {
      const res = await $api.post("/forgot-password", { email });
      //check if link sent or error
      console.log(res);

      return res;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const logout = async () => {
    try {
      await $api.post("logout", {});
      purge();
    } catch (error: any) {
      throw new Error(error);
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
    user.value = null;
  };

  const setUser = (data: any) => {
    user.value = JSON.stringify(data);
  };

  return {
    user,
    register,
    login,
    resetPassword,
    logout,
    verifyToken,
  };
});
