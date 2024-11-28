import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
const portFinderSync = require('portfinder-sync');

export function buildDevServer(port: number): DevServerConfiguration {
  return {
    port: portFinderSync.getPort(port),
    historyApiFallback: true,
    hot: true,
    open: true
  };
}