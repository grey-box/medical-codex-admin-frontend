## AdminPage

Author(s): Author(s): François Pelletier, Thayer Picart

This component provides an admin login portal. It includes a login form and a dashboard that is displayed once the user is logged in.

Key functionalities:

- Uses the `useLogin` hook to manage the login state.
- Renders the `LoginForm` component when the user is not logged in. The `handleLogin` function from `useLogin` is passed as a prop to handle form submission.
- Renders the `Dashboard` component when the user is logged in. The `username`, `password`, and `handleLogout` function from `useLogin` are passed as props.
- Uses the `next/head` component to set the page's title and meta description.
