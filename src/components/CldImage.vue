<template>
  <img :src="computedUrl" />
</template>

<script lang="ts">
  import { computed, defineComponent } from "vue";

  export default defineComponent({
    props: {
      cloudName: {
        type: String,
        default: "hartzelldev",
      },
      publicId: {
        type: String,
        required: true,
      },
      ext: {
        type: String,
        default: "",
      },
      transformations: {
        type: String,
        default: "",
      },
    },

    setup(props) {
      const computedUrl = computed(() => {
        return `https://res.cloudinary.com/${props.cloudName}/image/upload/${props.transformations}/${props.publicId}${props.ext}`;
      });

      return {
        computedUrl,
      };
    },
  });
</script>

<style scoped></style>
