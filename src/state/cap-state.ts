// import capsCollected from "../data/caps-collected";
import Cap from "../models/cap";
import { computed, reactive } from "vue";
import uniq from "ramda/es/uniq";

interface CapState {
  caps: {
    [id: string]: Cap;
  };
  selectedCapId: string | null;
}

let capState = reactive<CapState>({ caps: {}, selectedCapId: null });
async function fetchAllCaps() {
  // From AWS DynamoDB...
  const API_URL = import.meta.env.VITE_AWS_API_URL;
  const returnedCaps = await fetch(`${API_URL}/getCaps`)
    .then((r) => r.json())
    .then((items) => Cap.formatDynamoDBResponse(items));

  for (let c of returnedCaps) {
    capState.caps[c.elementId] = c;
  }
  console.info("Caps Loaded", capState.caps);
}

const breweries = computed<string[]>(() => {
  const breweryNames: string[] = [];
  Object.values(capState.caps).forEach(({ breweryName }) => {
    if (breweryName === "") return;
    breweryNames.push(breweryName);
  });
  return uniq(breweryNames);
});

const capsCollected = computed(() => {
  return capState.caps.length;
});

function saveCap(cap: Cap) {
  // TODO
  capState.caps[cap.elementId] = cap;
}

export { capState, fetchAllCaps, breweries, capsCollected, saveCap };
