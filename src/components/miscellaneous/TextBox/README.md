## TextBox

Author(s): François Pelletier

This component is a dual-purpose text box for input and output. It includes a dropdown list of languages, a button to show the list of languages, and a text area for input or output. The behavior of the text area depends on the `style` prop.

Key functionalities:

- Uses the `setInputText` function to update the input text when its value changes.
- Uses the `setShowLists` function to show the list of languages when the list button is clicked.
- Displays a dropdown list of languages passed via the `languagesList` prop.
- Displays a text area for input or output. If the `style` prop is "output", the text area is disabled and displays the `outputvalue` prop. If the `style` prop is "input", the text area is enabled and updates the input text when its value changes.