<template>
  <div class="">
    <header class="mt-4">
      <div class="container mx-auto flex justify-between items-center px-8">
        <div>
          <div class="font-black text-lg uppercase tracking-wider">
            Cap Tracker
          </div>
        </div>
      </div>
    </header>
    <main class="">
      <section>
        <div class="container mx-auto px-8">
          <ohio-map @cap-clicked="capClicked" />
        </div>
      </section>
      <section>
        <div
          class="container mx-auto mb-4 px-8 flex justify-between items-center"
        >
          <div>
            <p class="flex items-center text-xl uppercase">
              <span class="text-xl font-bold">{{ capsCollected }}</span>
              <span class="mx-1">/</span>
              <span class="mt-2 text-sm text-gray-600">
                {{ capsTotal }}
              </span>
            </p>
          </div>
          <div>
            <p class="text-sm uppercase">
              <span class="text-xl font-bold">{{ breweryCount }}</span>
              breweries
            </p>
          </div>
        </div>
      </section>
    </main>
    <footer class="p-4"></footer>
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
  import { defineComponent, onMounted, reactive, ref } from "vue";
  import { createPopper, Instance } from "@popperjs/core";
  import { capState, breweries, capsCollected } from "./cap-state";
  import OhioMap from "./components/OhioMap.vue";
  import CapDetailTooltip from "./components/CapDetailTooltip.vue";
  import PlusIcon from "./components/PlusIcon.vue";

  export default defineComponent({
    components: { OhioMap, CapDetailTooltip, PlusIcon },
    setup() {
      const tooltip = ref<HTMLElement>();
      const selectedCap = ref({});
      const popperInstance = ref<Instance>();
      return {
        popperInstance,
        tooltip,
        capState,
        breweryCount: breweries.value.length,
        capsCollected: capsCollected.length,
        capsTotal: Object.keys(capState).length,
        selectedCap,
      };
    },
    methods: {
      toggleCapInfo(target: HTMLElement) {
        console.log(target.id, this.capState.selectedCapId);
        if (this.capState.selectedCapId == target.id) {
          console.log("Already selected... deselecting");
          this.capState.selectedCapId = null;
          this.popperInstance?.destroy();
          console.log(this.popperInstance?.state);
        } else {
          if (this.tooltip) {
            console.log(this.tooltip);
            this.popperInstance = createPopper(target, this.tooltip, {
              placement: "bottom",

              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, 5],
                  },
                },
              ],
            });
            this.capState.selectedCapId = target.id;
          }
        }
      },
      capClicked(target: HTMLElement) {
        this.toggleCapInfo(target);
      },
    },
  });
</script>

<style lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
