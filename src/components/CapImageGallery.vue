<template>
  <div class="flex flex-wrap items-center space-between">
    <div class="w-1/5" v-for="url of imageUrls" :key="url">
      <div
        class="flex items-center justify-center p-2 w-20 h-20 rounded-full shadow"
      >
        <cap-image class="" :image-url="url" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from "vue";
  import { capState } from "./../state/cap-state";

  import CapImage from "./CapImage.vue";

  export default defineComponent({
    components: { CapImage },
    setup() {
      const imageUrls = computed(() =>
        Object.values(capState.caps).map((c) => c.imageUrl)
      );

      return {
        imageUrls,
      };
    },
  });
</script>

<style scoped></style>
