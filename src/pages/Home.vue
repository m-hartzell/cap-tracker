<template>
  <div>
    <ohio-map @cap-clicked="capClicked" />
    <panel>
      <router-view></router-view>
    </panel>

    <div ref="tooltip" v-show="showTooltip">
      <div
        class="flex justify-center items-center w-16 h-16 p-2 bg-white rounded-lg shadow-lg"
      >
        <div
          class="flex justify-center items-center w-full h-full bg-green-600 rounded shadow"
        >
          <p
            class="text-5xl font-bold"
            @click="onPlusIconClick"
          >
            <plus-icon class="text-white w-full h-full"></plus-icon>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref } from "vue";
  import { createPopper, Instance } from "@popperjs/core";
  import { store } from "./../state/cap-state";

  import Panel from "./../components/Panel.vue";
  import OhioMap from "./../components/OhioMap.vue";
  import PlusIcon from "./../components/PlusIcon.vue";

  export default defineComponent({
    components: {
      Panel,
      OhioMap,
      PlusIcon,
    },
    setup() {
      const tooltip = ref<HTMLElement>();
      const popperInstance = ref<Instance>();
      const showTooltip = ref<boolean>(false);
      const capStore = reactive(store);

      return {
        capStore,
        popperInstance,
        tooltip,
        showTooltip,
      };
    },
    methods: {
      capClicked(target: HTMLElement) {
        this.popperInstance?.destroy();
        this.showTooltip = false;
        if (!target.dataset.elementId) return

        if (this.capStore.state.selectedCapId == target.dataset.elementId) {
          this.capStore.state.selectedCapId = null;
          this.$router.push("/");
        } else if (this.capStore.state.caps[target.dataset.elementId] === undefined) {
          this.addTooltip(target);
        } else {
          this.capStore.state.selectedCapId = target.dataset?.elementId ?? "";
          this.$router.push(`/${this.capStore.state.selectedCapId}/detail`);
        }
      },
      addTooltip(target: HTMLElement) {
        if (this.tooltip) {
          this.capStore.state.selectedCapId = target.dataset.elementId ?? "";
          this.popperInstance = createPopper(target, this.tooltip, {
            placement: "bottom",
          });
          this.showTooltip = true;
        }
      },
      onPlusIconClick() {
        this.openAddForm(this.capStore.state.selectedCapId ?? "");
      },
      openAddForm(capId: string | null) {
        if (!capId) return;
        
        this.popperInstance?.destroy();
        this.showTooltip = false;
        this.$router.push(`/${this.capStore.state.selectedCapId}/add`);
      },
    },
  });
</script>

<style scoped></style>
