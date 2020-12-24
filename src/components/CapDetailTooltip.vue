<template>
  <div>
    <div class="flex items-center">
      <div class="w-1/3 flex justify-center pr-2">
        <img
          v-if="capData.imageUrl"
          :src="capData.imageUrl"
          class="block w-16 h-16 rounded-full"
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

  export default defineComponent({
    props: {
      capData: {
        type: Object,
        required: true,
      },
    },
  });
</script>

<style scoped></style>
