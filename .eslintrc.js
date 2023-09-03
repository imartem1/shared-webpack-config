module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/jsx-runtime',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'error',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            { destructuredArrayIgnorePattern: '^_' },
        ],
        'no-unused-vars': 'off',
        'react/require-default-props': 'warn',
        'react/jsx-props-no-spreading': ['warn', {
            exceptions: ['button', 'Link'],
        }],
        'react/function-component-definition':
        [
            'error',
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        '@typescript-eslint/no-shadow': [
            'error',
            {
                builtinGlobals: true,
                hoist: 'functions',
                allow: [],
                ignoreOnInitialization: false,
            },
        ],
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': ['error', { markupOnly: true }],
        'max-len': ['error', { ignoreComments: true, code: 90 }],
    },
    globals: {
        __IS_DEV__: true,
    },
};
