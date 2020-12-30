<template>
  <div class="relative">
    <button
      type="button"
      class="absolute top-0 right-0 -mr-2 -mt-4 py-0 px-1 bg-transparent text-gray-500 shadow-none"
      @click="closeBtnClicked"
    >
      x
    </button>
    <div class="flex items-center cursor-pointer" @click="tooltipClicked">
      <div class="w-1/3 flex justify-center pr-2">
        <cld-image
          v-if="capData.publicId"
          class="block w-16 h-16 rounded-full shadow"
          :publicId="capData.publicId"
          transformations="c_thumb,g_face,h_50,w_50"
        />

        <div v-else class="bg-gray-600 block w-16 h-16 rounded-full"></div>
      </div>
      <div class="w-2/3">
        <p class="mb-1 text-sm leading-4 text-gray-600">
          {{ capData.breweryName }}
        </p>
        <p class="font-black leading-4">{{ capData.beerName }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { capState } from "./../state/cap-state";

  import CldImage from "./CldImage.vue";

  export default defineComponent({
    components: { CldImage },
    props: {
      capData: {
        type: Object,
        required: true,
      },
    },
    setup() {
      return {
        capState,
      };
    },
    methods: {
      closeBtnClicked() {
        this.capState.selectedCapId = null;
      },
      tooltipClicked() {
        this.$router.push(`/${capState.selectedCapId}/detail`);
      },
    },
  });
</script>

<style scoped></style>
