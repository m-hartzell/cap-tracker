<template>
  <div class="flex flex-wrap items-center">
    <div
      v-for="cap in sortedCaps"
      class="relative w-1/4 p-4 text-center"
      :key="cap.id"
    >
      <cld-image
        :publicId="cap.publicId"
        transformations="h_100,w_100,r_max"
        class="relative z-10 mx-auto mb-2 rounded-full shadow-md"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from "vue";
  import CldImage from "../components/CldImage.vue";

  import { capState } from "./../state/cap-state";

  export default defineComponent({
    components: { CldImage },
    setup() {
      const sortedCaps = computed(() =>
        Object.values(capState.caps).sort((a, b) =>
          a.dateAdded < b.dateAdded ? 1 : -1
        )
      );

      return {
        capState,
        sortedCaps,
      };
    },
  });
</script>

<style scoped></style>
