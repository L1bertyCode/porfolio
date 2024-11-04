import path from 'path';
import { Configuration } from 'webpack';
import { BuildEnv, BuilPaths } from './config/build/types/config';;
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

const config = (env: BuildEnv): Configuration => {
  const mode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 3000;
  const paths: BuilPaths = {
    src: path.resolve(__dirname, "src"),
    entry: path.resolve(__dirname, "src", "index.ts"),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, "public", "index.html")
  };
  return buildWebpackConfig({ mode, paths, port: PORT, isDev });
};
export default config;