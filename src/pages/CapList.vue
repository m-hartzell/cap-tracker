<template>
  <div class="flex flex-wrap">
    <div v-for="cap in capState.caps" class="w-1/3" :key="cap.id">
      <img :src="cap.imageUrl" width="100" height="100" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  import { capState } from "./../state/cap-state";

  export default defineComponent({
    setup() {
      return {
        capState,
      };
    },
  });
</script>

<style scoped></style>
