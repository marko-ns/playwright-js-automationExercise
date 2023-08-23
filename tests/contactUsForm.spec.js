import { test } from "../fixtures";
import { expect } from "@playwright/test";

test('Contact Us Form.', async ({ page, isMobile, homePage, contactUsPage }) => {
    await homePage.goToHomePage()
    await expect(homePage.header).toBeVisible()
    await homePage.contactUsButton.click()
    await expect(contactUsPage.getInTouchHeading).toBeVisible()
    await contactUsPage.fillOutDetails()
    await expect(contactUsPage.successAlert).toBeVisible()
    await page.pause()
})
