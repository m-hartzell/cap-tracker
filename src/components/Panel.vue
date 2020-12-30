<template>
  <div
    class="fixed bottom-0 inset-x-4 max-w-2xl mx-auto p-4 rounded-t-xl shadow-xl border"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    setup() {
      return {};
    },
  });
</script>

<style scoped></style>
