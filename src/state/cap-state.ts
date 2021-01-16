import Cap from "../models/cap";
import { computed, reactive } from "vue";
import uniq from "ramda/es/uniq";

interface CapState {
  caps: {
    [id: string]: Cap;
  };
  selectedCapId: string | null;
}

const API_URL = import.meta.env.VITE_AWS_API_URL;

const store = {
  state: reactive<CapState>({ caps: {}, selectedCapId: null }),

  async fetchAllCaps() {
    const returnedCaps = await fetch(`${API_URL}/getCaps`)
      .then((r) => r.json())
      .then((items) => Cap.formatDynamoDBResponse(items));
    for (let c of returnedCaps) {
      this.state.caps[c.elementId] = c;
    }
  },

  async saveCap(cap: Cap) {
    const res = await fetch(`${API_URL}/getCaps`, {
      method: "POST",
      body: JSON.stringify(cap.dynamoDBFormat()),
    });
    console.log(res);
    this.state.caps[cap.elementId] = cap;
  },
};

const breweries = computed<string[]>(() => {
  const breweryNames: string[] = [];
  Object.values(store.state.caps).forEach(({ breweryName }) => {
    if (breweryName === "") return;
    breweryNames.push(breweryName);
  });
  return uniq(breweryNames);
});

const capsCollected = computed(() => {
  return store.state.caps.length;
});

export { store, breweries, capsCollected };
