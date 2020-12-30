<template>
  <div class="fixed bottom-0 inset-x-4 p-4 rounded-t-xl shadow-lg">
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
