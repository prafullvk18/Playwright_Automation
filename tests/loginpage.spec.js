const { test, expect } = require('@playwright/test');
//import { test, expect } from '@playwright/test';

test('Orange HRM login page', async ({ page }) => {


    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.waitForTimeout(4000);
    await page.locator("//input[@name='username']").fill("Admin");
    await page.waitForTimeout(3000);
    await page.locator("//input[@name='password']").fill("admin123");
    await page.waitForTimeout(3000);
    await page.locator("//button[@type='submit']").click;
    await page.waitForTimeout(4000);
})