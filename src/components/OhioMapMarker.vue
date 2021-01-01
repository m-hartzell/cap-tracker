<template>
  <ellipse
    :id="position.id"
    :key="position.id"
    :cx="position.cx"
    :cy="position.cy"
    :rx="position.rx"
    :ry="position.ry"
    :class="[
      'fill-current text-white z-10',
      {
        'text-gray-600': cap,
        shadow: isSelected,
      },
    ]"
    stroke="white"
    :stroke-width="isSelected ? 2 : 0"
  />
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    props: ["position", "cap", "isSelected"],
    setup() {
      return {};
    },
  });
</script>

<style scoped></style>
