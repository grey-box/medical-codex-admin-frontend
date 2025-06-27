// Author: Matthew Quijano

// Notes:
// import { expect } from "@jest/globals"; to avoid type conflicts with Cypress.
// Source language is not actually being used in fuzzy_matching.py, so it doesn't matter what it is.

// Test cases:
// 1. It should fetch data and update state with successful API response.
// 2. It should throw an error when the API request fails.
// 3. It should throw an error when the API response status is not ok (200).
// 4. It should set an error message when no results are returned.

import { expect } from "@jest/globals";
import handleFuzzySearch from "../handleSearch/fuzzymatching";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

describe("handleSearch", () => {
  let setErrorMessage: jest.Mock;
  let setMedicines: jest.Mock;
  const NEXT_PUBLIC_API_URL = "http://localhost:3000";

  beforeEach(() => {
    fetchMock.resetMocks();
    setErrorMessage = jest.fn();
    setMedicines = jest.fn();
  });

  const callHandleSearch = () =>
    handleFuzzySearch(
      "Tylenol",
      "English",
      setMedicines,
      NEXT_PUBLIC_API_URL,
      setErrorMessage,
    );

  const expectFetchCalledWith = () => {
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      `${NEXT_PUBLIC_API_URL}/fuzzymatching/`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: "Tylenol", source_language: "English" }),
      },
    );
  };

  it("fetches data and updates state with successful API response", async () => {
    const mockData = { results: [{ matching_name: "Tylenol" }] };
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    await callHandleSearch();

    expectFetchCalledWith();
    expect(setMedicines).toHaveBeenCalledWith(mockData.results);
    expect(setErrorMessage).toHaveBeenCalledWith(null);
  });

  it("throws an error when the API request fails", async () => {
    fetchMock.mockRejectOnce(new Error("Fetch failed"));

    await callHandleSearch();

    expect(setErrorMessage).toHaveBeenCalledWith(
      "Unable to connect to the service. Please try again later.",
    );
    expect(setMedicines).not.toHaveBeenCalled();
  });

  it("throws an error when the API response status is not ok (200)", async () => {
    fetchMock.mockResponseOnce("", { status: 404 });

    await callHandleSearch();

    expect(setErrorMessage).toHaveBeenCalledWith(
      "Unable to connect to the service. Please try again later.",
    );
    expect(setMedicines).not.toHaveBeenCalled();
  });

  it("sets an error message when no results are returned", async () => {
    const mockData = { results: [] };
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    await callHandleSearch();

    expectFetchCalledWith();
    expect(setMedicines).toHaveBeenCalledWith([]);
    expect(setErrorMessage).toHaveBeenCalledWith("No results found.");
  });
});
