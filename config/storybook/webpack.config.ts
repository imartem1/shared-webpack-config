import path from 'path';
import { BuildPaths } from '../build/types/config';
import webpack, { RuleSetRule } from 'webpack';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import  buildSvgLoader from '../build/loaders/buildSvgLoader';

export default ({config}: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    };

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if(/svg/.test(rule.test as string)) {
            return {...rule, exclude: /\.svg$/};
        }

        return rule;
    })

    config.module.rules.push(buildSvgLoader())

    config.module.rules.push(buildCssLoaders(true))

    return config;
}