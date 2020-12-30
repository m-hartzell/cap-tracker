<template>
  <form>
    <fieldset>
      <div>
        <label for="BreweryNameInput">Brewery Name</label>
        <input
          id="BreweryNameInput"
          type="text"
          v-model="capData.breweryName"
        />
      </div>
      <div>
        <label for="BeerNameInput">Beer Name</label>
        <input id="BeerNameInput" type="text" v-model="capData.beerName" />
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
  import { saveCap } from "./../cap-state";
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
