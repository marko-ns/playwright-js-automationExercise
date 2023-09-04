import { test } from "../fixtures"
import { expect } from "@playwright/test"

test('Verify All Products and product detail page', async ({ page, homePage, adBlock }) => {
    // await page.route("**/*", request => {
    //     request.request().url().startsWith("https://googleads.")
    //       ? request.abort()
    //       : request.continue();
    //     return;
    //   });

    // The block of code above is stored in the "adBlock" fixture.
    await homePage.goToHomePage()
    await homePage.productsButton.click()
    
    await page.pause()
})
