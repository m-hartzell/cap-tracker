<template>
  <div>
    <ohio-map @cap-clicked="capClicked" />
    <panel>
      <router-view></router-view>
    </panel>

    <div
      ref="tooltip"
      v-show="
        capState.selectedCapId &&
        capState.caps[capState.selectedCapId] === undefined
      "
    >
      <div
        class="flex justify-center items-center w-16 h-16 p-2 bg-white rounded-lg shadow-lg"
      >
        <div
          class="flex justify-center items-center w-full h-full bg-green-600 rounded shadow"
        >
          <p
            class="text-5xl font-bold text-white"
            @click="openAddForm(capState.selectedCapId)"
          >
            <plus-icon class="w-full h-full"></plus-icon>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from "vue";
  import { createPopper, Instance } from "@popperjs/core";
  import { capState } from "./../state/cap-state";

  import Panel from "./../components/Panel.vue";
  import OhioMap from "./../components/OhioMap.vue";
  // import CapDetailTooltip from "./../components/CapDetailTooltip.vue";
  import PlusIcon from "./../components/PlusIcon.vue";

  export default defineComponent({
    components: {
      Panel,
      OhioMap,
      // CapDetailTooltip,
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
      capClicked(target: HTMLElement) {
        if (this.capState.selectedCapId == target.id) {
          this.capState.selectedCapId = null;
          this.$router.push("/");
        } else if (this.capState.caps[target.id] === undefined) {
          this.toggleCapInfo(target);
        } else {
          this.capState.selectedCapId = target.id;
          this.$router.push(`/${this.capState.selectedCapId}/detail`);
        }
      },
      toggleCapInfo(target: HTMLElement) {
        if (this.tooltip) {
          this.capState.selectedCapId = target.id;
          this.popperInstance = createPopper(target, this.tooltip, {
            placement: "bottom",
          });
        }
      },
      openAddForm(capId: string) {
        this.$router.push(`/${this.capState.selectedCapId}/add`);
        this.popperInstance?.destroy();
      },
    },
  });
</script>

<style scoped></style>
