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

  const execute = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      data.value = await queryFn();
    } catch (e) {
      error.value = e instanceof Error ? e : new Error("An error occurred");
      console.error(error);
      const { toast } = useToast();
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
