type CapSvgData = {
  id: string;
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  r: number;
};

type CapEl = {
  selected: boolean;
  position: {};
  data?: Cap;
};

type CapState = {
  [id: string]: CapEl;
};
