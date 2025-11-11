export const env = {
    browser: true,
    es2021: true,
}; 
export const extendsConfig = [
    'plugin:react/recommended',
    'airbnb',
];
export const parserOptions = {
    ecmaFeatures: {
        jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
};
export const plugins = [
    'react',
];
export const rules = {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
};
