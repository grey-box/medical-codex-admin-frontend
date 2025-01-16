## ResultsSection

Author(s): François Pelletier, Thayer Picart, Matthew Quijano, Herman Sahani

This component displays a dropdown menu of medicines. The dropdown menu is disabled if there are no medicines.

Key functionalities:

- Receives an array of medicines, each with a `matching_name` property, and a `setSelectedMedicine` function as props.
- Maps over the `medicines` array to create the dropdown options.
- Calls the `setSelectedMedicine` function when an option is selected in the dropdown.
- Disables the dropdown if the `medicines` array is empty.
