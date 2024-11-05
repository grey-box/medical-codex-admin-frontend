// Author: Matthew Quijano

// Notes:
// import { expect } from "@jest/globals"; to avoid type conflicts with Cypress.
// Validates target language against languageMapping before sending the request to API.

// Test cases:
// 1. It should fetch translation and update state with successful API response.
// 2. It should throw an error when the API request fails.
// 3. It should throw an error when the API response status is not ok (200).
// 4. It should throw an error if the target language is invalid.
// 5. It should throw an error if there are no translation results available.
// 6. It should handle cases where results is undefined in the API response.

import { expect } from "@jest/globals";
import handleTranslate from "../handleTranslate";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

describe("handleTranslate", () => {
  let setOutputTranslation: jest.Mock;

  beforeEach(() => {
    fetchMock.resetMocks();
    setOutputTranslation = jest.fn();
  });

  it("fetches translation and updates state with successful API response", async () => {
    const mockData = { results: [{ translated_name: "Тиленол" }] };
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const NEXT_PUBLIC_API_URL = "http://localhost:3000";

    await handleTranslate(
      "Tylenol",
      "Ukrainian",
      setOutputTranslation,
      NEXT_PUBLIC_API_URL,
    );

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      `${NEXT_PUBLIC_API_URL}/translate/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          translation_query: {
            matching_name: "Tylenol",
            matching_source: "example_source",
            matching_uid: 1,
          },
          target_language: "uk",
        }),
      },
    );
    expect(setOutputTranslation).toHaveBeenCalledWith("Тиленол");
  });

  it("throws an error when the API request fails", async () => {
    fetchMock.mockRejectOnce(new Error("Fetch failed"));

    const NEXT_PUBLIC_API_URL = "http://localhost:3000";

    const result = await handleTranslate(
      "Tylenol",
      "Ukrainian",
      setOutputTranslation,
      NEXT_PUBLIC_API_URL,
    );

    expect(result).toBeNull();
    expect(setOutputTranslation).not.toHaveBeenCalled();
  });

  it("throws an error when the API response status is not ok (200)", async () => {
    fetchMock.mockResponseOnce("", { status: 404 });

    const NEXT_PUBLIC_API_URL = "http://localhost:3000";

    const result = await handleTranslate(
      "Tylenol",
      "Ukrainian",
      setOutputTranslation,
      NEXT_PUBLIC_API_URL,
    );

    expect(result).toBeNull();
    expect(setOutputTranslation).not.toHaveBeenCalled();
  });

  it("throws an error if the target language is invalid", async () => {
    const NEXT_PUBLIC_API_URL = "http://localhost:3000";

    const result = await handleTranslate(
      "Tylenol",
      "InvalidLanguage",
      setOutputTranslation,
      NEXT_PUBLIC_API_URL,
    );

    expect(result).toBeNull();
    expect(setOutputTranslation).not.toHaveBeenCalled();
  });

  it("throws an error if there are no translation results available", async () => {
    const mockData = { results: [] }; // Simulating no translation results
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const NEXT_PUBLIC_API_URL = "http://localhost:3000";

    const result = await handleTranslate(
      "Tylenol",
      "Ukrainian",
      setOutputTranslation,
      NEXT_PUBLIC_API_URL,
    );

    expect(result).toBeNull();
    expect(setOutputTranslation).not.toHaveBeenCalled();
  });

  it("handles cases where results is undefined in the API response", async () => {
    const mockData = {};
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const NEXT_PUBLIC_API_URL = "http://localhost:3000";

    const result = await handleTranslate(
      "Tylenol",
      "Ukrainian",
      setOutputTranslation,
      NEXT_PUBLIC_API_URL,
    );

    expect(result).toBeNull();
    expect(setOutputTranslation).not.toHaveBeenCalled();
  });
});
