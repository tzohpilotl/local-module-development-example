const fs = require("fs");
const yarn = require("yarn-api");
const { isEmpty } = require("ramda");

const path = "./yalc.lock";
const earlyExitMessage = "Could not find a yalc file.";
const noDependenciesMessage = "There are no local dependencies.";

function yarnAdd(module) {
  yarn("add", module, function(error) {
    throw error;
  });
}

function getConfig(path) {
  const configFile = fs.readFileSync(path, "utf8");
  return JSON.parse(configFile);
}

try {
  if (!fs.existsSync(path)) {
    console.log(earlyExitMessage);
    return;
  }

  const config = getConfig(path);
  if (isEmpty(config.packages)) {
    console.log(noDependenciesMessage);
    return;
  }

  const localDependencies = Object.keys(config.packages);
  localDependencies.forEach(yarnAdd);
} catch (error) {
  console.error(error);
}
