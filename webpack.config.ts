import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin } from 'webpack';
import { Configuration } from 'webpack';

const config = (env: any): Configuration => {
  const mode = env.mode || "development";
  const isDev = mode === "development";
  const paths = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, "public", "index.html")
  };
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    plugins: [
      new HtmlWebpackPlugin({ template: paths.html }), new ProgressPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: isDev ? 'inline-source-map' : undefined,
  };
};
export default config;