const path = require("path");
const nodeExternals = require("webpack-node-externals");
const slsw = require("serverless-webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  entry: slsw.lib.entries,
  devtool: "source-map",

  externals: [nodeExternals()],

  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },

  target: "node",
  stats: "minimal",

  cache: {
    type: "filesystem",
    allowCollectingMemory: true,
    cacheDirectory: path.resolve(".webpackCache"),
  },

  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [new ForkTsCheckerWebpackPlugin()],

  optimization: {
    minimizer: [new TerserPlugin()],
  },

  output: {
    libraryTarget: "commonjs2",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js",
  },
};
