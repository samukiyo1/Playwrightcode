exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.userName = page.getByRole('textbox', { name: 'Username' });
        this.userPassword = page.getByRole('textbox', { name: 'Password' });
        this.LoginButton = page.getByRole('button', { name: 'Login' });

    }
    async NavigatoApplication() {
        await this.page.goto('https://www.saucedemo.com/');
    }
    async Login(username, Password) {
        await this.userName.fill(username);
        await this.userPassword.fill(Password);
        await this.LoginButton.click();
    }
}