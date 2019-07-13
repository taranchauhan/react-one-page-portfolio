# React one page Portfolio

A one page react Portfolio template to showcase your work.

## Prerequisites

This repository assumes that you have the following installed:

1. Node
2. NPM

## Editing Portfolio to include your content

You will only need to edit `src/config.js`, which contains all the content for your portfolio.

There are two objects:

1. `profile`
2. `projects`

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the app dependencies

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

#### `npx http-server build`

Following 'npm run build', serve the production version of the app using an express server.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run lint`

Lints the JavaScript src files

### `npm run pre-commit-verify`

Run's the pre-commit command manually to check the following:

1. Jest test coverage threshold is satisfied
2. Linting checks are passing

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
