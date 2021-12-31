<template>
  <div class="max-w-2xl mx-auto">
    <app-header class="my-4" />
    <main>
      <section>
        <div class="container mx-auto px-2">
          <router-view></router-view>
        </div>
      </section>
    </main>
    <footer class="p-4"></footer>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { store } from "./state/cap-state";
  import AppHeader from "./components/AppHeader.vue";

  export default defineComponent({
    components: {
      AppHeader,
    },
    setup() {
      store.fetchAllCaps();
    },
  });
</script>
