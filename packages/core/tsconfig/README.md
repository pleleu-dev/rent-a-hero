### Base options

- `esModuleInterop`: Helps mend a few of the fences between CommonJS and ES Modules.

- `skipLibCheck`: Skips checking the types of .d.ts files. This is important for performance, because otherwise all node_modules will be checked.

- `target`: The version of JavaScript you're targeting. I recommend es2022 over esnext for stability.
  allowJs and resolveJsonModule: Allows you to import .js and .json files. Always useful.

- `moduleDetection`: This option forces TypeScript to consider all files as modules. This helps to avoid 'cannot redeclare block-scoped variable' errors.

- `isolatedModules`: This option prevents a few TS features which are unsafe when treating modules as isolated files.

- `verbatimModuleSyntax`: This option forces you to use import type and export type, leading to more predictable behavior and fewer unnecessary imports. With module: NodeNext, it also enforces you're using the correct import syntax for ESM or CJS.

### Strictness

- `strict`: Enables all strict type checking options. Indispensable.

- `noUncheckedIndexedAccess`: Prevents you from accessing an array or object without first checking if it's defined. This is a great way to prevent runtime errors, and should really be included in strict.

- `noImplicitOverride`: Makes the override keyword actually useful in classes.

### Building for a Library in a Monorepo

- `declaration`: Tells TypeScript to emit .d.ts files. This is needed so that libraries can get autocomplete on the .js files you're creating.

- `sourceMap and declarationMap`: Tells TypeScript to emit source maps and declaration maps. These are needed so that when consumers of your libraries are debugging, they can jump to the original source code using go-to-definition.

### Not Transpiling with TypeScript

- `module`: preserve is the best option because it most closely mimics how bundlers treat modules. moduleResolution: Bundler is implied from this option.
- `noEmit`: Tells TypeScript not to emit any files. This is important when you're using a bundler so you don't emit useless .js files.

### Running in the DOM

- `lib`: Tells TypeScript what built-in types to include. es2022 is the best option for stability. dom and dom.iterable give you types for window, document etc.
