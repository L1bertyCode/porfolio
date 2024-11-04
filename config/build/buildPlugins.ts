import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import { BuilPaths } from "./types/config";

export function buildPlugins(paths: BuilPaths): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({ template: paths.html }), new ProgressPlugin()
  ];
}