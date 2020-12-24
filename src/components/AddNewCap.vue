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
  <!-- <div>{{ capData }}</div> -->
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from "vue";
  import { saveCap } from "./../cap-state";
  import Cap from "./../models/cap";

  export default defineComponent({
    props: {
      capId: {
        type: String,
        required: true,
      },
      capData: {
        type: Object,
        default: () => ({ breweryName: "", beerName: "" }),
      },
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
