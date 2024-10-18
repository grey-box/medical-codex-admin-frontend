## FavoriteList

Author(s): François Pelletier

This component manages a list of favorite items. It allows users to add new items to the list, remove individual items, and clear the entire list. It also displays an error message if an attempt is made to add an item that's already in the list or if the input is empty.

Key functionalities:

- Uses the `useState` and `useEffect` hooks to manage the state of the new item, error message, and whether the list is empty.
- Includes a form for adding new items to the list. The form includes an input field and a submit button.
- Includes a `handleNewItemChange` function that updates the new item's state when the input field's value changes.
- Includes a `handleNewItemSubmit` function that adds the new item to the list when the form is submitted.
- Includes a `handleItemRemove` function that removes an item from the list.
- Includes a `handleClearList` function that clears the entire list.
- Displays the list of favorite items, the number of items, and any error messages.
