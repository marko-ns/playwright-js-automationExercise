export class SignupLoginPage {
    constructor(page, isMobile) {
        this.page = page
        this.isMobile = isMobile

        //signup 
        this.newUserSignupHeading = page.getByRole("heading", { name: "New User Signup!" })
        this.nameInput = page.getByRole("textbox", { name: "Name" })
        this.signupEmailInput = page.locator("[data-qa='signup-email']")
        this.sigunpButton = page.getByRole("button", { name: "Signup" })
    }

    async fillNameAndEmail() {
        await this.nameInput.fill(process.env.FIRST_NAME)
        await this.signupEmailInput.fill(process.env.EMAIL)
        await this.sigunpButton.click()
    }
}