import capsCollected from "../data/caps-collected";
import Cap from "../models/cap";
import { computed, reactive } from "vue";
import uniq from "ramda/es/uniq";

interface CapState {
  caps: {
    [id: string]: Cap;
  };
  selectedCapId: string | null;
}

const capState = reactive(initCapState());
function initCapState(): CapState {
  const capState: CapState = {
    caps: {},
    selectedCapId: null,
  };

  capsCollected.forEach((cap: Cap) => {
    capState.caps[cap.elementId] = cap;
  });

  const API_URL = import.meta.env.VITE_AWS_API_URL;

  console.log(API_URL);
  fetch(`${API_URL}/getCaps`)
    .then((r) => r.json())
    .then((d) => console.log(d));

  console.log(capState);

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
  // TODO
  capState.caps[cap.elementId] = cap;
}

export { capState, breweries, capsCollected, saveCap };
