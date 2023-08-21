import { expect } from "@playwright/test";
import { test } from "../fixtures";

test('Register user.', async ({ page, isMobile, homePage, signupLoginPage, signupPage }) => {
    await homePage.goToHomePage()
    await expect(homePage.header).toBeVisible()
    await expect(homePage.slider).toBeVisible()
    await homePage.signupLoginButton.click()
    await expect(signupLoginPage.newUserSignupHeading).toBeVisible()
    await signupLoginPage.fillNameAndEmail()
    await expect(page.getByText("Enter Account Information")).toBeVisible()
    await signupPage.fillAllInfo()
    await expect(page.getByText("Account Created!")).toBeVisible()
    await page.getByRole("link", {name: "Continue"}).click()
    expect(page.getByText("Logged in as " + process.env.FIRST_NAME))
    await homePage.deleteAccountButton.click()
    await expect(page.getByText("Account Deleted!")).toBeVisible()
    await page.pause()
})
