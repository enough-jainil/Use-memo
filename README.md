# Use-memo

This project demonstrates the use of React's `useMemo` hook in a Vite-powered React TypeScript application.

## Table of Contents

1. [Clone the Repository](#step-1-clone-the-repository)
2. [Install Dependencies](#step-2-install-dependencies)
3. [Review Project Structure](#step-3-review-the-project-structure)
4. [Configure Environment](#step-4-configure-environment-if-necessary)
5. [Run Development Server](#step-5-run-the-development-server)
6. [Access the Application](#step-6-access-the-application)
7. [Test the Application](#step-7-test-the-application)
8. [Explore the Code](#step-8-explore-the-code)
9. [Build for Production](#step-9-building-for-production)
10. [Preview Production Build](#step-10-preview-production-build)
11. [Additional Scripts](#additional-scripts)

## Step 1: Clone the Repository

First, clone the repository from GitHub:

```bash
git clone https://github.com/enough-jainil/Use-memo.git
cd Use-memo
```

## Step 2: Install Dependencies

Install the necessary dependencies using npm:

```bash
npm install
```

## Step 3: Review the Project Structure

Familiarize yourself with the project structure. Key files include:

- `src/main.tsx`: Entry point of the application
- `src/App.tsx`: Main component
- `src/components/ParentComponent.tsx`: Parent component with state management
- `src/components/ChildComponent.tsx`: Child component with Todo list functionality
- `vite.config.ts`: Vite configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration

## Step 4: Configure Environment (if necessary)

This project uses Vite, so no additional environment setup is required. However, if you need to add environment variables, create a `.env` file in the root directory.

## Step 5: Run the Development Server

Start the development server:

```bash
npm run dev
```

This will start the Vite development server, typically on `http://localhost:5173`.

## Step 6: Access the Application

Open your web browser and navigate to `http://localhost:5173` (or the URL provided in the terminal).

## Step 7: Test the Application

1. You'll see the Parent Component with a counter and a Child Component (Todo list).
2. Test the increment functionality in the Parent Component.
3. Add and remove todos in the Child Component.
4. Observe that the Child Component is memoized and doesn't re-render when the Parent Component's state changes.

## Step 8: Explore the Code

To understand the application better:

1. Check the main App component in `src/App.tsx`
2. Examine the Parent Component in `src/components/ParentComponent.tsx`
3. Look at the Child Component in `src/components/ChildComponent.tsx`
4. Review the Tailwind CSS configuration in `tailwind.config.js`

## Step 9: Building for Production

When you're ready to build for production:

```bash
npm run build
```

This will create a `dist` folder with the production-ready files.

## Step 10: Preview Production Build

To preview the production build:

```bash
npm run preview
```

This will serve the production build locally for testing.

## Additional Scripts

- `npm run lint`: Run ESLint to check for code quality issues

By following these steps, you should be able to set up, run, and explore the Use-memo application successfully. The app demonstrates basic state management, component composition, and the use of React hooks like useState and useMemo.
