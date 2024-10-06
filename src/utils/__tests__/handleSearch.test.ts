// Author: Matthew Quijano

// Notes:
// import { expect } from "@jest/globals"; to avoid type conflicts with Cypress.
// Source language is not actually being used in fuzzy_matching.py, so it doesn't matter what it is.

// Test cases:
// 1. It should fetch data and update state with successful API response.
// 2. It should throw an error when the API request fails.
// 3. It should throw an error when the API response status is not ok (200).

import { expect } from "@jest/globals";
import handleSearch from "../handleSearch";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

describe("handleSearch", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("fetches data and updates state with successful API response", async () => {
    const mockData = { results: [{ matching_name: "Tylenol" }] };
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const setMedicines = jest.fn();
    const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

    await handleSearch(
      "Tylenol",
      "English",
      "",
      setMedicines,
      NEXT_PUBLIC_API_URL,
    );

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      `${NEXT_PUBLIC_API_URL}/fuzzymatching/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: "Tylenol",
          target_language: "English",
          source_language: "",
        }),
      },
    );
    expect(setMedicines).toHaveBeenCalledWith(mockData.results);
  });

  it("throws an error when the API request fails", async () => {
    fetchMock.mockRejectOnce(new Error("Fetch failed"));

    const setMedicines = jest.fn();
    const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

    await expect(
      handleSearch("Tylenol", "English", "", setMedicines, NEXT_PUBLIC_API_URL),
    ).rejects.toThrow("Fetch failed");
    expect(setMedicines).not.toHaveBeenCalled();
  });
});

it("throws an error when the API response status is not ok (200)", async () => {
  fetchMock.mockResponseOnce("", { status: 404 });

  const setMedicines = jest.fn();
  const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

  await expect(
    handleSearch("Tylenol", "English", "", setMedicines, NEXT_PUBLIC_API_URL),
  ).rejects.toThrow("HTTP error! Status: 404");

  expect(setMedicines).not.toHaveBeenCalled();
});
