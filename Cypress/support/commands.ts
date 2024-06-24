// prototype of abstraction layer to create a dynamic login or navigation function.
Cypress.Commands.add('navigate',()=>{
    cy.visit("https://www.latlong.net/");
})
  