# ECLYPSE Project Documentation

This document provides a brief overview of the ECLYPSE project codebase.

## Project Structure

The project is a modern web application built with React, TypeScript, Vite, and Tailwind CSS, utilizing Shadcn UI components.

### Key Files and Directories:

*   **`package.json`**:
    *   Defines project metadata, scripts, and dependencies.
    *   Scripts include `dev` (runs Vite dev server and JSON server concurrently), `build`, `lint`, and `preview`.
    *   Key dependencies include React, React Router, TanStack Query for data fetching, Shadcn UI components and their Radix UI primitives, Tailwind CSS for styling, and Vite as the build tool.
    *   Development dependencies include ESLint for linting, TypeScript, and `json-server` for a mock backend.

*   **`index.html`**:
    *   The main HTML entry point for the application.
    *   Contains a `div` with `id="root"` where the React application is mounted.
    *   Includes basic meta tags for SEO and social sharing.
    *   Loads the main JavaScript module (`/src/main.tsx`).

*   **`src/main.tsx`**:
    *   The entry point for the React application.
    *   Uses `createRoot` from `react-dom/client` to render the main `App` component into the `root` DOM element.
    *   Imports global CSS (`./index.css`).

*   **`src/App.tsx`**:
    *   The root component of the application.
    *   Sets up global providers:
        *   `QueryClientProvider` for TanStack Query (data fetching and caching).
        *   `TooltipProvider` for Shadcn UI tooltips.
        *   `Toaster` (from `@/components/ui/toaster`) and `Sonner` (from `@/components/ui/sonner`) for notifications.
    *   Configures client-side routing using `BrowserRouter`, `Routes`, and `Route` from `react-router-dom`.
    *   Defines routes for different pages: `/` (Index), `/about`, `/waitlist`, `/cart`, `/checkout`, and a catch-all `*` route for `NotFound`.

### Core Technologies:

*   **React**: JavaScript library for building user interfaces.
*   **TypeScript**: Superset of JavaScript that adds static typing.
*   **Vite**: Fast build tool and development server.
*   **Tailwind CSS**: Utility-first CSS framework.
*   **Shadcn UI**: Re-usable UI components built with Radix UI and Tailwind CSS.
*   **React Router**: For client-side navigation.
*   **TanStack Query**: For server-state management (data fetching, caching, synchronization).
*   **JSON Server**: Used as a mock backend during development.

This setup provides a robust foundation for developing a modern, performant, and maintainable web application.
