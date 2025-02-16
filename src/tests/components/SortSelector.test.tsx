import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test, describe, beforeEach, vi } from "vitest";
import SortSelector from "../../components/SortSelector";
import "@testing-library/jest-dom";
import { IHotelData } from "../../types/hotelCardTypes";

describe("SortSelector", () => {
  const mockHotelsData: IHotelData[] = [
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
    {
      id: "mesq6mggyn",
      property: {
        propertyId: "P107802",
        title: "Primus Hotel Sydney",
        address: ["339 Pitt St", "Sydney"],
        previewImage: {
          url: "https://unsplash.it/145/125/?random",
          caption: "Image of Primus Hotel Sydney",
          imageType: "PRIMARY",
        },
        rating: {
          ratingValue: 5,
          ratingType: "self",
        },
      },
      offer: {
        promotion: {
          title: "Exclusive Deal",
          type: "MEMBER",
        },
        name: "Deluxe King",
        displayPrice: {
          amount: 375.0,
          currency: "AUD",
        },
        savings: {
          amount: 28.0,
          currency: "AUD",
        },
        cancellationOption: {
          cancellationType: "FREE_CANCELLATION",
        },
      },
    },
  ];

  let mockSetHotelsData: (data: IHotelData[]) => void;

  beforeEach(() => {
    mockSetHotelsData = vi.fn();
  });

  test("renders without crashing", () => {
    render(
      <SortSelector
        hotelsData={mockHotelsData}
        setHotelsData={mockSetHotelsData}
      />
    );
    expect(screen.getByText("Sort By")).toBeInTheDocument();
  });

  test("opens and closes the menu when clicked", async () => {
    render(<SortSelector hotelsData={mockHotelsData} setHotelsData={mockSetHotelsData} />);

    fireEvent.click(screen.getByText("Sort By"));
    expect(screen.getByText("Price low-high")).toBeInTheDocument();
    expect(screen.getByText("Price high-low")).toBeInTheDocument();
  });

  test("sorts hotels by price low-high", () => {
    render(
      <SortSelector
        hotelsData={mockHotelsData}
        setHotelsData={mockSetHotelsData}
      />
    );

    fireEvent.click(screen.getByText("Sort By"));
    fireEvent.click(screen.getByText("Price low-high"));

    expect(mockSetHotelsData).toHaveBeenCalledWith([
      mockHotelsData[0], 
      mockHotelsData[1], 
    ]);
  });

  test("sorts hotels by price high-low", () => {
    render(
      <SortSelector
        hotelsData={mockHotelsData}
        setHotelsData={mockSetHotelsData}
      />
    );

    fireEvent.click(screen.getByText("Sort By"));
    fireEvent.click(screen.getByText("Price high-low"));

    expect(mockSetHotelsData).toHaveBeenCalledWith([
      mockHotelsData[1], 
      mockHotelsData[0], 
    ]);
  });
});
