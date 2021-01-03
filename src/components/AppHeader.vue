<template>
  <header>
    <div class="container mx-auto px-8">
      <div class="flex flex-wrap items-center">
        <router-link class="flex items-center cursor-pointer" to="/">
          <div class="mr-4">
            <cap-logo-mark class="w-12 h-auto" />
          </div>
          <div>
            <p class="font-black text-lg uppercase tracking-wider">
              Cap Tracker
            </p>
          </div>
        </router-link>
        <div class="ml-auto">
          <div class="flex items-center space-x-4">
            <router-link to="/">Map</router-link>
            <router-link to="/list">List</router-link>
          </div>
          <!-- <div class="flex justify-between items-center">
            <div>
              <p class="flex items-center mr-4 text-xl uppercase">
                <span class="text-xl font-bold">{{ capsCollected }}</span>
                <span class="mx-1">/</span>
                <span class="mt-2 text-sm">
                  {{ capsTotal }} <span>caps</span>
                </span>
              </p>
            </div>
            <div>
              <p class="hidden text-sm uppercase sm:block">
                <span class="text-xl font-bold">{{ breweryCount }}</span>
                <span class="pl-1">breweries</span>
              </p>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import CapLogoMark from "./CapLogoMark.vue";

  export default defineComponent({
    components: { CapLogoMark },
    setup() {
      return {};
    },
  });
</script>

<style scoped></style>
