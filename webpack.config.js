/* eslint-disable @typescript-eslint/no-var-requires */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const devMode =
  process.argv[process.argv.indexOf("--mode") + 1] !== "production";

const webpackConfig = {
  devtool: "inline-source-map",
  mode: devMode ? "development" : "production",
  entry: {
    main: "./src/main.tsx",
  },
  output: {
    clean: true,
    filename: "[name].[contenthash].js",
    path: path.resolve("./dist"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(j|t)sx?$/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name].[ext]",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({ title: "tictactoe" }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
    }),
  ],
};

if (devMode) {
  webpackConfig.devServer = {
    static: "./dist",
    historyApiFallback: true,
    hot: true,
    client: {
      reconnect: true,
    },
  };
}

module.exports = webpackConfig;
