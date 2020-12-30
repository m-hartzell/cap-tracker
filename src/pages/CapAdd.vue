<template>
  <form>
    <h2>Add New Cap</h2>
    <fieldset class="flex items-center justify-between">
      <div class="w-2/3">
        <div class="field-group">
          <label for="BreweryNameInput">Brewery Name</label>
          <input
            id="BreweryNameInput"
            type="text"
            v-model="capData.breweryName"
          />
        </div>
        <div class="field-group">
          <label for="BeerNameInput">Beer Name</label>
          <input id="BeerNameInput" type="text" v-model="capData.beerName" />
        </div>
      </div>
      <div class="w-1/3">
        <button
          id="BeerCapUpload"
          type="button"
          class="mx-auto w-24 h-24 bg-gray-200 flex items-center justify-center text-gray-500 text-5xl font-bold rounded-full shadow-none border border-gray-400"
        >
          <span class="relative -top-1">+</span>
        </button>
        <label
          for="BeerCapUpload"
          class="mt-2 text-center uppercase text-xs text-gray-400"
        >
          Cap Upload
        </label>
      </div>
    </fieldset>
    <fieldset>
      <button type="submit" @click="saveForm" class="bg-amber-500">Save</button>
    </fieldset>
  </form>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from "vue";
  import { useRoute } from "vue-router";
  import { saveCap } from "./../state/cap-state";
  import Cap from "./../models/cap";

  export default defineComponent({
    props: {
      capData: {
        type: Object,
        default: () => ({ breweryName: "", beerName: "" }),
      },
    },
    setup() {
      const route = useRoute();
      console.log(route);
      let capId = route.params.capId ?? "";

      return {
        capId,
      };
    },
    methods: {
      saveForm(event: Event) {
        event.preventDefault();
        console.log("Saving ", this.capId, {
          breweryName: this.capData?.breweryName,
          beerName: this.capData?.beerName,
        });
        const cap = new Cap(
          this.capId,
          this.capData?.breweryName,
          this.capData?.beerName
        );
        saveCap(cap);
      },
    },
  });
</script>

<style scoped></style>
