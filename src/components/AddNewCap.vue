<template>
  <form>
    <fieldset>
      <div>
        <label for="BreweryNameInput">Brewery Name</label>
        <input id="BreweryNameInput" type="text" v-model="breweryName" />
      </div>
      <div>
        <label for="BeerNameInput">Beer Name</label>
        <input id="BeerNameInput" type="text" v-model="beerName" />
      </div>
    </fieldset>
    <fieldset>
      <button type="submit" @click="saveForm" class="bg-amber-500">Save</button>
    </fieldset>
  </form>
  <div>{{ capData }}</div>
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
      },
    },
    setup(props) {
      const capId = computed(() => props.capId);
      const breweryName = computed(() => props.capData?.breweryName ?? "");
      const beerName = computed(() => props.capData?.beerName ?? "");

      const saveForm = (event: Event) => {
        event.preventDefault();
        console.log("Saving ", capId.value, {
          breweryName: breweryName.value,
          beerName: beerName.value,
        });
        const cap = new Cap(capId.value, breweryName.value, beerName.value);
        saveCap(cap);
      };

      return {
        breweryName,
        beerName,
        saveForm,
      };
    },
  });
</script>

<style scoped></style>
