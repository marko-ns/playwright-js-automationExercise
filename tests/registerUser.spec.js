import { expect } from "@playwright/test";
import { test } from "../fixtures";

test('Register user.', async ({ page, isMobile, homePage }) => {
    await homePage.goToHomePage()
    await expect(homePage.header).toBeVisible()
    await expect(homePage.slider).toBeVisible()
    await homePage.signupLoginButton.click()
    await page.pause()
})
