import webpack from 'webpack';
import { BuildOptions } from './types/config';
import buildPlugins from './buildPlugins';
import buildResolvers from './buildResolvers';
import buildLoaders from './buildLoaders';
import buildDevServer from './buildDevServer';

export default function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        plugins: buildPlugins(options),
        devServer: buildDevServer(options),
    };
}
