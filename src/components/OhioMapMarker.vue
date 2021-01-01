<template>
  <g class="relative">
    <circle
      v-if="!cap"
      ref="el"
      :id="position.id"
      :key="position.id"
      :cx="position.cx"
      :cy="position.cy"
      :r="position.r"
      :class="[
        'fill-current text-white z-10',
        {
          'text-gray-600': cap,
          shadow: isSelected,
        },
      ]"
      stroke="white"
      :stroke-width="isSelected ? 2 : 0"
    />
    <image
      v-else
      :id="position.id"
      :href="cap.imageUrl"
      height="20"
      width="20"
      :x="position.cx - 12.5"
      :y="position.cy - 12.5"
    />
  </g>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    props: ["position", "cap", "isSelected"],
    setup() {
      const el = ref(null);
      return {
        el,
      };
    },
    mounted() {
      // console.log(this.el);
    },
  });
</script>

<style scoped></style>
