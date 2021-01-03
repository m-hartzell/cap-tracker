<template>
  <div class="flex flex-wrap items-center">
    <div
      v-for="cap in sortedCaps"
      class="relative w-1/3 bg-gray-100 border border-gray-200 p-4 text-center"
      :key="cap.id"
    >
      <cld-image
        :publicId="cap.publicId"
        transformations="c_thumb,g_face,h_100,w_100"
        class="relative z-10 mx-auto mb-2 border-2 border-gray-800 rounded-full shadow-md"
      />
      <div
        class="absolute top-0 left-0 p-2 bg-gray-100 text-sm text-center font-bold text-gray-300 leading-none"
      >
        <p>{{ capDate(cap.dateAdded)[0] }}</p>
        <p>{{ capDate(cap.dateAdded)[1] }}</p>
        <p>{{ capDate(cap.dateAdded)[2] }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from "vue";
  import format from "date-fns/format";
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

      const capDate = (date: Date) => format(date, "MM.dd.yy").split(".");

      return {
        capState,
        sortedCaps,
        capDate,
      };
    },
  });
</script>

<style scoped></style>
