## useLogin

Author(s): François Pelletier

This custom hook manages the login state of a user. It includes functions to handle login and logout actions.

Key functionalities:

- Uses the `useState` hook to manage the state of the username, password, and login status.
- Includes a `handleLogin` function that checks if the provided username and password match the credentials ("admin" for both). If they match, the user is logged in and the username, password, and login status are updated. If they don't match, an alert is displayed.
- Includes a `handleLogout` function that logs out the user and resets the username, password, and login status.
