describe('template spec', () => {
  describe('Medication Translation Page', () => {
    beforeEach(() => {
      // Visit the homepage
      cy.visit('http://localhost:3000/');
  
      // Check if the title is displayed
      cy.contains('Medication Translation').should('be.visible');

      // Open the source language dropdown
      cy.get('[data-cy=source-language-dropdown]').click();

      // Wait for the dropdown options to be visible
      cy.get('[data-cy=source-language-option-English]').should('be.visible');

      // Select English
      cy.get('[data-cy=source-language-option-English]').click({ force: true });

      // Verify the selected language
      cy.get('[data-cy=source-language-dropdown]').should('contain', 'English');

      // Open the target language dropdown
      cy.get('[data-cy=target-language-dropdown]').click();

      // Wait for the dropdown options to be visible
      cy.get('[data-cy=target-language-option-Russian]').should('be.visible');

      // Select Russian
      cy.get('[data-cy=target-language-option-Russian]').click({ force: true });

      // Verify the selected language
      cy.get('[data-cy=target-language-dropdown]').should('contain', 'Russian');
  
      // Enter a query in the input field
      cy.get('[data-cy=drug-name-input]').type('Aspirin');

      // Verify the input value
      cy.get('[data-cy=drug-name-input]').should('have.value', 'Aspirin');

      // Click the search button
      cy.get('[data-cy=search-button]').click();
  
      // Verify that results are displayed (assuming the API is mocked or returns results)
      cy.contains('Matching Results:').should('be.visible');

      // Click on a result to fetch translation (assuming results are already displayed)
      cy.contains('aspirin').click({ force: true });
    });
  
    it('', () => {
    });
  });
})