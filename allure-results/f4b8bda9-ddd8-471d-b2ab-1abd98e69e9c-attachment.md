# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\login.smoke.spec.js >> Validate smoke test for login
- Location: tests\smoke\login.smoke.spec.js:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.inventory-item').filter({ hasText: 'Sauce Labs Backpack' }).getByRole('button', { name: 'Add to cart' })

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - generic [ref=e10]:
        - textbox "Username" [ref=e11]: Standard user
        - img [ref=e12]
      - generic [ref=e14]:
        - textbox "Password" [ref=e15]: secret_sauce
        - img [ref=e16]
      - 'heading "Epic sadface: Username and password do not match any user in this service" [level=3] [ref=e19]':
        - button [ref=e20] [cursor=pointer]:
          - img [ref=e21]
        - text: "Epic sadface: Username and password do not match any user in this service"
      - button "Login" [active] [ref=e23] [cursor=pointer]
    - generic [ref=e25]:
      - generic [ref=e26]:
        - heading "Accepted usernames are:" [level=4] [ref=e27]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e28]:
        - heading "Password for all users:" [level=4] [ref=e29]
        - text: secret_sauce
```

# Test source

```ts
  1  | exports.ProductPage = class ProductPage {
  2  |     constructor(page) {
  3  |         this.page = page;
  4  |         this.productItem = page.locator('.inventory-item').filter({ hasText: 'Sauce Labs Backpack' });
  5  |         this.addToCart = page.getByRole('button', { name: 'Add to cart' });
  6  |         this.cartButton = page.locator('.shopping_cart_link');
  7  |         this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
  8  |         this.verifyItemAdded = page.getByText('Sauce Labs Backpack', { exact: true });
  9  |         this.listProduct = page.locator('.cart_item_label');
  10 | 
  11 | 
  12 |     }
  13 |     async selectProduct() {
> 14 |         await this.productItem.getByRole('button', { name: 'Add to cart' }).click();
     |                                                                             ^ Error: locator.click: Test timeout of 30000ms exceeded.
  15 |         await this.cartButton.click();
  16 |         await this.listProduct.screenshot({ path: 'screenshots/productPage.png' });
  17 |         await expect(this.verifyItemAdded).toBeVisible();
  18 |         await this.checkoutButton.click();
  19 |     }
  20 | }
```