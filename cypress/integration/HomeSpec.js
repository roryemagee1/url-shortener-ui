describe("Home Page Tests", () => {

  it('When a user visits the page, they can view the page title and the existing shortened URLs', () => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', `http://localhost:3001/api/v1/urls`, {
      fixture: 'getData.json'
      }).as('getData');

    cy.get('h1')
      .contains('URL Shortener')

    cy.get('.container')
      .children()
      .should('have.length', 3);

    cy.get('.container')
      .get('.url').eq(0)
      .get('a')
        .should('have.attr', 'href')
        .and('eq', 'http://localhost:3001/useshorturl/1');
      
    cy.get('.container')
      .get('.url').eq(1)
      .get('a')
        .should('have.attr', 'href')
        .and('eq', 'http://localhost:3001/useshorturl/1');
    
    cy.get('.container')
      .get('.url').eq(2)
      .get('a')
        .should('have.attr', 'href')
        .and('eq', 'http://localhost:3001/useshorturl/1');

  })

  it('When a user visits the page, they can view the Form with the proper inputs', () => {

  })

  it('When a user fills out the form, the information is reflected in the input fields', () => {

  })

})