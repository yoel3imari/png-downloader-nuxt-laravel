import { ref, type Ref } from "vue";
import { useToast } from "~/components/ui/toast";

interface QueryState<T> {
  data: Ref<T | null>;
  isLoading: Ref<boolean>;
  error: Ref<Error | null>;
  execute: () => Promise<void>;
}

export function useQuery<T>(queryFn: () => Promise<T>): QueryState<T> {
  const data: Ref<T | null> = ref(null);
  const isLoading: Ref<boolean> = ref(false);
  const error: Ref<Error | null> = ref(null);
  const { toast } = useToast();

  const execute = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      data.value = await queryFn();
      console.log(data.value, "useQuery");
      
      // if(data.value.message) {
      //   toast({
      //     title: "Success",
      //     description: data.value.message,
      //     variant: "default",
      //   });
      // }
    } catch (e) {
      error.value = e instanceof Error ? e : new Error("An error occurred");
      console.error(error);
      toast({
        title: "Error",
        description: error.value.message,
        variant: "destructive",
      });
    } finally {
      isLoading.value = false;
    }
  };

  return {
    data,
    isLoading,
    error,
    execute,
  };
}
