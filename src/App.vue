<template>
  <div class="max-w-2xl mx-auto">
    <header class="mt-4">
      <div class="container mx-auto px-8">
        <div class="flex flex-wrap items-center">
          <div
            class="flex items-center cursor-pointer"
            @click="$router.push('/')"
          >
            <div class="mr-4">
              <cap-logo class="w-12 h-auto" />
            </div>
            <div>
              <p class="font-black text-lg uppercase tracking-wider">
                Cap Tracker
              </p>
            </div>
          </div>
          <div class="ml-auto">
            <div class="flex justify-between items-center">
              <div>
                <p class="flex items-center mr-4 text-xl uppercase">
                  <span class="text-xl font-bold">{{ capsCollected }}</span>
                  <span class="mx-1">/</span>
                  <span class="mt-2 text-sm"> {{ capsTotal }} caps </span>
                </p>
              </div>
              <div>
                <p class="text-sm uppercase">
                  <span class="text-xl font-bold">{{ breweryCount }}</span>
                  breweries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section>
        <div class="container mx-auto px-8">
          <router-view></router-view>
        </div>
      </section>
    </main>
    <footer class="p-4"></footer>
  </div>
  <!-- <debug-info v-if="isDevEnv" :debug-info="debugInfo" /> -->
</template>

<script lang="ts">
  import { defineComponent, onMounted, reactive, ref } from "vue";

  import { capState, breweries, capsCollected } from "./cap-state";
  import debugInfo from "./state/debug-info";
  import capPositions from "./data/cap-positions.json";

  import CapLogo from "./components/CapLogo.vue";
  import DebugInfo from "./components/DebugInfo.vue";
  export default defineComponent({
    components: {
      DebugInfo,
      CapLogo,
    },
    setup() {
      const isDevEnv = import.meta.env.MODE == "development";

      return {
        isDevEnv,
        debugInfo,
        capState,
        breweryCount: breweries.value.length,
        capsCollected: capsCollected.length,
        capsTotal: capPositions.length,
      };
    },
  });
</script>

<style lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
