## Setup

`npm install && npm run tina-dev`

## Directory Structure

The directory structure after `src` will be as follows:

- assets - global static assets such as images, svgs, company logo, etc.
- components - global shared/reusable components, such as layout (wrappers, navigation), form components, buttons
- modules - JavaScript modules (all components under specific page should go here, e.g. **modules/dashboard/component.tsx** will contain components rendered in **pages/dashboard.tsx**)
- store - Global Redux / Zustand store
- utils - Utilities & helper functions and the like
- pages - NextJS page files
- graphql - Apollo/GraphQL files can be found

## Naming convensions

- `.ts` - utility functions or config files will be follow `camelCase.ts`
- `.tsx` - files that holds react components
  - `page` - if it's a page file, it should follow `kebab-case.tsx`
  - `component` - if it's a component/module, should follow `PascalCase.tsx`

## Path aliasing

Added path aliasing **(@folder-name)** is used to easily determine which files were imported locally and from library, this is very helpful for better organization of imports. Library imports should come first then local.

## @chakra-ui/cli

Running **gen:theme-typings** will auto generate typescript definition based on the `theme/index.ts` configuration. Only works in VSCode.

## Setting up husky, lint-staged and commitizen

- **husky** is already included under dev dependencies just `npm install` and `.husky` directory will be generated for you.
- **lint-staged** has to be manually setup in order to avoid unexpected behavior when running the script (see `.husky/pre-commit`)

## We use this tools

- [ESLint](https://eslint.org/docs/user-guide/configuring/)
- [Husky](https://typicode.github.io/husky/#/)
- [Prettier](https://prettier.io/)
- [Lint Staged](https://github.com/okonet/lint-staged)
- [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)
- [@chakra-ui/cli](https://www.npmjs.com/package/@chakra-ui/cli)

### [Structure reference](https://www.taniarascia.com/react-architecture-directory-structure)

## Before running the application

Copy the following variables in your local .env

### Development env variables

```
NEXT_PUBLIC_TINA_API_URL=http://localhost:4001/graphql
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

### Production env variables

```
NEXT_PUBLIC_TINA_CLIENT_ID=b2c8ea13-1ba4-4b0a-9ac2-4d58738f1295
NEXT_PUBLIC_TINA_API_URL=https://content.tinajs.io/content/$NEXT_PUBLIC_TINA_CLIENT_ID/github/master
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```
