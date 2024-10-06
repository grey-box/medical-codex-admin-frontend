// Author: Matthew Quijano

// Notes:
// You need to ensure that your development server is running before running this test.

// Test case:
// 1. It should display the Greybox logo.

describe("Home Page", () => {
  it("should display the Greybox logo", () => {
    cy.visit("http://localhost:3000/");
    cy.get('img[alt="Greybox Logo"]').should("be.visible");
  });
});
