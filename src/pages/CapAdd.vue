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
        <label
          for="BeerCapUpload"
          class="mt-2 text-center uppercase text-xs text-gray-400"
        >
          <div
            class="mx-auto mb-2 w-24 h-24 bg-gray-200 flex items-center justify-center text-gray-500 text-5xl font-bold rounded-full shadow-none border border-gray-400"
          >
            <span class="relative -top-1">+</span>
          </div>
          Cap Upload
        </label>
        <input
          type="file"
          ref="fileInput"
          id="BeerCapUpload"
          accept=".jpg,.jpeg,.png"
        />
      </div>
    </fieldset>
    <fieldset>
      <button type="submit" @click="saveForm" class="bg-amber-500">Save</button>
    </fieldset>
  </form>
</template>

<script lang="ts">
  import { computed, defineComponent, onMounted, ref, watch } from "vue";
  import { useRoute } from "vue-router";
  import { saveCap } from "./../state/cap-state";
  import Cap from "./../models/cap";

  export default defineComponent({
    props: {
      capId: {
        type: String,
        default: "",
      },
      capData: {
        type: Object,
        default: () => ({ breweryName: "", beerName: "" }),
      },
    },
    setup(props) {
      let fileInput = ref<HTMLInputElement>();
      onMounted(() => {
        console.log(`On mounted Ref: `, fileInput.value);
        if (fileInput.value) {
          fileInput.value.onchange = (e) => {
            const fileInput = e.target as HTMLInputElement;
            if (fileInput.files) {
              // Get thumb
            }
          };
        }
      });

      const saveForm = (event: Event) => {
        event.preventDefault();
        console.log("Saving ", props.capId, {
          breweryName: props.capData?.breweryName,
          beerName: props.capData?.beerName,
        });
        const cap = new Cap(
          props.capId,
          props.capData?.breweryName,
          props.capData?.beerName
        );
        saveCap(cap);
      };

      return {
        fileInput,
        saveForm,
      };
    },
    methods: {},
  });
</script>

<style scoped>
  input[type="file"] {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
</style>
