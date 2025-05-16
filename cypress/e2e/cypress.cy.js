describe('SauceDemo Broken Checkout Test', () => {
  it('runs checkout process poorly', () => {
    cy.visit('https://www.saucedemo.com');
    cy.wait(1000);

    cy.get('input').first().type('standard_useraSAs');
    cy.get('input').eq(1).type('secret_sauce');
    cy.get('input[type="submit"]').click();

    cy.wait(3000);
    cy.get('.btn-primary').first().click();

    cy.get('a').click();
    cy.get('checkout').click();

    cy.get('name').type('Test');
    cy.get('last').type('User');
    cy.get('code').type('00000');

    cy.wait(2000);
    cy.get('button').click();

    cy.get('#sucess-message').should('exist');
  });
});

// describe('Book Room - Cypress (Bad)', () => {
//   it('books room with poor practices', () => {
//     cy.request('GET', 'https://automationintesting.online/booking').then((res) => {
//       cy.wait(2000);
//     });

//     cy.request('POST', 'https://automationintesting.online/booking', {}
//       ).then((bookRes) => {
//         console.log(bookRes.body);
//       });
//   });
// });