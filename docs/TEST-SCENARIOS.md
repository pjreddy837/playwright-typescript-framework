# Test Scenarios — SauceDemo Portfolio Exercise

These are sample scenarios for the public SauceDemo demo application.

| ID | Area | Scenario | Expected result | Automation |
|---|---|---|---|---|
| AUTH-001 | Login | Log in with standard user | Inventory page is displayed | Implemented |
| AUTH-002 | Login | Submit invalid credentials | Validation error is displayed | Implemented |
| AUTH-003 | Login | Log in with locked user | Locked-user error is displayed | Implemented |
| CART-001 | Cart | Add first inventory item and open cart | Exactly one cart item is displayed | Implemented |

## Suggested manual exploratory checks
- Submit the login form with blank username and password.
- Verify password masking.
- Refresh the inventory page after successful login.
- Add and remove multiple products.
- Verify the cart badge count matches cart contents.
- Navigate between inventory and cart using the browser controls.

Exploratory checks are suggestions only; they are not represented as automated coverage until implemented.
