// Author: Matthew Quijano

// Notes:
// You need to ensure that your development server is running before running this test.

// Test case:
// 1. It should display the Navbar icon.

describe("Home Page", () => {
  it("should display the Navbar icon", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".navbar img").should("be.visible").and("have.attr", "alt", "Icon");
  });
});
