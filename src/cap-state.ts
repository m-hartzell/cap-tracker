import capSvgData from "./data/cap-positions.json";
import capsCollected from "./data/caps-collected";
import Cap from "./models/cap";
import { computed, reactive } from "vue";

const capState = initCapState(capSvgData);
function initCapState(capSvgData: CapSvgData[]): CapState {
  const capState: CapState = {};
  capSvgData.forEach(({ cx, cy, r, id }) => {
    capState[id] = {
      selected: false,
      position: {
        cx,
        cy,
        rx: r,
        ry: r,
      },
    };
  });
  capsCollected.forEach((cap: Cap) => {
    capState[cap.capLocationId].data = cap;
  });
  return capState;
}

const breweries = computed<string[]>(() => {
  const breweryNames: string[] = [];
  capsCollected.forEach((cap: Cap) => {
    if (cap.brewery === "") return;
    breweryNames.push(cap.brewery);
  });
  return breweryNames;
});

export { capState, breweries, capsCollected };
