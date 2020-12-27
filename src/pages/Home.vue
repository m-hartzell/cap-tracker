<template>
  <div>
    <ohio-map @cap-clicked="capClicked" />

    <div ref="tooltip" v-show="capState.selectedCapId">
      <div
        class="w-64 p-4 bg-white rounded-lg shadow"
        v-if="capState.caps[capState.selectedCapId]"
      >
        <cap-detail-tooltip :cap-data="capState.caps[capState.selectedCapId]" />
      </div>
      <div
        v-else
        class="flex justify-center items-center w-16 h-16 p-2 bg-white rounded-lg shadow-lg"
      >
        <div
          class="flex justify-center items-center w-full h-full bg-green-600 rounded shadow"
        >
          <p class="text-5xl font-bold text-white">
            <plus-icon class="w-full h-full"></plus-icon>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import { createPopper, Instance } from "@popperjs/core";
  import { capState } from "./../cap-state";

  import OhioMap from "./../components/OhioMap.vue";
  import CapDetailTooltip from "./../components/CapDetailTooltip.vue";
  import PlusIcon from "./../components/PlusIcon.vue";

  export default defineComponent({
    components: {
      OhioMap,
      CapDetailTooltip,
      PlusIcon,
    },
    setup() {
      const tooltip = ref<HTMLElement>();
      const popperInstance = ref<Instance>();

      return {
        capState,
        popperInstance,
        tooltip,
      };
    },
    methods: {
      toggleCapInfo(target: HTMLElement) {
        if (this.capState.selectedCapId == target.id) {
          this.capState.selectedCapId = null;
          this.popperInstance?.destroy();
        } else {
          if (this.tooltip) {
            this.capState.selectedCapId = target.id;
            this.popperInstance = createPopper(target, this.tooltip, {
              placement: "bottom",
            });
          }
        }
      },
      capClicked(target: HTMLElement) {
        this.toggleCapInfo(target);
      },
    },
  });
</script>

<style scoped></style>
