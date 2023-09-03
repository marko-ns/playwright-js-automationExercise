import { test } from "../fixtures";
import { expect } from "@playwright/test";

test('Verify Test Cases Page', async ({ page, homePage, testCasesPage }) => {
    await homePage.goToHomePage()
    //await page.pause()

    await page.route("**/*", (request) => {
        request.request().url().startsWith("https://googleads.")
          ? request.abort()
          : request.continue();
        return;
      });

    await homePage.testCasesButton.click()
    await page.pause()
    await expect(page).toHaveURL("https://automationexercise.com/test_cases")
    await page.pause()
})
