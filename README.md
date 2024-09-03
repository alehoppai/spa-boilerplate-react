# Quick starter for react-firebase apps

This project is a boilerplate for quickly setting up a React application with Firebase integration. It uses modern tools and libraries to provide a robust starting point for single-page applications.

## Features

- React 18
- TypeScript
- Vite for fast development and building
- TanStack Router for routing
- TanStack Query for data fetching
- Firebase integration
- Flowbite React for UI components
- React Hook Form for form handling
- ESLint for code linting
- Tailwind CSS for styling

## Project Structure

- `/app`: Contains the global application code. Configs, generated code, types, contexts everything that will be used globally.
- `/routes`: Defines the application routes
- `/public`: Output directory for the production build (for Firebase)
- `/components`: Reusable UI components
- `/utils`: Utility functions and helpers
- `/hooks`: Custom React hooks


## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   pnpm install
   ```
3. Start the development server:
   ```
   pnpm run dev
   ```
4. Initialize firebase

## Available Scripts

- `pnpm dev`: Start the development server
- `pnpm build`: Build the project for production
- `pnpm lint`: Run ESLint
- `pnpm preview`: Preview the production build

## Configuration

- Vite configuration is in `vite.config.ts`
- TypeScript configuration is split between `tsconfig.json`, `tsconfig.app.json`, and `tsconfig.node.json`
- ESLint configuration is in `eslint.config.js`

## Routing

This project uses TanStack Router. Routes are defined in the `/routes` directory and automatically generated in `app/routeTree.gen.ts`.

## Styling

Tailwind CSS is set up for styling. The compiled CSS is output to `public/assets/index-[hash].css`.

## Building for Production

Run `npm run build` to create a production build in the `public` directory.

## License

This project is licensed under the ISC License.

## Author

Aleh Belski <aleh_belski@outlook.com>
