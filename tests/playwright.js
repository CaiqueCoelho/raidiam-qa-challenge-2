const { test, expect } = require('@playwright/test');

test('SauceDemo Broken Flow', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.waitForTimeout(2000);

  await page.fill('input', 'standardsdadd_user');
  await page.fill('password', 'secretasdasd_sauce');
  await page.click('input');

  await page.waitForTimeout(3000);
  await page.locator('btn-primary').click();

  await page.click('a');
  await page.click('checkout');

  await page.fill('name', 'John');
  await page.fill('last', 'Doe');
  await page.fill('code', '12345');
  await page.click('.primary');

  await page.waitForTimeout(2000);
  await page.click('button');

  const successMsg = await page.locator('.success-message');
  await expect(successMsg).toBeVisible();
});

// test('E-commerce API Flow', async ({ request }) => {
//   const email = "testuser@testuser.com";
//   const password = "vZGvX79j43JGK#@";

//   const resp = await request.post('https://rahulshettyacademy.com/api/ecom/auth/login', {
//     headers: { 'Content-Type': 'application/json' },
//     data: {
//       email,
//       password
//     }
//   });

//   const resp2 = await request.post('https://rahulshettyacademy.com/api/ecom/user/', {
//     headers: { 'Content-Type': 'application/json' },
//     data: {
//       prodId: 'abc123',
//       qty: 1
//     }
//   });

//   const resp3 = await request.get('https://rahulshettyacademy.com/api/ecom/user');
// });
