const path = require("path");
const SentryCliPlugin = require("@sentry/webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

console.log("process", process.env.mode);

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash:6].js",
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin(),
    new SentryCliPlugin({
      include: "./dist",
      org: "dp-9p",
      project: "javascript",
      authToken:
        "1239952ffaba48699a2c3e43e0a155cf22cdbeef74214808b9a48125e8c7058c",
      release: "test",
      dist: "0.0.1",
    }),
  ],
};
