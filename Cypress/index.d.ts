/// <reference types="cypress" />

//typescript definition for using custom commands with cypress
declare namespace Cypress {
  interface Chainable<Subject = any> {
    navigate(): Chainable<any>;
  }
}
