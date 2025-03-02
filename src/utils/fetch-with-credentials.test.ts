import { describe, expect, it, vi, beforeEach } from "vitest";
import { fetchWithCredentials } from "./fetch-with-credentials";

// Mock environment variable
vi.mock("import.meta.env", () => ({
  env: { VITE_SERVER_URL: "http://localhost:5000" },
}));

describe("fetchWithCredentials", () => {
  // Setup mock fetch
  const mockFetch = vi.fn();
  global.fetch = mockFetch;

  beforeEach(() => {
    mockFetch.mockReset();
  });

  it("should successfully fetch data", async () => {
    // Arrange
    const mockData = { message: "Success" };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    // Act
    const result = await fetchWithCredentials("/test");

    // Assert
    expect(result).toEqual(mockData);
    expect(mockFetch).toHaveBeenCalledWith(
      "http://localhost:5000/test",
      expect.objectContaining({
        credentials: "include",
      }),
    );
  });
});
