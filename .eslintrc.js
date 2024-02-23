module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12, // Set to the ECMAScript version you're targeting
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json'],
  },
  env: {
    node: true,
    es6: true,
  },
  plugins: ['prettier','@typescript-eslint', 'react'],
  extends: [
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'eol-last': ['error', 'always'],
    'import/named': 'off', // Removed array brackets for consistency
    'import/extensions': 'off', // Removed array brackets for consistency
    'import/no-unresolved': 'off', // Removed array brackets for consistency
    'react/jsx-no-bind': 'error',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'unknown'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          { pattern: './**', group: 'sibling' },
        ],
      },
    ],
  },

  settings: {
    react: {
      version: 'detect', // Set React version to detect automatically
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  overrides: [
    {
      files: ['*.stories.tsx', 'src/app/**/**.tsx'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  ignorePatterns: ['file-to-exclude.js'],
};
