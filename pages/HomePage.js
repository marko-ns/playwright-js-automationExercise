export class HomePage {
    constructor(page, isMobile) {
        this.page = page
        this.isMobile = isMobile

        this.header = this.page.locator("#header")
        this.slider = this.page.locator("#slider")
        this.signupLoginButton = this.page.getByRole("link", { name: " Signup / Login" })
        this.deleteAccountButton = this.page.getByRole("link", {name: " Delete Account"})
        this.logoutButton = this.page.getByRole("link", {name: " Logout"})
        this.contactUsButton = this.page.getByRole("link", {name: " Contact us"})
        this.testCasesButton = this.page.getByRole("link", {name: " Test Cases", exact: true})
    }

    async goToHomePage() {
        await this.page.goto("")
    }
}