import { BuildOptions } from './types/config';
import {ResolveOptions} from "webpack";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {},
        mainFiles: ['index'],
        modules: [options.paths.src, 'node_modules']
    }
}
