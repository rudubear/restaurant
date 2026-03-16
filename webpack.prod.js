// webpack.config.js
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import common from "./webpack.common.js";
import { merge } from 'webpack-merge';

export default merge (common, {
    mode: "production",
});