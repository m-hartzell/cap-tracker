<template>
  <div class="px-8 bg-gray-200 border-t-4 border-red-700">
    <p class="my-3 font-bold">DEBUG</p>
    <hr />
    <pre>{{ debugInfo }}</pre>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    props: {
      debugInfo: {
        type: Object,
        required: true,
      },
    },
  });
</script>

<style scoped></style>
