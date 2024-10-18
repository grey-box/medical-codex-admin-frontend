## AboutPage

Author(s): François Pelletier, Thayer Picart

This component displays an "About Us" page, including a header image and a section introducing the team members.

Key functionalities:

- Uses the `teamMembers` data from `teamMembers.json` to generate a card for each team member. Each card includes the member's image, name, title, and a link to their LinkedIn profile.
- The LinkedIn icon link is only rendered if a `link` is provided for the member in the `teamMembers.json` data.
- Uses the `next/head` component to set the page's title and meta description.
- Uses the `next/link` component to create the LinkedIn profile links.
- Uses the `react-icons/fa` library to display the LinkedIn icon.
