import capSvgData from "./cap-svg-data.json";
import { computed, reactive } from "vue";

type CapSvgData = {
  id: string;
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  r: number;
};

type Cap = {
  id: string;
  brewery: string;
  dateAddedTimestamp: number;
  imageUrl: string;
};

type CapEl = {
  selected: boolean;
  position: {};
  data?: Cap;
};

type CapState = {
  [id: string]: CapEl;
};

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
  console.log(capState);
  return capState;
}

const breweries = computed<string[]>(() => {
  const breweryNames: string[] = [];
  Object.values(capState).forEach((capEl: CapEl) => {
    if (!capEl.data || capEl.data.brewery == "") return;
    breweryNames.push(capEl.data.brewery);
  });
  return breweryNames;
});

export default reactive<CapState>(capState);
export { breweries };
