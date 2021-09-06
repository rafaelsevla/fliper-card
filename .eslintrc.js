module.exports = {
  root: true,
  extends: [ '@react-native-community' ],
  parser: '@typescript-eslint/parser',
  plugins: [ '@typescript-eslint', 'simple-import-sort' ],
  rules: {
    'quotes': [ 'error', 'single' ],
    'jsx-quotes': [ 'error', 'prefer-single' ],
    'prettier/prettier': 0,
    'comma-dangle': [ 'error', 'only-multiline' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'arrow-parens': [ 'error', 'always' ],
    'curly': [ 'error', 'multi-line' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'space-before-function-paren': [ 'error', 'always' ],
    'radix': [ 'error', 'as-needed' ],
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [
            // Packages. `react`\`react-dom` packages come first.
            '^react(-dom)?$',
            '^prop-types',
            // Internal packages come last.
            '^\\w',
            '^@'
          ],
          [
            // aliases first
            '^[~]',
            '^fixtures',
            // Parent imports. Put `..` last.
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            // Other relative imports. Put same-folder imports and `.` last.
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
            // With Side effect imports
            '^\\u0000'
          ]
        ]
      }
    ],
  }
};
