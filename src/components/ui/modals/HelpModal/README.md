## HelpModal

Author(s): François Pelletier, Matthew Quijano

This component displays a modal with help information about the application. The modal can be opened and closed by clicking the "Help" button and the close button in the modal, respectively.

Key functionalities:

- Uses the `useState` hook to manage the state of the modal's visibility.
- Includes `openModal` and `closeModal` functions that set the modal's visibility to true and false, respectively.
- Displays a "Help" button that calls the `openModal` function when clicked.
- Displays a modal with help information when the `isOpen` state is true. The modal includes a close button that calls the `closeModal` function when clicked.
