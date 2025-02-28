// Author: Jest [https://jestjs.io/docs/getting-started]

// Notes:
// Ensure that you import { expect } from "@jest/globals"; at the top of your test file so that it avoids type conflicts with Cypress.
// This does not have any functionality within the application and is only used to confirm that Jest is working correctly.
// To run tests, look at package.json. We have 3 scripts, but you want to run either:
// 'npm run test' just to check if your tests pass (this takes a shorter amount of time to run)
// 'npm run test:coverage' to check if your tests pass and to see the coverage of your tests (this takes a longer amount of time to run)
// Both are equipped with 'watchAll' flag, so as you make changes, the tests kick off again automatically.

// Test cases:
// 1. It should add two numbers together.

import { expect } from "@jest/globals";
import sum from "../sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
