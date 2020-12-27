<template>
  <div>
    <img v-if="imageUrl" :src="imageUrl" alt="" />
    <cap-logo grayscale v-else class="w-full h-auto" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import CapLogo from "./CapLogo.vue";

  export default defineComponent({
    components: { CapLogo },
    props: {
      imageUrl: {
        type: String,
        default: "",
      },
    },
  });
</script>

<style scoped></style>
