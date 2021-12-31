<template>
  <div class="flex flex-wrap items-center">
    <router-link
      v-for="cap in sortedCaps"
      class="relative w-1/4 p-2 text-center"
      :key="cap.capGuid"
      :to="'/' + cap.elementId + '/detail'"
    >
      <cld-image
        :publicId="cap.publicId"
        transformations="h_150,w_150,r_max"
        class="relative z-10 mx-auto mb-2 rounded-full shadow-md"
      />
    </router-link>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from "vue";
  import CldImage from "../components/CldImage.vue";

  import { store as capStore } from "./../state/cap-state";

  export default defineComponent({
    components: { CldImage },
    setup() {
      const sortedCaps = computed(() =>
        Object.values(capStore.state.caps).sort((a, b) =>
          a.dateAdded < b.dateAdded ? 1 : -1
        )
      );

      return {
        sortedCaps,
      };
    },
  });
</script>

<style scoped></style>
