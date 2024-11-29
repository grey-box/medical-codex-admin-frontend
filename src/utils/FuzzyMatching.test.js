const { handleFuzzy } = require('./FuzzyMatching');

describe('handleFuzzy', () => {
  const mockSetFuzzyOutput = jest.fn();
  const mockAPI_URL = "http://localhost:8000";

  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
    global.fetch = jest.fn(); // Mock fetch API
  });

  test('should handle valid inputs gracefully', async () => {
    // Mock a successful API response
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ results: [{ matching_name: "result1" }] }),
    });

    const input = "test";
    const sourceLanguage = "en";
    const threshold = 0.8;
    const results = 5;

    await handleFuzzy(input, sourceLanguage, threshold, results, mockAPI_URL, mockSetFuzzyOutput);

    // Log fetch calls
    console.log("Fetch calls:", global.fetch.mock.calls);

    // Ensure fetch was called with the correct arguments
    expect(global.fetch).toHaveBeenCalledWith(
      `${mockAPI_URL}/fuzzymatching/`,
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source_language: sourceLanguage,
          query: input,
          threshold: threshold,
          nb_max_results: results,
        }),
      })
    );

    // Ensure the mockSetFuzzyOutput was called with the expected data
    expect(mockSetFuzzyOutput).toHaveBeenCalledWith(["result1"]);
  });

  test('should handle invalid API_URL gracefully', async () => {
    const invalidAPI_URL = null; // Simulate invalid API URL
    const input = "test";
    const sourceLanguage = "en";
    const threshold = 0.8;
    const results = 5;

    console.error = jest.fn(); // Mock console.error

    await handleFuzzy(input, sourceLanguage, threshold, results, invalidAPI_URL, mockSetFuzzyOutput);

    // Ensure console.error was called
    expect(console.error).toHaveBeenCalledWith("API URL is not valid");

    // Ensure fetch was not called
    expect(global.fetch).not.toHaveBeenCalled();

    // Ensure setFuzzyOutput was not called
    expect(mockSetFuzzyOutput).not.toHaveBeenCalled();
  });
});









// const FuzzyMatching = require('./FuzzyMatching');

// describe('FuzzyMatching', () => {
//   test('should return correct match score for two strings', () => {
//     const result = FuzzyMatching('string1', 'string2');
//     expect(result).toBeGreaterThan(0.8);
//   });

//   test('should handle empty strings gracefully', () => {
//     const result = FuzzyMatching('', 'test');
//     expect(result).toBe(0);
//   });
// });