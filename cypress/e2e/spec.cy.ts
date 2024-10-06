// Author: Cypress [https://docs.cypress.io/guides/getting-started/writing-your-first-test]

// Notes:
// This test does not interact with any functionality within the application and is only used to confirm that Cypress is working correctly.
// To run tests, look at package.json. We have several scripts, but you want to run either:
// 'npm run cypress:open' to open the Cypress Test Runner and run your tests interactively.
// 'npm run cypress:headless' to run your tests in the command line.
// The test suite opened with 'npm run cypress:open' will re-run tests as you make changes to your code.

// Test case:
// 1. It should visit the Cypress example page.

describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});
