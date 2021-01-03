<template>
  <div>
    <img v-if="imageUrl" :src="imageUrl" alt="" />
    <cap-logo-mark grayscale v-else class="w-full h-auto" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import CapLogoMark from "./CapLogoMark.vue";

  export default defineComponent({
    components: { CapLogoMark },
    props: {
      imageUrl: {
        type: String,
        default: "",
      },
    },
  });
</script>

<style scoped></style>
