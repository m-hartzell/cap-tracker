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
      <button type="button" @click="capFormSubmit" class="bg-amber-500">
        Save
      </button>
    </fieldset>
  </form>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import { store as capStore } from "./../state/cap-state";
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

      const capFormSubmit = async () => {
        let uploadedImgData = null;
        let img = null;
        if (fileInput && fileInput.value?.files) {
          img = fileInput.value.files[0];
          try {
            uploadedImgData = await capStore.uploadImage(img);
          } catch (e) {
            throw new Error(`Cloudinary Upload Failed: ${e.message}`);
          }
        } else {
          throw new Error("No image in file input");
        }

        const cap = new Cap(
          props.capId,
          props.capData?.breweryName,
          props.capData?.beerName,
          uploadedImgData.public_id
        );
        console.log(`Saving ${props.capId}`, cap, uploadedImgData);
        capStore.saveCap(cap);
      };

      return {
        fileInput,
        capFormSubmit,
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
