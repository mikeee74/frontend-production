import type { BuildEnv, BuildPaths } from "./config/build/types/config";
import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

export default (env: BuildEnv) => {
	const mode = env.mode || "development";
	const isDev = mode === "development";
	const PORT = env.port || 3000;

	const paths: BuildPaths = {
		entry: path.resolve(__dirname, "src", "index.tsx"),
		build: path.resolve(__dirname, "build"),
		html: path.resolve(__dirname, "public", "index.html"),
	};

	const config: webpack.Configuration = buildWebpackConfig({
		paths,
		mode,
		isDev,
		port: PORT,
	});

	return config;
};
