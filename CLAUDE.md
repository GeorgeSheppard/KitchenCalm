# LifeSite Development Guide for Claude

This guide explains how to work with the LifeSite repository, including package management, validation, and API schema updates.

## Package Management with Yarn

This project uses **Yarn** as the package manager. Ensure you have Yarn installed before working on the project.

### Installing Dependencies

```bash
yarn install
```

This installs all dependencies listed in `package.json`.

### Running Development Server

```bash
yarn dev
```

Starts the Next.js development server on `http://localhost:3000`.

## Validating Changes

Always validate your changes before committing:

### Linting

```bash
yarn lint
```

Runs ESLint to check code style and quality. This uses the Next.js linting configuration.

### Testing

```bash
yarn test
```

Runs Jest tests to ensure functionality is correct. Use this to validate that your changes don't break existing tests.

### Complete Validation

To run a complete validation check (lint + TypeScript + tests):

```bash
yarn commit-tests
```

This runs the full validation suite that the pre-commit hook enforces.

## Updating the Backend Schema with Orval

The project uses [Orval](https://orval.dev/) to auto-generate API client code from an OpenAPI schema. This ensures the frontend client always matches the backend API.

### Fetching the Latest Schema

The backend schema is published in the API repository. Fetch the latest OpenAPI schema:

```bash
curl -o openapi.json https://raw.githubusercontent.com/GeorgeSheppard/api.georgesheppard.dev/master/generated/openapi/georgesheppard-spec.json
```

This downloads the latest schema from the GitHub repository and saves it to `openapi.json` in the project root.

### Generating API Hooks

Once you have the schema, generate the API client code:

```bash
yarn generate:api
```

This runs Orval with the configuration in `orval.config.ts` and generates:
- Location: `client/generated/hooks.ts`
- Client: React Query hooks
- HTTP Client: Axios
- Base URL: `https://api.georgesheppard.dev`

### Complete Schema Update Workflow

To update the backend schema and regenerate API code:

```bash
curl -o openapi.json https://raw.githubusercontent.com/GeorgeSheppard/api.georgesheppard.dev/master/generated/openapi/georgesheppard-spec.json && yarn generate:api
```

After updating the schema, review the generated code changes and run your tests to ensure compatibility:

```bash
yarn test
```

## Configuration Files

- `orval.config.ts` - Orval configuration for API code generation
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `.eslintrc.json` - ESLint configuration
