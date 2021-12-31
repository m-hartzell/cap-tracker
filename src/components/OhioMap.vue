<template>
  <div>
    <svg
      width="251"
      height="268"
      viewBox="0 0 251 268"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame" clip-path="url(#clip0)">
        <path
          id="state"
          d="M-5.07394 23.6921L74.6964 21.692L76.1626 23.6921V25.6954H80.552L84.2112 24.361L90.0668 28.3675L92.9959 31.0365H97.3853L105.437 37.7119L109.826 38.3807L113.485 33.7054L115.682 37.0432H121.537L115.682 40.3809L106.167 41.7184L104.704 43.053L108.363 45.7219L114.948 41.7184L119.341 43.7217L124.463 41.0497L133.978 47.0595L142.026 43.7217L147.152 43.053L161.055 35.7087L172.033 37.7119L176.426 37.0432H181.548L199.111 21.692L220.333 13.0132L238.63 7.67223L249.607 3L254 97.1226L251.074 99.7946H247.415L244.485 102.463L248.878 111.142L247.415 115.146L248.878 121.821L243.022 132.503L240.096 150.527L237.9 157.871L235.704 160.54V168.55L226.189 175.225L219.604 183.904L213.015 187.911L205.696 191.248L200.574 187.242L193.989 192.583L193.256 195.92L186.67 197.255L183.011 205.265L181.548 210.606V216.613V219.95L172.033 224.623L166.178 215.278L160.326 222.622L159.592 227.96L155.933 230.632L158.13 237.308V242.649L155.933 244.649L152.274 245.318L149.345 256L138.37 258L133.244 256.666L125.926 248.656L117.878 247.321L113.485 233.97L105.437 236.639L98.8482 241.311L95.1889 245.987H87.8704L80.552 241.98L71.7706 239.311L65.915 245.318L60.7928 242.649L52.0111 235.304H46.1557L43.2296 236.639L31.5186 233.97L30.0556 227.295L25.6632 221.285L24.2001 216.613L18.3446 214.61L13.9555 211.272L8.83327 213.944H4.44082L-2.87772 208.602L-8 212.609L-5.07394 23.6921Z"
        />

        <circle
          v-for="position in capPositions"
          ref="el"
          :data-element-id="position.id"
          :key="position.id"
          :cx="position.cx"
          :cy="position.cy"
          :r="position.r"
          :class="['fill-current text-white', isSelected(position.id) ? 'z-10' : 'z-5']"
          :stroke="isSelected(position.id) ? '#d5d5d5' : ''"
          :stroke-width="6"
          @click="capClicked($event)"
        />

        <g
          :class="[
            'caps-group',
            'transition-opacity',
            'duration-300',
            allImagesLoaded ? 'opacity-1' : 'opacity-0',
          ]"
          v-show="allImagesLoaded"
        >
          <ohio-map-marker
            v-for="cap in capStore.state.caps"
            :key="cap.elementId"
            :cap="cap"
            :data-element-id="cap.elementId"
            :is-selected="isSelected(cap.elementId)"
            @click="capClicked($event)"
            @imageLoaded="onImageLoad"
            :id="cap.elementId"
          />
          <use :xlink:href="`#${capStore.state.selectedCapId}`" class="shadow-lg" />
        </g>
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
  import capPositions from "./../data/cap-positions.json";
  import { store as capStore } from "./../state/cap-state";
  import { defineComponent, ref, computed } from "vue";
  import OhioMapMarker from "./OhioMapMarker.vue";

  export default defineComponent({
    components: { OhioMapMarker },
    setup(_props, { emit }) {
      const imageLoadCount = ref(0);
      const onImageLoad = () => imageLoadCount.value++;
      const allImagesLoaded = computed(
        () => {
          return true;
          console.log(imageLoadCount)
          return imageLoadCount.value === Object.entries(capStore.state.caps).length
        }
      );

      const capClicked = (event: Event) => {
        const target = event.currentTarget as HTMLElement;
        // capStore.state.caps[target.id];
        emit("cap-clicked", target);
      };

      return {
        allImagesLoaded,
        onImageLoad,
        capPositions,
        capStore,
        capClicked,
      };
    },
    methods: {
      isSelected(capId: string) {
        return capStore.state.selectedCapId === capId;
      },
    },
  });
</script>

<style lang="postcss" scoped>
  svg {
    width: 100%;
    height: auto;
    @apply max-w-screen-sm;
  }
  path {
    fill: theme("colors.gray.200");
  }
</style>
