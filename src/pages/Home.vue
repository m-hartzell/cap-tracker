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
            @click="openAddForm(capState.selectedCapId)"
          >
            <plus-icon class="text-white w-full h-full"></plus-icon>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onBeforeMount, onMounted, ref } from "vue";
  import { createPopper, Instance } from "@popperjs/core";
  import { capState, fetchAllCaps } from "./../state/cap-state";

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

      return {
        capState,
        popperInstance,
        tooltip,
        showTooltip,
      };
    },
    methods: {
      capClicked(target: HTMLElement) {
        if (this.capState.selectedCapId == target.id) {
          this.capState.selectedCapId = null;
          this.$router.push("/");
        } else if (this.capState.caps[target.id] === undefined) {
          console.log(this.capState.caps[target.id]);
          this.addTooltip(target);
        } else {
          this.capState.selectedCapId = target.id;
          this.$router.push(`/${this.capState.selectedCapId}/detail`);
        }
      },
      addTooltip(target: HTMLElement) {
        if (this.tooltip) {
          this.capState.selectedCapId = target.id;
          this.popperInstance = createPopper(target, this.tooltip, {
            placement: "bottom",
          });
          this.showTooltip = true;
        }
      },
      openAddForm(capId: string) {
        this.$router.push(`/${this.capState.selectedCapId}/add`);
        this.showTooltip = true;
        this.popperInstance?.destroy();
      },
    },
  });
</script>

<style scoped></style>
