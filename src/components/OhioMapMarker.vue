<template>
  <g :class="['absolute transition-opacity duration-300', isSelected ? 'z-10' : 'z-0', isFaded ? 'opacity-20' : '']">
    <image
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
  import { store as capStore } from "./../state/cap-state";

  export default defineComponent({
    props: ["cap", "isSelected"],
    setup(props, context) {
      const el = ref<HTMLElement | null>(null);
      const width = computed(() => (props.isSelected ? 32 : 22));
      const height = computed(() => (props.isSelected ? 32 : 22));
      const isFaded = computed(() => capStore.state.selectedCapId && !props.isSelected);

      onMounted(() => {
        if (el.value != null)
          el.value.addEventListener("load", () => context.emit("imageLoaded"));
      });

      return {
        el,
        width,
        height,
        isFaded
      };
    },
  });
</script>

<style scoped>
  circle {
    fill: #fff;
  }
</style>
