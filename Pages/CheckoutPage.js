const { expect } = require('@playwright/test');
exports.CheckoutPage = class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstName = page.getByRole('textbox', { name: 'First Name' });
        this.lastName = page.getByRole('textbox', { name: 'Last Name' });
        this.zipCode = page.getByRole('textbox', { name: 'Zip/Postal Code' });
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.finishButton = page.getByRole('button', { name: 'Finish' });
        this.verifyItemAdded = page.getByText('Sauce Labs Backpack', { exact: true });
    }
    async enterCheckoutDetails(firstname, lastname, zipcode) {
        await this.firstName.fill(firstname);
        await this.lastName.fill(lastname);
        await this.zipCode.fill(zipcode);

    }
    async continueBtn() {
        await this.continueButton.click();
    }
    async verifyCheckoutPage() {
        await this.page.screenshot({ path: 'screenshots/checkoutPage.png' });

    }
    async finishBtn() {
        await this.verifyItemAdded.screenshot({ path: "screenshots/verifyItemAdded.png" });
        await expect(this.verifyItemAdded).toBeVisible();
        await this.finishButton.click();
        await this.page.screenshot({ path: "screenshots/orderComplete.png" });
    }
}