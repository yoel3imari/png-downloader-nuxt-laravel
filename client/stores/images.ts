export const useImageStore = defineStore('images', () => {
  const {$api} = useNuxtApp();

  const uploadImage = async (data: {
    title: string,
    description: string,
    category: number,
    tags: string[],
    image: File
  }) => {
    try {
      const res = await $api.postWithFile('/images', data);
      return res;
    } catch (error: any) {
      throw new Error(error)
    }
  }

  return {
    uploadImage
  }
})