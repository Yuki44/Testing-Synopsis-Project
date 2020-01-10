
describe('Home Page', () => {

  beforeEach(() => {
    cy.pause();

    cy.fixture('courses.json').as("coursesJSON");

    cy.server(); //Used to intercept API calls in the browser

    cy.route('/api/courses', "@coursesJSON").as("courses"); //Deterministic, loads the same everytime

    cy.visit('/');

  });

  it('should display a list of courses', () => {

    cy.contains("All Cooking Courses");

    cy.wait('@courses');

    cy.get("mat-card").should("have.length", 3);

  });

  it('should display the advanced courses', () => {

    cy.get('.mat-tab-label').should("have.length", 3);

    cy.get('.mat-tab-label').last().click();

    cy.get('.mat-tab-body-active .mat-card-title').its('length').should('be.gt', 1);

    cy.get('.mat-tab-body-active .mat-card-title').first()
      .should('contain', "Cinnamon Rolls");

  });


});
