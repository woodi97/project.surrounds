module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'next',
    'next/core-web-vitals',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
}