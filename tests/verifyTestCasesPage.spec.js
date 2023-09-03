import { test } from "../fixtures";
import { expect } from "@playwright/test";

test('Verify Test Cases Page', async ({ page, homePage, testCasesPage }) => {
  await page.route("**/*", (request) => {
    request.request().url().startsWith("https://googleads.")
      ? request.abort()
      : request.continue();
    return;
  });
  await homePage.goToHomePage()
  await homePage.testCasesButton.click()
  await expect(page).toHaveURL("https://automationexercise.com/test_cases")
})
