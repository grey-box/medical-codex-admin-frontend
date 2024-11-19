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

describe("Translation Section - Last Resort Flow", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");

    // Mock successful API response for search
    cy.intercept("POST", "/fuzzymatching/", {
      statusCode: 200,
      body: { results: [{ matching_name: "Tylenol" }] },
    }).as("searchSuccess");

    // Perform search and select a medicine
    cy.get('[data-testid="source-language-dropdown"]').click();
    cy.contains("li", "English").click();
    cy.get('[data-testid="search-input"]').type("Tylenol");
    cy.get('[data-testid="search-button"]').click();
    cy.wait("@searchSuccess");

    cy.get('[data-testid="results-dropdown"]').click();
    cy.contains("li", "Tylenol").click();
  });

  // it("should trigger last resort modal and handle confirmation", () => {
  //   // Mock initial translation failure
  //   cy.intercept("POST", "/translate/", {
  //     statusCode: 200,
  //     body: { translated_medicine: null },
  //   }).as("translateEmpty");

  //   // Mock last resort translation success
  //   cy.intercept("POST", "/last-resort/", {
  //     statusCode: 200,
  //     body: { translated_medicine: "Тиленол (AI)" },
  //   }).as("lastResort");

  //   // Select target language
  //   cy.get('[data-testid="target-language-dropdown"]').click();
  //   cy.contains("li", "Ukrainian").click();

  //   // Click the Translate button
  //   cy.get('[data-testid="translate-button"]').click();

  //   // Wait for the initial translation to return empty
  //   cy.wait("@translateEmpty");

  //   // Verify the last resort modal is displayed
  //   cy.get('[data-testid="last-resort-modal"]').should("be.visible");

  //   // Wait for the confirm button to render
  //   cy.get('[data-testid="last-resort-modal-confirm"]', { timeout: 10000 })
  //     .should("exist")
  //     .click();

  //   // Verify 'Last Resort Loading...' appears on the button
  //   cy.get('[data-testid="translate-button"]')
  //     .contains("Last Resort Loading...")
  //     .should("be.disabled");

  //   // Wait for the last resort translation response
  //   cy.wait("@lastResort");

  //   // Verify last resort translation result
  //   cy.get('[data-testid="output-translation"]').should(
  //     "have.value",
  //     "Тиленол (AI)",
  //   );
  // });

  it("should handle last resort modal and proceed with confirmation", () => {
    // Mock initial translation failure
    cy.intercept("POST", "/translate/", {
      statusCode: 200,
      body: { translated_medicine: null },
    }).as("translateEmpty");

    // Mock last resort translation success
    cy.intercept("POST", "/last-resort/", {
      statusCode: 200,
      body: { translated_medicine: "Тиленол (AI)" },
    }).as("lastResort");

    // Select target language
    cy.get('[data-testid="target-language-dropdown"]').click();
    cy.contains("li", "Ukrainian").click();

    // Click the Translate button
    cy.get('[data-testid="translate-button"]').click();

    // Wait for the initial translation to return empty
    cy.wait("@translateEmpty");

    // Verify the modal is visible
    cy.get('[data-testid="last-resort-modal"]').should("be.visible");

    // Click the "Okay" button to proceed to the second modal screen
    cy.get('[data-testid="last-resort-modal-okay"]')
      .should("exist")
      .click({ force: true });

    // Verify the modal content changes to confirmation view
    cy.get('[data-testid="last-resort-modal-confirm"]').should("exist");

    // Click the "Yes" button to confirm last resort translation
    cy.get('[data-testid="last-resort-modal-confirm"]').click({ force: true });

    // // Verify 'Last Resort Loading...' appears on the button
    // cy.get('[data-testid="translate-button"]')
    //   .contains("Last Resort Loading...")
    //   .should("be.disabled");

    // Wait for the last resort translation response
    cy.wait("@lastResort");

    // Verify last resort translation result
    cy.get('[data-testid="output-translation"]').should(
      "have.value",
      "Тиленол (AI)",
    );
  });
});
