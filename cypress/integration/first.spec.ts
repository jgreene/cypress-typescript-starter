describe('google search', () => {
  it('should work', () => {
    cy.visit('https://www.children.org');
    //cy.get('[name="asdfasdfdasfda"]').type('Hello world{enter}')
    cy.get('.header-cta-buttons:visible').find('li a').first().click();
    cy.url().should("be.equal", 'https://www.children.org/make-a-difference/donate');
  });
});