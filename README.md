# Playwright TypeScript Automation Framework

A portfolio/demo framework showing UI automation patterns with Playwright, TypeScript, Page Object Model, test data, HTML reports, traces and GitHub Actions.

> Demo portfolio project. Tests target the public demo site [SauceDemo](https://www.saucedemo.com/); no production credentials or proprietary data are used.

## Stack
- Playwright Test + TypeScript
- Page Object Model
- Environment configuration
- HTML reporter
- Screenshots and trace on failure
- GitHub Actions CI

## Prerequisites
- Node.js 20+
- npm

## Setup
```bash
npm install
npx playwright install --with-deps
```

## Run
```bash
npm test                 # all tests
npm run test:headed      # visible browser
npm run test:debug       # debugger
npm run report           # open last HTML report
```

## Structure
```text
tests/              Test specs
pages/              Page Object classes
test-data/          JSON test data
playwright.config.ts Playwright configuration
.github/workflows/   CI pipeline
```

## Scenarios
- Successful login
- Invalid login error
- Add an item to cart
- Verify cart contents

## Design notes
- Locators use accessible labels, roles or stable attributes.
- Page objects encapsulate UI interaction.
- Test assertions remain in specs.
- CI runs on pushes and pull requests to `main`.

## CI
GitHub Actions runs the test suite on each push and pull request. The HTML report is uploaded as an artifact.

## Disclaimer
This is a learning/portfolio demonstration. Test execution results should be verified by the repository owner before representing them as completed runs.
