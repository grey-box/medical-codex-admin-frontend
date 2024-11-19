describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should display the Greybox logo", () => {
    cy.get('img[alt="Greybox Logo"]').should("be.visible");
  });

  describe("Search Section", () => {
    it("should display results on successful API response", () => {
      cy.intercept("POST", "/fuzzymatching/", {
        statusCode: 200,
        body: { results: [{ matching_name: "Tylenol" }] },
      }).as("searchSuccess");

      // Select "English" from the dropdown
      cy.get('[data-testid="source-language-dropdown"]').click();
      cy.contains("li", "English").click();

      // Type in the search input
      cy.get('[data-testid="search-input"]').type("Tylenol");

      // Click the search button
      cy.get('[data-testid="search-button"]').click();

      // Wait for the API response
      cy.wait("@searchSuccess");

      // Verify results section displays the medicine
      cy.get('[data-testid="results-section"]').should("exist");
      cy.get('[data-testid="results-dropdown"]').click();
      cy.get('ul[role="listbox"]').within(() => {
        cy.contains("li", "Tylenol").should("exist");
        cy.contains("li", "Tylenol").click();
      });
      cy.get('[data-testid="results-dropdown"]').should("contain", "Tylenol");
    });

    // it("should display an error on API failure", () => {
    //   cy.intercept("POST", "/fuzzymatching/", { statusCode: 500 }).as(
    //     "searchFailure",
    //   );

    //   // Select "English" from the dropdown
    //   cy.get('[data-testid="source-language-dropdown"]').click();
    //   cy.contains("li", "English").click();

    //   // Type in the search input
    //   cy.get('[data-testid="search-input"]').type("Tylenol");

    //   // Click the search button
    //   cy.get('[data-testid="search-button"]').click();

    //   // Wait for the API failure response
    //   cy.wait("@searchFailure");

    //   // Verify error message is displayed
    //   cy.get('[data-testid="section-error"]').should(
    //     "contain",
    //     "Unable to connect to the service. Please try again later.",
    //   );
    // });

    it("should display 'Loading...' and disable the button during API call", () => {
      cy.intercept("POST", "/fuzzymatching/", {
        delay: 2000,
        statusCode: 200,
        body: { results: [{ matching_name: "Tylenol" }] },
      }).as("delayedSearch");

      // Open the dropdown and select "English"
      cy.get('[data-testid="source-language-dropdown"]').click();
      cy.contains("li", "English").click();

      // Type in the search input
      cy.get('[data-testid="search-input"]').type("Tylenol");

      // Click the search button
      cy.get('[data-testid="search-button"]').click();

      // Assert the button shows "Loading..." and is disabled
      cy.get('[data-testid="search-button"]')
        .contains("Loading...")
        .should("be.disabled");

      // Wait for the delayed API response
      cy.wait("@delayedSearch");

      // Assert the button is no longer disabled
      cy.get('[data-testid="search-button"]').should("not.be.disabled");
    });
  });

  describe("Results Section", () => {
    it("should allow selecting a result from the dropdown", () => {
      cy.intercept("POST", "/fuzzymatching/", {
        statusCode: 200,
        body: {
          results: [{ matching_name: "Tylenol" }, { matching_name: "Advil" }],
        },
      }).as("searchSuccess");

      // Perform search
      cy.get('[data-testid="source-language-dropdown"]').click();
      cy.contains("li", "English").click();
      cy.get('[data-testid="search-input"]').type("Tylenol");
      cy.get('[data-testid="search-button"]').click();

      // Wait for the API response
      cy.wait("@searchSuccess");

      // Open the results dropdown and select "Advil"
      cy.get('[data-testid="results-dropdown"]').click();
      cy.get('ul[role="listbox"]').within(() => {
        cy.contains("li", "Advil").should("exist");
        cy.contains("li", "Advil").click();
      });

      // Verify "Advil" is now the selected value
      cy.get('[data-testid="results-dropdown"]').should("contain", "Advil");
    });
  });
});
