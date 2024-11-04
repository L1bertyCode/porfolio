export type BuildMode = "development" | "production";
export type BuilPaths = {
  src: string;
  entry: string;
  build: string;
  html: string;
};
export type BuildEnv = {
  mode: BuildMode,
  port: number;
};
export type BuildOptions = {
  mode: BuildMode;
  paths: BuilPaths,
  port: number;
  isDev: boolean;
};