describe('SauceDemo Broken Checkout Test', () => {
  it('runs checkout process poorly', () => {
    cy.visit('https://www.saucedemo.com');
    cy.wait(1000);

    cy.get('input').first().type('standard_user');
    cy.get('input').eq(1).type('secret_sauce');
    cy.get('input[type="submit"]').click();

    cy.wait(3000);
    cy.get('.btn').first().click();

    cy.get('a.shopping_cart_link').click();
    cy.get('#checkout').click();

    cy.get('#first-name').type('Test');
    cy.get('#last-name').type('User');
    cy.get('#postal-code').type('00000');
    cy.get('.submit-button').click();

    cy.wait(2000);
    cy.get('.btn_action').click();

    cy.contains('Thank you').should('exist');
  });
});

describe('Book Room - Cypress (Bad)', () => {
  it('books room with poor practices', () => {
    cy.request('GET', 'https://automationintesting.online/booking').then((res) => {
      cy.wait(2000);
    });

    cy.request('POST', 'https://automationintesting.online/booking', {}
      ).then((bookRes) => {
        console.log(bookRes.body);
      });
  });
});