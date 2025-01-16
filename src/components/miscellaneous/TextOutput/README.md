## TextOutput

Author(s): François Pelletier

This component is a text box for output. It includes a dropdown list of languages, a button to show the list of languages, and a text area for output. The behavior of the text area depends on the `style` prop.

Key functionalities:

- Uses the `setInputText` function to update the input text when its value changes.
- Uses the `setShowLists` function to show the list of languages when the list button is clicked.
- Displays a dropdown list of languages passed via the `selectedLanguage` prop.
- Displays a text area for output. If the `style` prop is "output", the text area is disabled and displays the `outputvalue` prop. If the `style` prop is "input", the text area is enabled and updates the input text when its value changes.
