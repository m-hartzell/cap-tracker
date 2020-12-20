<template>
  <div class="">
    <header class="mt-4">
      <div class="container mx-auto flex justify-between items-center px-8">
        <div>
          <div class="font-black text-lg uppercase tracking-wider">
            {{ appTitle }}
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
  </div>
</template>

<script lang="ts">
  import { capState, breweries, capsCollected } from "./cap-state";
  import OhioMap from "./components/OhioMap.vue";

  import { defineComponent, reactive } from "vue";

  export default defineComponent({
    components: { OhioMap },
    setup() {
      const appTitle = "Cap Tracker";
      return {
        capState,
        breweryCount: breweries.value.length,
        appTitle,
        capsCollected: capsCollected.length,
        capsTotal: Object.keys(capState).length,
      };
    },
    methods: {
      toggleCapInfo(capLocationId: string) {
        return (this.capState[capLocationId].selected = !this.capState[
          capLocationId
        ].selected);
      },
      capClicked(capLocationId: string) {
        this.toggleCapInfo(capLocationId);
      },
    },
  });
</script>

<style lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
