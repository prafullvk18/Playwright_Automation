const { test, expect } = require('@playwright/test');


test('login page testcase', async ({ page }) => {


    await page.goto("https://practicetestautomation.com/practice-test-login/");

    await page.waitForTimeout(2500);
    await page.locator("//input[@id='username']").fill("student");
    await page.waitForTimeout(3000);
    await page.locator("//input[@id='password']").fill("Password123");
    await page.waitForTimeout(3000);
    await page.locator("//button[@id='submit']").click;
    await page.waitForTimeout(4000);
})