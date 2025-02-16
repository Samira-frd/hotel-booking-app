import { expect, test, describe, vi } from "vitest";
import { mockData } from "../../api/hotelsAPI";

describe("hotelsAPI - mockData function", () => {
  test("fetches hotel data successfully", async () => {
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            results: [
                {
                    id: "cxd650nuyo",
                    property: {
                      propertyId: "P107801",
                      title: "Courtyard by Marriott Sydney-North Ryde",
                      address: ["7-11 Talavera Rd", "North Ryde"],
                      previewImage: {
                        url: "https://unsplash.it/145/125/?random",
                        caption: "Image of Courtyard by Marriott Sydney-North Ryde",
                        imageType: "PRIMARY",
                      },
                      rating: {
                        ratingValue: 4.5,
                        ratingType: "self",
                      },
                    },
                    offer: {
                      promotion: {
                        title: "Exclusive Deal",
                        type: "MEMBER",
                      },
                      name: "Deluxe Balcony Room",
                      displayPrice: {
                        amount: 329.0,
                        currency: "AUD",
                      },
                      savings: {
                        amount: 30.0,
                        currency: "AUD",
                      },
                      cancellationOption: {
                        cancellationType: "NOT_REFUNDABLE",
                      },
                    },
                  },
            ],
          }),
      })
    ) as ReturnType<typeof vi.fn>;

    const data = await mockData();

    expect(data).toHaveProperty("results");
    expect(data.results).toBeInstanceOf(Array);
    expect(data.results[0]).toHaveProperty("id", "cxd650nuyo");
    expect(data.results[0].property.title).toBe("Courtyard by Marriott Sydney-North Ryde");
    expect(data.results[0].offer.displayPrice.amount).toBe(329);
  });

  test("handles API error correctly", async () => {
    globalThis.fetch = vi.fn(() => Promise.reject(new Error("API Fetch Error"))) as ReturnType<typeof vi.fn>;

    await expect(mockData()).rejects.toThrow("API Fetch Error");
  });
});
