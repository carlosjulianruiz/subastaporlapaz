describe("Subasta por la Paz landing", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should load the homepage and show title", () => {
    cy.contains("Subasta por la Paz").should("exist");
  });

  it("should have navigation links", () => {
    cy.contains("Fechas").should("have.attr", "href", "#fechas");
    cy.contains("Inscripciones").should("have.attr", "href", "/inscripciones");
    cy.contains("Videos").should("have.attr", "href", "#videos");
    cy.contains("Contáctanos").should("have.attr", "href", "/contactus");
  });

  it("should have inscription button", () => {
    cy.contains("Ver Inscripciones").should("exist");
  });
});