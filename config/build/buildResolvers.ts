import { ResolveOptions } from "webpack";
import { BuilPaths } from "./types/config";

export function buildResolvers(paths: BuilPaths): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      "@": paths.src,
    },
  };
}