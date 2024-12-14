import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(isDev: boolean): RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  const cssLoader = {
    test: /\.css$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {

        loader: "css-loader",
        options: {
          modules: {
            auto: /\.module\.\w+$/i,
            namedExport: false,
            exportLocalsConvention: 'as-is',
            localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]"
          },
        },
      }]
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };


  const svgrLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };
  return [
    tsLoader,
    cssLoader,
    fileLoader,
    svgrLoader
  ];
}