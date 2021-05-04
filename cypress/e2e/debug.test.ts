describe("Debug page tests", () => {
  beforeEach(() => {
    cy.visit("/debug", { timeout: 5000 }).get("main").injectAxe()
  })

  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y()
  })
})
