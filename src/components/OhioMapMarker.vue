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
      :href="cap.getMapThumbImg()"
      :height="height"
      :width="width"
      :x="position.cx - width / 2"
      :y="position.cy - height / 2"
    />
  </g>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from "vue";

  export default defineComponent({
    props: ["position", "cap", "isSelected"],
    setup(props) {
      const el = ref(null);
      const width = computed(() => (props.isSelected ? 25 : 20));
      const height = computed(() => (props.isSelected ? 25 : 20));
      return {
        el,
        width,
        height,
      };
    },
  });
</script>

<style scoped></style>
