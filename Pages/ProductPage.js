const { expect } = require("@playwright/test");

exports.ProductPage = class ProductPage {
    constructor(page) {
        this.page = page;
        this.productItem = page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Backpack' });
        // this.addToCart = page.getByRole('button', { name: 'Add to cart' });
        this.cartButton = page.locator('.shopping_cart_link');
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
        this.verifyItemAdded = page.getByText('Sauce Labs Backpack', { exact: true });
        this.listProduct = page.locator('.cart_item_label');


    }
    async selectProduct() {
        await this.productItem.getByRole('button', { name: /add to cart/i }).click();
        await this.cartButton.click();
        await this.listProduct.screenshot({ path: 'screenshots/productPage.png' });
        await expect(this.verifyItemAdded).toBeVisible();
        await this.checkoutButton.click();
    }
}