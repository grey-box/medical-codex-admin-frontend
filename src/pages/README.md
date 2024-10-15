## Pages Directory

Author(s): Miles Murphy, Thayer Picart, Matthew Quijano, Herman Sahani

The `pages` directory is a special directory in Next.js. Each JavaScript or TypeScript file in this directory becomes a route in the application.

Key functionalities:

- The file `pages/index.tsx` maps to the `/` route.
- Other files in the `pages` directory map to their filename. For example, `pages/about.tsx` maps to the `/about` route.
- Dynamic routes can be created using file names with square brackets. For example, `pages/posts/[id].tsx` maps to the `/posts/:id` route.
- The `_app.tsx` file is used to initialize pages. It can be used to keep state when navigating between pages, handle errors, and inject additional data into pages.
- The `_document.tsx` file is used to augment the application's `<html>` and `<body>` tags.
- The `api` directory within `pages` is used for creating API routes.

## \_app.tsx

Author(s): Miles Murphy, Thayer Picart, Matthew Quijano

This is the main application component in Next.js. It's used to initialize pages. It can be used to keep state when navigating between pages, handle errors, and inject additional data into pages.

Key functionalities:

- Imports the global styles from `globals.css`.
- Wraps all pages with the `BaseLayout` component, which includes the common layout across all pages.
- Receives the `Component` and `pageProps` props from Next.js. `Component` is the active page (so any of your `pages/` files), and `pageProps` are its props.

## HomePage

Author(s): Miles Murphy, Thayer Picart, Matthew Quijano, Herman Sahani

This component serves as the main page of the application. It includes a search section for users to search for a drug name, a results section to display the search results, and a translate section to translate the selected drug name into a target language.

Key functionalities:

- Uses several state variables to manage the input search, output translation, list of medicines, selected medicine, target language, source language, search error, translate error, and loading states.
- Defines `handleSearchAction` and `handleTranslateAction` functions that call the `handleSearch` and `handleTranslate` utility functions respectively. These functions are passed as props to the `SearchSection` and `TranslateSection` components.
- Renders the `SearchSection`, `ResultsSection`, and `TranslateSection` components, passing the necessary state variables and functions as props.
- Renders a `HelpModal` component for user assistance.
- Uses the `next/head` component to set the page's title and meta description.
