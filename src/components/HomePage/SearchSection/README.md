## SearchSection

Author(s): François Pelletier, Thayer Picart, Matthew Quijano, Herman Sahani

This component provides a search interface for users to search for a drug name. It includes a dropdown for selecting the source language, an input field for entering the drug name, and a search button.

Key functionalities:

- Receives several props including `inputSearch`, `setInputSearch`, `sourceLanguage`, `setSourceLanguage`, `handleSearch`, `languages`, `setSearchError`, `searchError`, and `loading`.
- Validates the input and source language before calling the `handleSearch` function. If either field is empty, it sets an error message.
- Renders a `Dropdown` component for selecting the source language and an input field for entering the drug name. The values of these fields are managed by their respective state variables.
- Renders a `SectionError` component that displays the `searchError` message if it exists.
- Disables the search button and changes its text to "Loading..." while `loading` is true.
