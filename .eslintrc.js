module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'plugin:i18next/recommended', 'airbnb', 'plugin:react-hooks/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.tsx'],
        }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'arrow-body-style': 'off',
        'max-len': 'off',
        'no-undef': 'off',
        'react/no-array-index-key': 'off',
        'no-param-reassign': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'warn',
        'react-hooks/exhaustive-deps': 'error',
        'jsx-a11y/no-autofocus': 'off',
        'consistent-return': 'off',
        'no-use-before-define': 'off',
        'i18next/no-literal-string': ['warn', {
            markupOnly: true,
            ignoreAttribute: ['data-testid', 'to'],
        }],
        'import/order': [2, {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            'newlines-between': 'always',
            pathGroups: [{
                pattern: '@/**',
                group: 'internal',
            }],
            alphabetize: {
                order: 'asc',
            },
        }],
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        ReactTagProps: true,
    },
    overrides: [{
        files: ['**/src/**/*.test.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off',
        },
    }],
};
