## Dropdown

Author(s): François Pelletier, Matthew Quijano

This component is a dropdown menu that allows users to select an option from a list. The selected option is managed by the `useState` hook and is updated when an option is selected. The `onChange` function is called with the selected option as an argument.

Key functionalities:

- Uses the `useState` hook to manage the state of the selected option.
- Includes a `handleChange` function that updates the selected option's state and calls the `onChange` function when an option is selected.
- Displays a list of options passed via the `options` prop. Each option is a `MenuItem` component that calls the `handleChange` function when clicked.
- Can be disabled by passing `true` to the `disabled` prop.
