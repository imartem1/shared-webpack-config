import type { Configuration as DevServerCofiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export default function buildDevServer(options: BuildOptions): DevServerCofiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
