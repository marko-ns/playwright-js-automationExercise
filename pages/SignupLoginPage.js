export class SignupLoginPage {
    constructor(page, isMobile) {
        this.page = page
        this.isMobile = isMobile

        //signup 
        this.newUserSignupHeading = page.getByRole("heading", { name: "New User Signup!" })
        this.nameInput = page.getByRole("textbox", { name: "Name" })
        this.signupEmailInput = page.locator("[data-qa='signup-email']")
        this.signupButton = page.getByRole("button", { name: "Signup" })

        //login
        this.loginEmailInput = page.locator("[data-qa='login-email']")
        this.passwordInput = page.getByRole("textbox", {name: "Password"})
        this.loginButton = page.getByRole("button", {name: "Login"})
    
    }

    async fillNameAndEmail() {
        await this.nameInput.fill(process.env.FIRST_NAME)
        await this.signupEmailInput.fill(process.env.EMAIL)
        await this.signupButton.click()
    }

    async fillEmailAndPass() {
        await this.loginEmailInput.fill(process.env.LOGIN_EMAIL)
        await this.passwordInput.fill(process.env.LOGIN_PASSWORD)
        await this.loginButton.click()
    }
}