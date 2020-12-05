/// <reference types="Cypress" />

describe("Index page tests", () => {
  beforeEach(() => {
    cy.visit("/", { timeout: 3000 }).get("main").injectAxe()
  })

  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y()
  })
})