# winamax

## Description

Winamax Front-End Software Engineer technical test - Poker

## Getting Started

### Prerequisites:

Node.js, pnpm and Turborepo installed on your system.

For more information :

[how to install Node.js](https://nodejs.org/fr/download/package-manager)

[how to install pnpm](https://pnpm.io/installation)

[how to install Turborepo](https://turbo.build/repo/docs/getting-started/installation)

## Installation:

Clone this repository.
Navigate to the project root directory.
Install dependencies:

```
pnpm install
```

## Development:

Start the development server:

```
turbo dev
```

Scripts:

The turbo.json file configures Turbo tasks for building the application. Currently, the following tasks are defined:

`build`: Builds the application.

`storybook`: Start storybook.

`test`: Test the application.

`test:coverage` : To display the coverage of the tests.

`ts:check`: Runs type checking on TypeScript files.

`lint:check`: Runs code linting checks.

`lint:fix`: Attempts to automatically fix code linting issues.

`dev`: Starts a development server with hot reloading (persistent mode, caching disabled).
