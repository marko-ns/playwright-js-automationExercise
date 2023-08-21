import { test } from "../fixtures";
import { expect } from "@playwright/test";

test('Invalid user login.', async ({ page, isMobile, homePage, signupLoginPage }) => {
    await homePage.goToHomePage()
    await homePage.signupLoginButton.click()
    await signupLoginPage.loginEmailInput.fill("bademail@example.com")
    await signupLoginPage.passwordInput.fill("badpassword123")
    await signupLoginPage.loginButton.click()
    await expect(page.getByText("Your email or password is incorrect!")).toBeVisible()
})
