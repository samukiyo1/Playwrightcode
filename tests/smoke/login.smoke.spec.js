import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/LoginPage';
import { ProductPage } from '../../Pages/ProductPage';
import { CheckoutPage } from '../../Pages/CheckoutPage';

test('Validate smoke test for login', async ({ page }) => {
    const loginpage = new LoginPage(page);
    const productpage = new ProductPage(page);
    const checkoutpage = new CheckoutPage(page);

    await loginpage.NavigatoApplication();
    await loginpage.Login("standard_user", "secret_sauce");
    await productpage.selectProduct();
    await checkoutpage.enterCheckoutDetails("sam", "ukiyo", "123456");
    await checkoutpage.continueBtn();
    await checkoutpage.verifyCheckoutPage();
    await checkoutpage.finishBtn();
})