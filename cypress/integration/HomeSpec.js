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
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', `http://localhost:3001/api/v1/urls`, {
      fixture: 'getData.json'
      }).as('getData');

    cy.get('form')
      .get('input').eq(0)
        .should('have.attr', 'name')
        .and('eq', 'title')

    cy.get('form')
      .get('input').eq(1)
        .should('have.attr', 'name')
        .and('eq', 'urlToShorten')
    
    cy.get('form')
      .get('button')
        .contains('Shorten Please!')

  })

  it('When a user fills out the form, the information is reflected in the input fields', () => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', `http://localhost:3001/api/v1/urls`, {
      fixture: 'getData.json'
      }).as('getData');
    
    cy.get('form')
      .get('input').eq(0)
        .type('Test')
    
    cy.get('form')
      .get('input').eq(0)
        .should('have.value', 'Test')

    cy.get('form')
      .get('input').eq(1)
        .type('Test')
    
    cy.get('form')
      .get('input').eq(1)
        .should('have.value', 'Test')
  })

  it('When a user fills out and submits the form, the new shortened URL is rendered', () => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', `http://localhost:3001/api/v1/urls`, {
      fixture: 'getData.json'
      }).as('getData');
    
    cy.get('form')
    .get('input').eq(0)
      .type('Test 3')

    cy.get('form')
    .get('input').eq(1)
      .type('https://google.com')
    
    cy.get('form')
      .get('button')
      .click()
    
    cy.intercept('POST', `http://localhost:3001/api/v1/urls`).as('getPost')

    cy.intercept('GET', `http://localhost:3001/api/v1/urls`, {
      fixture: 'getDataAfterPost.json'
      }).as('getDataAfterPost');
  })

})