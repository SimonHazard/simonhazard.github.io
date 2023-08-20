import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://simonhazard.com/');
  await expect(page).toHaveTitle(/Simon HAZARD/);
});

test('article link', async ({ page }) => {
  await page.goto('https://simonhazard.com/');
  await page.getByRole('link', { name: 'Articles' }).click();
  await page.waitForURL(/articles/);
});
