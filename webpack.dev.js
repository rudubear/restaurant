// webpack.config.js
import path from "node:path";
import common from "./webpack.common.js";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { merge } from 'webpack-merge';

export default merge (common, {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    },
});