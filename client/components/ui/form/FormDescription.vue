<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { useFormField } from './useFormField'
import { cn } from '~/libs/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { formDescriptionId } = useFormField()
</script>

<template>
  <p
    :id="formDescriptionId"
    class="m-0"
    :class="cn('text-sm text-muted-foreground mt-1', props.class)"
  >
    <slot />
  </p>
</template>
