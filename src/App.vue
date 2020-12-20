<template>
  <div class="">
    <header class="mt-4">
      <div class="flex justify-between items-center px-8">
        <div>
          <div class="font-black text-lg uppercase tracking-wider">
            {{ appTitle }}
          </div>
        </div>
      </div>
    </header>
    <main class="">
      <section class="">
        <div
          class="container mx-auto mb-4 px-8 flex justify-between items-center"
        >
          <div>
            <p class="text-sm uppercase">
              <span class="text-xl font-bold">{{ capsCollected }}</span>
              <span class="relative top-0.5 text-md text-gray-600 mt-4"
                >/{{ capsTotal }}
              </span>
              collected
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

      <section>
        <div class="container mx-auto px-8">
          <ohio-map />
        </div>
      </section>
    </main>
    <footer class="p-4"></footer>
  </div>
</template>

<script lang="ts">
  import capState, { breweries } from "./cap-state";
  import OhioMap from "./components/OhioMap.vue";

  import { defineComponent } from "vue";

  export default defineComponent({
    components: { OhioMap },
    setup() {
      const appTitle = "Caps";
      return {
        breweryCount: breweries.value.length,
        appTitle,
        capsCollected: 5,
        capsTotal: 82,
      };
    },
  });
</script>

<style lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
