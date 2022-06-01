describe("My First Test", () => {
  it("Visits Google and searches Hello World!", () => {
    cy.visit("http://www.google.com");
    cy.get(`input[name="q"]`).click().type("Hello World!{enter}");
  });
});
