const prettierConfig = {
    printWidth: 200,
    endOfLine: 'auto',
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    quoteProps: 'as-needed',
    trailingComma: 'all',
    bracketSpacing: true,
    jsxSingleQuote: true,
    bracketSameLine: false,
    arrowParens: 'always',
    plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
};

export default prettierConfig;
