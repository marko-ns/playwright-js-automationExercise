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
    }

    async goToHomePage() {
        await this.page.goto("")
    }
}