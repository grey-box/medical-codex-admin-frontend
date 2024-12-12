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

      cy.get('[data-testid="source-language-dropdown"]').click();
      cy.contains("li", "English").click();

      cy.get('[data-testid="search-input"]').type("Tylenol");

      cy.get('[data-testid="search-button"]').click();

      cy.wait("@searchSuccess");

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

    //   cy.get('[data-testid="source-language-dropdown"]').click();
    //   cy.contains("li", "English").click();

    //   cy.get('[data-testid="search-input"]').type("Tylenol");

    //   cy.get('[data-testid="search-button"]').click();

    //   cy.wait("@searchFailure");

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

      cy.get('[data-testid="source-language-dropdown"]').click();
      cy.contains("li", "English").click();

      cy.get('[data-testid="search-input"]').type("Tylenol");

      cy.get('[data-testid="search-button"]').click();

      cy.get('[data-testid="search-button"]')
        .contains("Loading...")
        .should("be.disabled");

      cy.wait("@delayedSearch");

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

      cy.get('[data-testid="source-language-dropdown"]').click();
      cy.contains("li", "English").click();
      cy.get('[data-testid="search-input"]').type("Tylenol");
      cy.get('[data-testid="search-button"]').click();

      cy.wait("@searchSuccess");

      cy.get('[data-testid="results-dropdown"]').click();
      cy.get('ul[role="listbox"]').within(() => {
        cy.contains("li", "Advil").should("exist");
        cy.contains("li", "Advil").click();
      });

      cy.get('[data-testid="results-dropdown"]').should("contain", "Advil");
    });
  });
});

describe("Translation Section - Last Resort Flow", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");

    cy.intercept("POST", "/fuzzymatching/", {
      statusCode: 200,
      body: { results: [{ matching_name: "Tylenol" }] },
    }).as("searchSuccess");

    cy.get('[data-testid="source-language-dropdown"]').click();
    cy.contains("li", "English").click();
    cy.get('[data-testid="search-input"]').type("Tylenol");
    cy.get('[data-testid="search-button"]').click();
    cy.wait("@searchSuccess");

    cy.get('[data-testid="results-dropdown"]').click();
    cy.contains("li", "Tylenol").click();
  });

  // it("should trigger last resort modal and handle confirmation", () => {
  //   cy.intercept("POST", "/translate/", {
  //     statusCode: 200,
  //     body: { translated_medicine: null },
  //   }).as("translateEmpty");

  //   cy.intercept("POST", "/last-resort/", {
  //     statusCode: 200,
  //     body: { translated_medicine: "Тиленол (AI)" },
  //   }).as("lastResort");

  //   cy.get('[data-testid="target-language-dropdown"]').click();
  //   cy.contains("li", "Ukrainian").click();

  //   cy.get('[data-testid="translate-button"]').click();

  //   cy.wait("@translateEmpty");

  //   cy.get('[data-testid="last-resort-modal"]').should("be.visible");

  //   cy.get('[data-testid="last-resort-modal-confirm"]', { timeout: 10000 })
  //     .should("exist")
  //     .click();

  //   cy.get('[data-testid="translate-button"]')
  //     .contains("Last Resort Loading...")
  //     .should("be.disabled");

  //   cy.wait("@lastResort");

  //   cy.get('[data-testid="output-translation"]').should(
  //     "have.value",
  //     "Тиленол (AI)",
  //   );
  // });

  it("should handle last resort modal and proceed with confirmation", () => {
    cy.intercept("POST", "/translate/", {
      statusCode: 200,
      body: { translated_medicine: null },
    }).as("translateEmpty");

    cy.intercept("POST", "/last-resort/", {
      statusCode: 200,
      body: { translated_medicine: "Тиленол (AI)" },
    }).as("lastResort");

    cy.get('[data-testid="target-language-dropdown"]').click();
    cy.contains("li", "Ukrainian").click();

    cy.get('[data-testid="translate-button"]').click();

    cy.wait("@translateEmpty");

    cy.get('[data-testid="last-resort-modal"]').should("be.visible");

    cy.get('[data-testid="last-resort-modal-okay"]')
      .should("exist")
      .click({ force: true });

    cy.get('[data-testid="last-resort-modal-confirm"]').should("exist");

    cy.get('[data-testid="last-resort-modal-confirm"]').click({ force: true });

    // cy.get('[data-testid="translate-button"]')
    //   .contains("Last Resort Loading...")
    //   .should("be.disabled");

    cy.wait("@lastResort");

    cy.get('[data-testid="output-translation"]').should(
      "have.value",
      "Тиленол (AI)",
    );
  });
});
