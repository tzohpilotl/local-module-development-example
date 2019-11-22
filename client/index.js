const api = require("library-bundle").default;
const submodule = require("library-bundle/shoot").default;

console.log(api);
console.log(submodule);

console.group("Invoked from the main API");
api.shoot();
api.snap();
console.groupEnd();

console.group("Invoked from the submodule API");
submodule.shoot();
submodule.take();
console.groupEnd();
