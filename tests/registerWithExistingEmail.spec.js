import { test } from "../fixtures";
import { expect } from "@playwright/test";

test('Register user with existing email.', async ({ page, isMobile, homePage, signupLoginPage  }) => {
    await homePage.goToHomePage()
    await expect(homePage.header).toBeVisible()
    await homePage.signupLoginButton.click()
    await expect(signupLoginPage.newUserSignupHeading).toBeVisible()
    await signupLoginPage.nameInput.fill("FirstName")
    await signupLoginPage.signupEmailInput.fill(process.env.LOGIN_EMAIL)
    await signupLoginPage.signupButton.click()
    await expect(page.getByText("Email Address already exist!")).toBeVisible()
    await page.pause()
})
