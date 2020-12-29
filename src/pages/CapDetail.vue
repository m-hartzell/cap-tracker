<template>
  <div class="flex">
    <div class="w-1/3">
      <cap-image class="w-20" :image-url="cap.imageUrl" />
    </div>
    <div class="w-2/3">
      <div class="leading-none">{{ cap.breweryName }}</div>
      <div class="text-xl font-bold">{{ cap.beerName }}</div>
      <div
        class="inline-block px-2 text-gray-500 text-sm border border-gray-500 rounded-full"
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
  import { capState } from "../cap-state";
  import CapImage from "../components/CapImage.vue";

  export default defineComponent({
    components: { CapImage },
    setup() {
      const route = useRoute();
      let capId = ref(route.params.capId);
      let cap = ref(capState.caps[route.params.capId as string]);
      let date = computed(() => format(cap.value.dateAdded, "MMM dd, yyyy"));

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
        date,
      };
    },
  });
</script>

<style scoped></style>
