## Navbar

Author(s): Miles Murphy, Thayer Picart, Matthew Quijano, Herman Sahani

This component is a responsive navigation bar for the application. It includes links to the Home and About pages, a logo, and social media icons. The navigation bar's visibility can be toggled on smaller screens.

The `Navbar` component is used in the `BaseLayout` component to provide consistent navigation across all pages.

Key functionalities:

- Uses the `useState` hook to manage the state of the navigation bar's visibility on smaller screens.
- Includes a `toggleMenu` function that toggles the visibility of the navigation bar when the menu button is clicked.
- Uses the `SocialMediaIcons` component to display social media icons.
- Uses the `next/link` and `next/image` modules for navigation and displaying the logo, respectively.
- Uses the `react-icons/ai` module for the menu and close icons.
