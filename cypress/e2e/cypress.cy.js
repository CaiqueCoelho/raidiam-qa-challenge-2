describe('SauceDemo Broken Checkout Test', () => {
  it('runs checkout process poorly', () => {
    cy.visit('https://www.saucedemo.com');
    cy.wait(1000);

    cy.get('input').type('standard_useraSAs');
    cy.get('input').type('secret_sauce');
    cy.get('button').click();

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

// describe('E-commerce API Flow', () => {
//   it('performs login, adds product to cart, and gets cart', () => {
//     const email = "testuser@testuser.com";
//     const password = "vZGvX79j43JGK#@";

//     cy.request({
//       method: 'POST',
//       url: 'https://rahulshettyacademy.com/api/ecom/auth/login',
//       headers: { 'Content-Type': 'application/json' },
//       body: {
//         email,
//         password
//       }
//     }).then((resp) => {

//       cy.request({
//         method: 'POST',
//         url: 'https://rahulshettyacademy.com/api/ecom/user/',
//         headers: { 'Content-Type': 'application/json' },
//         body: {
//           prodId: 'abc123',
//           qty: 1
//         }
//       }).then((resp2) => {

//         cy.request({
//           method: 'GET',
//           url: 'https://rahulshettyacademy.com/api/ecom/user'
//           // No headers
//         }).then((resp3) => {
//         });
//       });
//     });
//   });
// });
