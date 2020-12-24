import capSvgData from "./data/cap-positions.json";
import capsCollected from "./data/caps-collected";
import Cap from "./models/cap";
import { computed, initCustomFormatter, reactive } from "vue";
import uniq from "ramda/es/uniq";

interface CapSvgData {
  id: string;
  cx: number;
  cy: number;
  rx: number;
  ry: number;
}

interface CapState {
  caps: {
    [id: string]: Cap;
  };
  selectedCapId: string | null;
}

const capState = reactive(initCapState(capSvgData));
function initCapState(capSvgData: CapSvgData[]): CapState {
  const capState: CapState = {
    caps: {},
    selectedCapId: null,
  };

  capsCollected.forEach((cap: Cap) => {
    capState.caps[cap.elementId] = cap;
  });
  return capState;
}

const breweries = computed<string[]>(() => {
  const breweryNames: string[] = [];
  capsCollected.forEach(({ breweryName }) => {
    if (breweryName === "") return;
    breweryNames.push(breweryName);
  });
  return uniq(breweryNames);
});

function saveCap(cap: Cap) {
  capState.caps[cap.elementId] = cap;
  console.log(capState.caps[cap.elementId]);
}

export { capState, breweries, capsCollected, saveCap };
