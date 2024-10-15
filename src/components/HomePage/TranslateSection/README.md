## TranslateSection

Author(s): François Pelletier, Thayer Picart, Matthew Quijano, Herman Sahani

This component provides an interface for users to translate a selected drug name into a target language. It includes a dropdown for selecting the target language, a button to initiate the translation, and an input field to display the translated drug name.

Key functionalities:

- Receives several props including `selectedMedicine`, `targetLanguage`, `setTargetLanguage`, `outputTranslation`, `handleTranslate`, `languages`, `translateError`, `setTranslateError`, and `loading`.
- Validates the target language before calling the `handleTranslate` function. If the target language is not selected, it sets an error message.
- Renders a `Dropdown` component for selecting the target language. The dropdown is disabled if no medicine is selected.
- Renders a `SectionError` component that displays the `translateError` message if it exists.
- Disables the translate button and changes its text to "Loading..." while `loading` is true.
- Displays the translated drug name in a read-only input field.
