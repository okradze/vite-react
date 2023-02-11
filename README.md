# React + TypeScript Starter

A modern React + TypeScript starter with pre-configured ESLint, Prettier, Git hooks with Husky, Unit Testing with Jest and Testing Library out of the box 📦

![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![Commitlint](https://img.shields.io/badge/commitlint-000000?style=for-the-badge&logo=commitlint&logoColor=white)
![Testing Library](https://img.shields.io/badge/testing%20library-E33332?style=for-the-badge&logo=testing-library&logoColor=white)

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- ⚛️ [React 18](https://reactjs.org/) - A JavaScript library for building user interfaces
- 💎 [TypeScript](https://www.typescriptlang.org/) - Why not?!
- 🔨 [ESLint](https://eslint.org/) - JavaScript linter
- 🌀 [Prettier](https://prettier.io) - Code Formatter
- 🐺 [Husky](https://github.com/typicode/husky) - Native Git hooks
- 🐺 [Lint Staged](https://github.com/okonet/lint-staged) - Run Linters On Staged Files
- 📑 [Commitlint](https://commitlint.js.org/) - Linting your commits based on commit convention
- ⚙️ [Vitest](https://vitest.dev/) - Unit Testing Framework
- ⚙️ [Testing Library](https://testing-library.com/) - Unit Testing Framework
- ⌨️ Alias Imports

## IDE

We highly encourage you to use [Visual Studio Code](https://code.visualstudio.com/)

Make sure you have those plugins installed:

- Code Spell Checker
- ESLint
- EditorConfig
- Prettier

Recommended plugins:

- GitLens
- TODO Highlight

## Node Version

We use `NVM` to manage the Node version. You can install it [NVM](https://github.com/nvm-sh/nvm)

Version is specified in `.nvmrc` file.

After installing NVM, run the following command to install the Node version used in this project:

```bash
nvm install
nvm use
```

## Install Dependencies

We use `yarn` to manage the dependencies. You can install it by running the following command and then install dependencies:

```bash
npm install -g yarn
yarn # or yarn install
```

## Scripts

<p>In this project, you can run the following scripts:</p>

| Script             | Description                                          |
| ------------------ | ---------------------------------------------------- |
| yarn start         | Runs the app in the development mode.                |
| yarn build         | Builds the app for production to the `build` folder. |
| yarn test          | Run and watch unit tests.                            |
| yarn test:coverage | Get unit test coverage.                              |
| yarn test:ci       | Run unit tests once.                                 |
| yarn test:ui       | Run unit test in UI.                                 |

## Committing

We use [Commitlint](https://commitlint.js.org/) to lint our commit messages. This ensures that we have consistent commit messages.

Example of a good commit message:

```bash
git commit -m "feat: add new feature"
```

Commit Types:

| Type     | Description                                                                  |
| -------- | ---------------------------------------------------------------------------- |
| feat     | A new feature for user, not a new feature for build script                   |
| fix      | A bug fix for user, not a fix to a build script                              |
| chore    | Other changes that don't modify src or test files                            |
| style    | Changes that do not affect the meaning of the code (white-space, formatting) |
| docs     | Documentation only changes                                                   |
| refactor | A code change that neither fixes a bug nor adds a feature                    |
| perf     | A code change that improves performance                                      |
| test     | Adding missing tests or correcting existing tests                            |
| build    | Changes that affect the build system or external dependencies                |
| ci       | Changes to our CI configuration files and scripts                            |
| revert   | Reverts a previous commit                                                    |

## License

[MIT](https://choosealicense.com/licenses/mit/)
