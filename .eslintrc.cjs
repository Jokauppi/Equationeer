module.exports = {
  extends: [
    'plugin:import/typescript',
    'plugin:react/recommended', 
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript'
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/require-default-props': 'off',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
  },
}