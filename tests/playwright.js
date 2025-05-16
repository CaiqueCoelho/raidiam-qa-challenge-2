const { test, expect } = require('@playwright/test');

test('SauceDemo Broken Flow', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.waitForTimeout(2000);

  await page.fill('input', 'standard_user');
  await page.fill('input[type="password"]', 'secret_sauce');
  await page.click('input[type="submit"]');

  await page.waitForTimeout(3000);
  await page.locator('button').first().click();

  await page.click('a.shopping_cart_link');
  await page.click('#checkout');

  await page.fill('#first-name', 'John');
  await page.fill('#last-name', 'Doe');
  await page.fill('#postal-code', '12345');
  await page.click('.submit-button');

  await page.waitForTimeout(2000);
  await page.click('.btn_action');

  const successMsg = await page.locator('body');
  await expect(successMsg).toContainText('Thank you');
});

// test('Book Room API - Playwright', async () => {
//   const context = await request.newContext();
//   const res = await context.get('https://automationintesting.online/booking');

//   await new Promise(r => setTimeout(r, 2000));

//   await context.post('https://automationintesting.online/booking', {
//     data: {
//       }
//   });
// });