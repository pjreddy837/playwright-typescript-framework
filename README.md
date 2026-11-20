# Playwright TypeScript Automation Framework

![Playwright CI](https://github.com/pjreddy837/playwright-typescript-framework/actions/workflows/playwright.yml/badge.svg)

A portfolio demonstration of maintainable web UI automation using Playwright Test, TypeScript and the Page Object Model.

> **Portfolio/demo project:** scenarios run against the public [SauceDemo](https://www.saucedemo.com/) demo application. This repository is an illustrative framework and is not production client work.

## Technology stack

- Playwright Test and TypeScript
- Page Object Model (POM)
- External JSON test data
- HTML reporting, screenshots, video and trace on failure
- GitHub Actions CI

## Prerequisites

- Node.js 22 or later (supported Playwright runtime)
- npm

## Installation

```bash
npm install
npx playwright install chromium
```

## Execute tests

```bash
npm test
npm run test:headed
npm run test:debug
npm run report
npm run lint
```

## Framework structure

```text
.github/
  workflows/
    playwright.yml
  pull_request_template.md
docs/
  QA-STRATEGY.md
  TEST-SCENARIOS.md
pages/
  CartPage.ts
  InventoryPage.ts
  LoginPage.ts
test-data/
  users.json
tests/
  cart.spec.ts
  login.spec.ts
playwright.config.ts
package.json
tsconfig.json
```

## Covered scenarios

| Area | Scenario |
|---|---|
| Authentication | Standard user login |
| Authentication | Invalid credentials show an error |
| Authentication | Locked user is prevented from logging in |
| Shopping cart | Add an item and verify it appears in the cart |

## Design approach

- **Page objects** encapsulate page-specific locators and actions.
- **Specs** describe user-facing scenarios and contain assertions.
- **Test data** is maintained separately from test logic.
- **Playwright configuration** enables parallel execution, retries in CI, HTML reporting and failure diagnostics.
- **GitHub Actions** executes the suite on pushes and pull requests to `main`.

## Diagnostics

The configuration retains traces, screenshots and video for failed tests. The CI workflow uploads the report and test-results directory as a workflow artifact, including when a test run fails.

## Further improvements

- Add API setup and teardown coverage.
- Add role-based fixtures and environment-specific configuration.
- Expand browser coverage to Firefox and WebKit.
- Add accessibility and visual regression checks.
- Add linting, dependency review and scheduled regression runs.

## Disclaimer

This is a learning and portfolio sample. Run the suite and inspect the actual CI results before claiming successful execution or adding a green-success statement.
