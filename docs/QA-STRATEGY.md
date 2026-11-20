# QA Strategy — SauceDemo Portfolio Exercise

## 1. Purpose and scope
This document describes a lightweight test strategy for the sample SauceDemo UI automation project. It is a portfolio example and does not describe a client delivery.

In scope:
- Login validation for standard, invalid and locked users
- Product inventory visibility after successful login
- Add-to-cart and cart content verification

Out of scope:
- Payment processing with real financial data
- Production integrations
- Security penetration testing
- Formal performance certification

## 2. Test approach
- Use risk-based coverage, prioritising authentication and cart state.
- Validate positive and negative paths.
- Keep test data separate from test implementation.
- Use Page Object Model to centralise page interactions.
- Use Playwright web-first assertions rather than fixed sleeps.
- Capture traces, screenshots and video on failure.

## 3. Test levels and types
| Type | Purpose |
|---|---|
| Functional | Verify business-facing behaviours |
| Negative | Verify invalid and locked-user handling |
| Regression | Re-run existing login and cart coverage after changes |
| UI / E2E | Validate the end-to-end browser journey |

## 4. Entry criteria
- Demo application is reachable.
- Test dependencies and Chromium browser are installed.
- Test data is available.
- Target branch contains the intended code revision.

## 5. Exit criteria
- All in-scope automated tests complete.
- Failed tests are reviewed and categorised.
- Relevant traces and reports are retained for investigation.
- Any known limitations are documented.

## 6. Defect reporting
A useful defect report should include:
- Clear title and affected scenario
- Preconditions and test data (never include real secrets)
- Reproduction steps
- Expected and actual results
- Browser, environment and build details
- Screenshot, trace or video evidence where useful
- Severity, priority and reproducibility

## 7. Risks and mitigations
| Risk | Mitigation |
|---|---|
| Demo site unavailable | Treat environment failure separately from product defects |
| UI changes invalidate locators | Prefer stable test attributes and review locator failures |
| Shared mutable test data | Keep scenarios independent and use isolated browser contexts |
| Intermittent failures | Use traces and evidence; do not hide failures with excessive retries |

## 8. Reporting
The pipeline publishes Playwright HTML report and test diagnostics as workflow artifacts. A green badge should only be interpreted after a real workflow run completes successfully.
