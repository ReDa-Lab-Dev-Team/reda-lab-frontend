<script setup lang="ts">
interface Props {
  variant?: "black" | "green" | "yellow" | "blue" | "custom";
  size?: "small" | "medium" | "large";
  rounded?: "sm" | "md" | "lg" | "xl";
  shadow?: boolean;
  customClass?: string;
}

withDefaults(defineProps<Props>(), {
  variant: "black",
  size: "small",
  rounded: "md",
  shadow: false,
});
</script>

<template>
  <span
    :class="[
      'inline-block',
      // Size classes
      size === 'small' && 'px-2 py-1 text-xs',
      size === 'medium' && 'px-4 py-1.5 text-sm font-semibold',
      size === 'large' && 'px-3 py-1 text-xs',
      // Rounded classes
      rounded === 'sm' && 'rounded-sm',
      rounded === 'md' && 'rounded-md',
      rounded === 'lg' && 'rounded-lg',
      rounded === 'xl' && 'rounded-xl',
      // Variant colors
      variant === 'black' && 'bg-black text-white',
      variant === 'green' && 'bg-green-500 text-white',
      variant === 'yellow' && 'bg-yellow-400 text-black',
      variant === 'blue' && 'bg-blue-900 text-white',
      // Shadow
      shadow && 'shadow-md',
      customClass,
    ]"
  >
    <slot />
  </span>
</template>
