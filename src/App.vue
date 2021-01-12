<template>
  <div class="max-w-2xl mx-auto">
    <app-header class="my-4" />
    <main>
      <section>
        <div class="container mx-auto px-8">
          <router-view></router-view>
        </div>
      </section>
    </main>
    <footer class="p-4"></footer>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, reactive, ref } from "vue";

  import { capState, fetchAllCaps } from "./state/cap-state";
  import capPositions from "./data/cap-positions.json";

  import CapLogo from "./components/CapLogo.vue";
  import AppHeader from "./components/AppHeader.vue";

  export default defineComponent({
    components: {
      AppHeader,
    },
    setup() {
      fetchAllCaps();
      return {
        capState,
      };
    },
  });
</script>
