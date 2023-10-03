
![Uploading app-giphy.gif…]()


# to install run
yarn
yarn dev

open http://127.0.0.1:5173/

# Notes

Based on requirements

1. On page reload call trending api and start from page 0
2. Debounce input and min chars 3 to make query call
3. When input is cleared via x button or deleted will call trending api from page 0
4. Choose lazy attribute supported by most browsers for lazy load to save time
5. Skip tests for the moment but would normally add reducer tests and some react testing library tests
6. could do with some refactoring esp with the pagination and switching of the endpoints logic to make it easier to follow
7. 2 hours pretty tight

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
