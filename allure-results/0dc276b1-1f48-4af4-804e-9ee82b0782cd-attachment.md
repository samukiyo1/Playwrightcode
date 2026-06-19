# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\login.smoke.spec.js >> Validate smoke test for login
- Location: tests\smoke\login.smoke.spec.js:6:5

# Error details

```
ReferenceError: expect is not defined
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
      - generic [ref=e16]: "Checkout: Overview"
    - generic [ref=e18]:
      - generic [ref=e19]:
        - generic [ref=e20]: QTY
        - generic [ref=e21]: Description
        - generic [ref=e22]:
          - generic [ref=e23]: "1"
          - generic [ref=e24]:
            - link "Sauce Labs Backpack" [ref=e25] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e26]: Sauce Labs Backpack
            - generic [ref=e27]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
            - generic [ref=e29]: $29.99
      - generic [ref=e30]:
        - generic [ref=e31]: "Payment Information:"
        - generic [ref=e32]: "SauceCard #31337"
        - generic [ref=e33]: "Shipping Information:"
        - generic [ref=e34]: Free Pony Express Delivery!
        - generic [ref=e35]: Price Total
        - generic [ref=e36]: "Item total: $29.99"
        - generic [ref=e37]: "Tax: $2.40"
        - generic [ref=e38]: "Total: $32.39"
        - generic [ref=e39]:
          - button "Go back Cancel" [ref=e40] [cursor=pointer]:
            - img "Go back" [ref=e41]
            - text: Cancel
          - button "Finish" [ref=e42] [cursor=pointer]
  - contentinfo [ref=e43]:
    - list [ref=e44]:
      - listitem [ref=e45]:
        - link "Twitter" [ref=e46] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e47]:
        - link "Facebook" [ref=e48] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e49]:
        - link "LinkedIn" [ref=e50] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e51]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | exports.CheckoutPage = class CheckoutPage {
  2  |     constructor(page) {
  3  |         this.page = page;
  4  |         this.firstName = page.getByRole('textbox', { name: 'First Name' });
  5  |         this.lastName = page.getByRole('textbox', { name: 'Last Name' });
  6  |         this.zipCode = page.getByRole('textbox', { name: 'Zip/Postal Code' });
  7  |         this.continueButton = page.getByRole('button', { name: 'Continue' });
  8  |         this.finishButton = page.getByRole('button', { name: 'Finish' });
  9  |         this.verifyItemAdded = page.getByText('Sauce Labs Backpack', { exact: true });
  10 |     }
  11 |     async enterCheckoutDetails(firstname, lastname, zipcode) {
  12 |         await this.firstName.fill(firstname);
  13 |         await this.lastName.fill(lastname);
  14 |         await this.zipCode.fill(zipcode);
  15 | 
  16 |     }
  17 |     async continueBtn() {
  18 |         await this.continueButton.click();
  19 |     }
  20 |     async verifyCheckoutPage() {
  21 |         await this.page.screenshot({ path: 'screenshots/checkoutPage.png' });
  22 | 
  23 |     }
  24 |     async finishBtn() {
  25 |         await this.verifyItemAdded.screenshot({ path: "screenshots/verifyItemAdded.png" });
> 26 |         await expect(this.verifyItemAdded).toBeVisible();
     |         ^ ReferenceError: expect is not defined
  27 |         await this.finishButton.click();
  28 |         await this.page.screenshot({ path: "screenshots/orderComplete.png" });
  29 |     }
  30 | }
```