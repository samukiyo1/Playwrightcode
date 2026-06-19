# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\login.smoke.spec.js >> Validate smoke test for login
- Location: tests\smoke\login.smoke.spec.js:6:5

# Error details

```
TypeError: checkoutpage.continueButton is not a function
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
        - generic [ref=e14]: "1"
      - generic [ref=e16]: "Checkout: Your Information"
    - generic [ref=e19]:
      - generic [ref=e20]:
        - textbox "First Name" [ref=e22]: sam
        - textbox "Last Name" [ref=e24]: ukiyo
        - textbox "Zip/Postal Code" [active] [ref=e26]: "123456"
      - generic [ref=e28]:
        - button "Go back Cancel" [ref=e29] [cursor=pointer]:
          - img "Go back" [ref=e30]
          - text: Cancel
        - button "Continue" [ref=e31] [cursor=pointer]
  - contentinfo [ref=e32]:
    - list [ref=e33]:
      - listitem [ref=e34]:
        - link "Twitter" [ref=e35] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e36]:
        - link "Facebook" [ref=e37] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e38]:
        - link "LinkedIn" [ref=e39] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e40]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from '../../Pages/LoginPage';
  3  | import { ProductPage } from '../../Pages/ProductPage';
  4  | import { CheckoutPage } from '../../Pages/CheckoutPage';
  5  | 
  6  | test('Validate smoke test for login', async ({ page }) => {
  7  |     const loginpage = new LoginPage(page);
  8  |     const productpage = new ProductPage(page);
  9  |     const checkoutpage = new CheckoutPage(page);
  10 | 
  11 |     await loginpage.NavigatoApplication();
  12 |     await loginpage.Login("standard_user", "secret_sauce");
  13 |     await productpage.selectProduct();
  14 |     await checkoutpage.enterCheckoutDetails("sam", "ukiyo", "123456");
> 15 |     await checkoutpage.continueButton();
     |                        ^ TypeError: checkoutpage.continueButton is not a function
  16 |     await checkoutpage.verifyCheckoutPage();
  17 | })
```