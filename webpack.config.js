const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
    shoot: "./src/shoot.js"
  },
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: "api",
    libraryTarget: "umd"
  }
};
