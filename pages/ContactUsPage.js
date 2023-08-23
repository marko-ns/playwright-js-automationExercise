export class ContactUsPage {
    constructor(page, isMobile) {
        this.page = page
        this.isMobile = isMobile

        this.getInTouchHeading = page.getByRole("heading", {name: "GET IN TOUCH"})
        this.nameInput = page.getByRole("textbox", {name: "Name"})
        this.emailInput = page.locator("[data-qa='email']")
        this.subjectInput = page.getByRole("textbox", {name: "Subject"})
        this.messageInput = page.getByRole("textbox", {name: "Your Message Here"})
        this.chooseFileButton = page.getByRole("button", {name: "Choose File"})
        this.submitButton = page.getByRole("button", {name: "Submit"})
    }

    async fillOutDetails() {
        await this.nameInput.fill(process.env.FIRST_NAME)
        await this.emailInput.fill(process.env.EMAIL)
        await this.subjectInput.fill("Test text for subject input.")
        await this.messageInput.fill("Test text for message input.")
        await this.chooseFileButton.click()
        await this.chooseFileButton.setInputFiles("testFile.txt")
        await this.submitButton.click()
    }
}