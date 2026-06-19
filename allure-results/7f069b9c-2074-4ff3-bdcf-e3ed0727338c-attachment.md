# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\login.smoke.spec.js >> Validate smoke test for login
- Location: tests\smoke\login.smoke.spec.js:5:5

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://www.saucedemo.com/", waiting until "load"

```

# Test source

```ts
  1  | exports.LoginPage = class LoginPage {
  2  |     constructor(page) {
  3  |         this.page = page;
  4  |         this.userName = page.getByRole('textbox', { name: 'Username' });
  5  |         this.userPassword = page.getByRole('textbox', { name: 'Password' });
  6  |         this.LoginButton = page.getByRole('button', { name: 'Login' });
  7  | 
  8  |     }
  9  |     async NavigatoApplication() {
> 10 |         await this.page.goto('https://www.saucedemo.com/');
     |                         ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  11 |     }
  12 |     async Login(username, Password) {
  13 |         await this.userName.fill(username);
  14 |         await this.userPassword.fill(Password);
  15 |         await this.LoginButton.click();
  16 |     }
  17 | }
```