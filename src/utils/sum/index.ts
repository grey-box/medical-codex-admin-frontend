// This does not have any functionality within the application and is only used to confirm that Jest is working correctly.
// To run tests, look at package.json. We have 3 scripts, but you want to run either:
// 'npm run test' just to check if your tests pass (this takes a shorter amount of time to run)
// 'npm run test:coverage' to check if your tests pass and to see the coverage of your tests (this takes a longer amount of time to run)
// Both are equipped with 'watchAll' flag, so as you make changes, the tests kick off again automatically.
function sum(a: number, b: number): number {
  return a + b;
}

export default sum;
