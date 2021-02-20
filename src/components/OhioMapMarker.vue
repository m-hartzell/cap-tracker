<template>
  <g class="relative">
    <image
      :id="cap.elementId"
      ref="el"
      :href="cap.getMapThumbImg()"
      :height="height"
      :width="width"
      :x="cap.position.cx - width / 2"
      :y="cap.position.cy - height / 2"
    />
  </g>
</template>

<script lang="ts">
  import { computed, defineComponent, onMounted, ref } from "vue";

  export default defineComponent({
    props: ["cap", "isSelected"],
    setup(props, context) {
      const el = ref<HTMLElement | null>(null);
      const width = computed(() => (props.isSelected ? 35 : 25));
      const height = computed(() => (props.isSelected ? 35 : 25));

      onMounted(() => {
        if (el.value != null)
          el.value.addEventListener("load", () => context.emit("imageLoaded"));
      });

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
