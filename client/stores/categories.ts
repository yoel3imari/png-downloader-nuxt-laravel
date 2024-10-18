export const useCategoryStore = defineStore("category", () => {
  const { $api } = useNuxtApp();
  const categories = ref([]);
  const params = ref<{
    search: string;
    image_count?: [number, number] ;
    per_page?: number;
  }>({
    search: "",
    image_count: undefined,
    per_page: 50,
  });
  const getCategories = async () => {
    let query = `/categories?search=${params.value.search}`
    if( params.value.image_count ) query += `&image_count=${params.value.image_count}`;
    if( params.value.per_page ) query += `&image_count=${params.value.per_page}`;
    $api.get(query);
  };

  return {
    categories,
    params,
    getCategories
  };
});
