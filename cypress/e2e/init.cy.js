describe("Cypress test", () => {
  it("is working", () => {
    expect(true).to.equal(true);
  });
  it("visits the app test", () => {
    cy.visit("http://localhost:3000");
  });
});
