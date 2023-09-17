import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Simon HAZARD/);
});

test('article link', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Articles' }).click();
  await page.waitForURL(/articles/);
});
