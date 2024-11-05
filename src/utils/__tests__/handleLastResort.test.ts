// Author: Matthew Quijano

// Notes:
// import { expect } from "@jest/globals"; to avoid type conflicts with Cypress.
// Tests for handling cases where NEXT_PUBLIC_API_URL is missing, API response is successful, or throws an error.

// Test cases:
// 1. It should fetch translation and return translated medicine with a successful API response.
// 2. It should throw an error when NEXT_PUBLIC_API_URL is undefined.
// 3. It should throw an error when the API response status is not ok (200).
// 4. It should throw an error if there is no translated medicine in the response.

import { expect } from "@jest/globals";
import handleLastResort from "../handleLastResort";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

describe("handleLastResort", () => {
  const NEXT_PUBLIC_API_URL = "http://localhost:3000";

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("fetches translation and returns translated medicine with a successful API response", async () => {
    const mockData = { translated_medicine: "Тиленол" };
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const result = await handleLastResort(
      "Tylenol",
      "Ukrainian",
      NEXT_PUBLIC_API_URL,
    );

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      `${NEXT_PUBLIC_API_URL}/last-resort/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          medicine: "Tylenol",
          target_language: "Ukrainian",
        }),
      },
    );
    expect(result).toBe("Тиленол");
  });

  it("throws an error when NEXT_PUBLIC_API_URL is undefined", async () => {
    await expect(
      handleLastResort("Tylenol", "Ukrainian", undefined),
    ).rejects.toThrow("Backend URL is undefined");

    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("throws an error when the API response status is not ok (200)", async () => {
    fetchMock.mockResponseOnce("Service Unavailable", { status: 503 });

    await expect(
      handleLastResort("Tylenol", "Ukrainian", NEXT_PUBLIC_API_URL),
    ).rejects.toThrow(
      "Last Resort HTTP error! Status: 503, Message: Service Unavailable",
    );

    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("throws an error if there is no translated medicine in the response", async () => {
    const mockData = {};
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    await expect(
      handleLastResort("Tylenol", "Ukrainian", NEXT_PUBLIC_API_URL),
    ).rejects.toThrow("No translation results available from last resort.");

    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
