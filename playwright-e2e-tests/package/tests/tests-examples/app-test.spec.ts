import { test, expect } from '@playwright/test';

test('React', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    const logo = await page.locator('[data-test-id="logo-nav"]')

    await expect(logo).toBeVisible()
});
