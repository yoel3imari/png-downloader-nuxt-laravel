import { defineNuxtPlugin } from '#app'
import ApiService from '~/services/apiService'

export default defineNuxtPlugin(() => {
  const baseURL = process.env.BASE_URL || 'http://localhost:8000'
  const apiService = new ApiService(baseURL);

  // Provide ApiService globally
  return {
    provide: {
      api: apiService
    }
  }
});
