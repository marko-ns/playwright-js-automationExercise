import { test } from "../fixtures";
import { expect } from "@playwright/test";

test('Valid user login.', async ({ page, isMobile, homePage, signupLoginPage }) => {
    await homePage.goToHomePage()
    await homePage.signupLoginButton.click()
    await signupLoginPage.fillEmailAndPass()
    expect(page.getByText("Logged in as pwtest1")).toBeVisible()
})
