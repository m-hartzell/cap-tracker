<template>
  <div
    ref="panelEl"
    class="fixed bottom-0 inset-x-4 max-w-2xl mx-auto p-4 bg-white border rounded-t-xl shadow-md"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from "vue";

  export default defineComponent({
    setup() {
      const panelEl = ref<HTMLElement>();

      onMounted(() => {
        if (panelEl.value) {
          const hammer = new Hammer(panelEl.value);
          hammer.get("swipe").set({ direction: Hammer.DIRECTION_VERTICAL });
          hammer.on("swipedown", (input) => {
            console.log(input);
          });
        }
      });

      return {
        panelEl,
      };
    },
  });
</script>

<style scoped></style>
