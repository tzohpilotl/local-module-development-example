import { shoot } from "./shoot";

export const snap = function() {
  console.group("Defined in the main API file");
  console.log("Snap!");
  console.groupEnd();
};

export default {
  snap,
  shoot
};
