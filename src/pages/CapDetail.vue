<template>
  <div v-if="cap" class="flex items-center space-x-8">
    <div
      class="absolute top-3 right-3 text-xs text-gray-400 uppercase tracking-wide"
    >
      <router-link to="/">Close</router-link>
    </div>
    <div class="w-1/3">
      <cld-image
        class="rounded-full w-24 shadow"
        :transformations="'c_thumb,g_face,h_250,w_250'"
        :publicId="cap.publicId"
      ></cld-image>
    </div>
    <div class="w-2/3">
      <div class="leading-none">{{ cap.breweryName }}</div>
      <div class="text-xl font-bold">{{ cap.beerName }}</div>
      <div
        class="inline-block mt-2 px-2 text-gray-500 text-sm border border-gray-500 rounded-full"
      >
        {{ date }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, ref, watch } from "vue";
  import { useRoute } from "vue-router";
  import { format } from "date-fns";
  import { store as capStore } from "../state/cap-state";
  import CapImage from "../components/CapImage.vue";
  import CldImage from "../components/CldImage.vue";

  export default defineComponent({
    components: { CapImage, CldImage },
    setup() {
      const route = useRoute();
      let capId = ref(route.params.capId);
      let cap = ref(capStore.state.caps[route.params.capId as string]);
      let date = computed(() =>
        format(new Date(cap.value.dateAdded), "MMM dd, yyyy")
      );

      watch(
        () => route.params,
        async (newParams) => {
          capId.value = newParams.capId;
          cap.value = capStore.state.caps[newParams.capId as string];
        }
      );

      watch(capStore.state.caps, () => {
        cap.value = capStore.state.caps[route.params.capId as string];
      });

      return {
        capId,
        cap,
        date,
      };
    },
  });
</script>

<style scoped></style>
