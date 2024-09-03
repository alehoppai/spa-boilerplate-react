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

- `/app`: Contains the main application code
- `/routes`: Defines the application routes
- `/public`: Output directory for the production build

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview the production build

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
