## Lists

Author(s): François Pelletier

This component displays a list of languages. It allows users to select a language from the list or search for a specific language. It also includes a back button that calls the `setShowLists` function with `null` as an argument.

Key functionalities:

- Uses the `useState` hook to manage the state of the search input.
- Includes a `handleClick` function that calls the `setShowLists` function with `null` as an argument.
- Includes a `handleChange` function that updates the search input's state when its value changes.
- Displays a list of languages passed via the `languagesList` prop.
- Each language in the list is a clickable `li` element that calls the `handleClick` function when clicked.
