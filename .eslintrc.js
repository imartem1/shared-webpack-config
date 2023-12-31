module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'airbnb-typescript',
        'plugin:i18next/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/jsx-runtime',
        'plugin:storybook/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        "indent": "off",
        "@typescript-eslint/indent": [2, 4],
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            { destructuredArrayIgnorePattern: '^_' },
        ],
        'no-unused-vars': 'off',
        'react/require-default-props': 'off',
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
            'warn',
            {
                builtinGlobals: true,
                hoist: 'functions',
                allow: ['classNames'],
                ignoreOnInitialization: false,
            },
        ],
        'no-shadow': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
              js: 'never',
              jsx: 'never',
              ts: 'never',
              tsx: 'never',
            }
        ],
        'no-param-reassign': 'off',
        'import/no-extraneous-dependencies': ['warn', { 'devDependencies' : true}],
        'no-underscore-dangle': ['error', { 'allow': ['__IS_DEV__'] }],
        'i18next/no-literal-string': ['error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid'],
            },
        ],
        'max-len': ['error', { ignoreComments: true, code: 90 }],
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error' // Checks effect dependencies
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
};
