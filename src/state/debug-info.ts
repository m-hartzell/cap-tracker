import { reactive } from "vue";

interface DebugInfo {
  [key: string]: {};
}

const debugInfo = reactive<DebugInfo>({});

function addToDebugInfo(key: string, object: object) {
  debugInfo[key] = object;
}

debugInfo.test = { test: "test" };

export default debugInfo;
export { addToDebugInfo };
