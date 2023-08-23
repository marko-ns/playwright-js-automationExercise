export class ContactUsPage {
    constructor(page, isMobile) {
        this.page = page
        this.isMobile = isMobile

        this.getInTouchHeading = page.getByRole("heading", { name: "GET IN TOUCH" })
        this.nameInput = page.getByRole("textbox", { name: "Name" })
        this.emailInput = page.locator("[data-qa='email']")
        this.subjectInput = page.getByRole("textbox", { name: "Subject" })
        this.messageInput = page.getByRole("textbox", { name: "Your Message Here" })
        this.chooseFileButton = page.locator('input[name="upload_file"]')
        this.submitButton = page.getByRole("button", { name: "Submit" })
        this.successAlert = page.locator(".status.alert.alert-success")
    }

    async fillOutDetails() {
        await this.nameInput.fill(process.env.FIRST_NAME)
        await this.emailInput.fill(process.env.EMAIL)
        await this.subjectInput.fill("Test text for subject input.")
        await this.messageInput.fill("Test text for message input.")
        await this.chooseFileButton.setInputFiles("testFile.txt")
        this.page.on('dialog', dialog => dialog.accept());
        await this.submitButton.click()
    }
}