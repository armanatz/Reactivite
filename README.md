# ⚡ [Reactivite](https://github.com/armanatz/Reactivite) ⚡

A minimal starter for React with TypeScript support with out of the box formatting and linting. Utilizes the blazing fast Vite build tool.

## Features

- [React](https://reactjs.org) with [TypeScript](https://www.typescriptlang.org) using the [Vite](https://vitejs.dev) build tool.
- Supports [Sass](https://sass-lang.com/) with [automatic type declaration file creation](https://github.com/activeguild/vite-plugin-sass-dts) when using SCSS Modules.
- Utilizes [PostCSS](https://postcss.org/) with the [Autoprefixer](https://github.com/postcss/autoprefixer) plugin to optimize CSS and SCSS code.
- Supports TypeScript [absolute imports](https://github.com/aleclarson/vite-tsconfig-paths).
- Uses [ESLint](https://eslint.org) (with ESLint AirBnB Config), [stylelint](https://stylelint.io) and [Prettier](https://prettier.io) for code linting and formatting.
- Runs pre-commit command using [Husky](https://github.com/typicode/husky) to run [lint-staged](https://github.com/okonet/lint-staged).
- Unit and integration testing using [Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/).
- Comes with a light VSCode setting file to enable formatting on save for JSON, JavaScript, TypeScript, TypeScript React, and Markdown files.
- Recommends useful extensions to install when using VSCode as your editor.

## Getting Started

Either use this repo as a [GitHub template](https://github.com/armanatz/Reactivite) or use [degit](https://github.com/Rich-Harris/degit) to make a clean copy of this repo:

```
npx degit armanatz/Reactivite#master my-app
```

After that, navigate to your project folder and install dependencies:

```
// If using NPM as your package manager
npm i

// If using Yarn as your package manager
yarn
```

Then you can run the local development server using:

```
// If using NPM as your package manager
npm run dev

// If using Yarn as your package manager
yarn dev
```

To build your application, run:

```
// If using NPM as your package manager
npm build

// If using Yarn as your package manager
yarn build
```

Build files will be located in the `dist` folder once generated.

## Available Scripts

- `format`: Formats all files with Prettier.
- `lint`: Type-checks all files with TypeScript, and then lints all files using ESLint and StyleLint.
- `preview`: Allows for a local preview of the production build of the application.
- `test`: Runs unit and integration tests based on file changes tracked in git using Vitest.
- `test:ci`: Runs all unit and integration tests in CI mode using Vitest.
- `test:watch`: Runs Vitest test runner in watch mode.
- `validate`: Runs all linting commands defined in `lint`, and then runs `test:ci` for testing.
