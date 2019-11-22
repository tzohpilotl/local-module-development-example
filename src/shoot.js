export const shoot = function() {
  console.group("Defined in the shoot file");
  console.log("Shoot!");
  console.groupEnd();
};

function take() {
  console.group("Defined in the shoot file");
  console.log("Take!");
  console.groupEnd();
}

export default {
  shoot,
  take
};
