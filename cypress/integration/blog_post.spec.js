/// <reference types="cypress" />

describe('Blog Spot', () => {
  beforeEach(() => {
    //escape page error "Uncaught ReferenceError: slidesPerPage is not define"
    cy.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
    cy.visit('https://template1.booost.bg/feello/index');
  });

  it.only('profile badge should have size 80x80', () => {
    cy.get('[data-cy=profile-badge]').invoke('outerWidth').should('be.eq', 80);
  });

  // cant get this to work please help
  it.only('should show menu on hover', () => {
    cy.get('[data-cy="home-btn"]').trigger('mouseover');
    cy.get('[data-cy="home-btn-menu"]')
      .should('be.visible')
      .find('li')
      .should('have.length', 4);
  });

  it('should open the search field when clicking on search btn', () => {
    cy.get('.search').click();
    cy.get('input[type="search"]').should('be.visible');
  });

  it('current carousel card should have tittle', () => {
    cy.scrollTo(0, 1000);
    cy.get('.row > .btn-next > svg').click().wait(1000).click();
    cy.get('.slick-current').contains(
      'Healthy eating is the key to staying healthy'
    );
  });

  it('carousel should loop around', () => {
    cy.scrollTo(0, 1000);
    cy.get('.row > .btn-next > svg')
      .wait(1000)
      .click()
      .wait(1000)
      .click()
      .wait(1000)
      .click()
      .wait(1000)
      .click();

    //check if page is 1
    cy.get('.slick-dots > .slick-active').contains(1);
  });
});
