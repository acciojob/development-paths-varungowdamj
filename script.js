//your JS code here. If required.
describe('Development Paths Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Change URL if hosted elsewhere
  });

  it('should display the correct heading', () => {
    cy.get('h1').should('have.text', 'Welcome to Accio Jobs!');
  });

  it('should display the image with height 300px', () => {
    cy.get('img').should('have.css', 'height', '300px');
  });

  it('should display the correct paragraph', () => {
    cy.get('p').should('have.text', '5 software program developer profession paths');
  });

  it('should display an unordered list with 5 items', () => {
    cy.get('ul').find('li').should('have.length', 5);
    const items = [
      'Cloud development',
      'Desktop development',
      'Video Sport development',
      'Mobile development',
      'Web development'
    ];
    cy.get('ul li').each((el, index) => {
      cy.wrap(el).should('have.text', items[index]);
    });
  });
});