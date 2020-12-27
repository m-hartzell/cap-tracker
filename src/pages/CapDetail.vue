<template>
  <div class="flex">
    <div class="w-1/3">
      <cap-image class="w-20" :image-url="cap.imageUrl" />
    </div>
    <div class="w-2/3">
      <div class="text-2xl">{{ cap.breweryName }}</div>
      <div class="">{{ cap.beerName }}</div>
      <div class="mt-4">Collected: {{ cap.dateAdded }}</div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from "vue";
  import { useRoute } from "vue-router";
  import { capState } from "../cap-state";
  import CapImage from "../components/CapImage.vue";

  export default defineComponent({
    components: { CapImage },
    setup() {
      const route = useRoute();
      let capId = ref(route.params.capId);
      let cap = ref(capState.caps[route.params.capId as string]);

      watch(
        () => route.params,
        async (newParams) => {
          capId.value = newParams.capId;
          cap.value = capState.caps[newParams.capId as string];
        }
      );

      return {
        capId,
        cap,
      };
    },
  });
</script>

<style scoped></style>
