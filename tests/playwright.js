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

// test('Book Room API - Playwright', async () => {
//   const context = await request.newContext();
//   const res = await context.get('https://automationintesting.online/booking');

//   await new Promise(r => setTimeout(r, 2000));

//   await context.post('https://automationintesting.online/booking', {
//     data: {
//       }
//   });
// });