<template>
  <g class="relative">
    <image
      :id="cap.elementId"
      :href="cap.getMapThumbImg()"
      :height="height"
      :width="width"
      :x="cap.position.cx - width / 2"
      :y="cap.position.cy - height / 2"
    />
  </g>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from "vue";

  export default defineComponent({
    props: ["cap", "isSelected"],
    setup(props) {
      const el = ref(null);
      const width = computed(() => (props.isSelected ? 35 : 25));
      const height = computed(() => (props.isSelected ? 35 : 25));
      return {
        el,
        width,
        height,
      };
    },
  });
</script>

<style scoped>
  circle {
    fill: #fff;
  }
</style>
