const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.jsx",
  mode: "development",
  devServer: {
    port: 3001,
    static: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),

    new ModuleFederationPlugin({
      name: "remoteCompo",
      filename: "remoteEntry.js",
      exposes: {
        "./ButtonCompo": "/src/Button.jsx",
      },
    }),
  ],
};
