describe('HomePage', () => {
  beforeEach(() => {
    cy.mount(<HomePage />);
  });

  it('should render the hero section with title', () => {
    cy.get('.hero').should('be.visible');
    cy.contains('Personal Digital Assistants').should('be.visible');
  });

  it('should render Alexa profile card correctly', () => {
    cy.get('.column').first().within(() => {
      cy.contains('Alexa').should('be.visible');
      cy.contains('@alexa99').should('be.visible');
      cy.contains('Alexa was created by Amazon and helps you buy things.').should('be.visible');
      cy.get('img[alt="pda logo"]').should('be.visible').and('have.attr', 'src', '/images/alexa.png');
    });
  });

  it('should render Cortana profile card correctly', () => {
    cy.get('.column').eq(1).within(() => {
      cy.contains('Cortana').should('be.visible');
      cy.contains('@cortana32').should('be.visible');
      cy.contains('Cortana was made by Microsoft. Who knows what it does?').should('be.visible');
      cy.get('img[alt="pda logo"]').should('be.visible').and('have.attr', 'src', '/images/cortana.png');
    });
  });

  it('should render Siri profile card correctly', () => {
    cy.get('.column').last().within(() => {
      cy.contains('Siri').should('be.visible');
      cy.contains('@siri01').should('be.visible');
      cy.contains('Siri was made by Apple and is being phased out').should('be.visible');
      cy.get('img[alt="pda logo"]').should('be.visible').and('have.attr', 'src', '/images/siri.png');
    });
  });

  it('should have the correct layout', () => {
    cy.get('.columns').should('exist');
    cy.get('.column.is-4').should('have.length', 3);
  });
});
