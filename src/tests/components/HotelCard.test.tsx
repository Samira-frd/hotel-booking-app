import { render, screen, waitFor } from "@testing-library/react";
import { expect, test } from "vitest";
import HotelCard from "../../components/HotelCard";
import "@testing-library/jest-dom";
import { IHotelData } from "../../types/hotelCardTypes";



test("renders the hotel card with correct data from mockData", async () => {
  const data: IHotelData = {
    id: "cxd650nuyo",
    property: {
      propertyId: "P107801",
      title: "Courtyard by Marriott Sydney-North Ryde",
      address: [
        "7-11 Talavera Rd",
        "North Ryde"
      ],
      previewImage: {
        url: "https://unsplash.it/145/125/?random",
        caption: "Image of Courtyard by Marriott Sydney-North Ryde",
        imageType: "PRIMARY"
      },
      rating: {
        ratingValue: 4.5,
        ratingType: "self"
      }
    },
    offer: {
      promotion: {
        title: "Exclusive Deal",
        type: "MEMBER"
      },
      name: "Deluxe Balcony Room",
      displayPrice: {
        amount: 329.000000000,
        currency: "AUD"
      },
      savings: {
        amount: 30.000000000,
        currency: "AUD"
      },
      cancellationOption: {
        cancellationType: "FREE_CANCELLATION"
      }
    }
  };
  render(<HotelCard data={data} />);

  await waitFor(() => {
    expect(screen.getByText(data.property.title)).toBeInTheDocument();
    expect(screen.getByText(data.property.address.join(", "))).toBeInTheDocument();
    const image = screen.getByRole("img", {
      name: data.property.previewImage.caption,
    });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", data.property.previewImage.url);

    // expect(screen.getByText(data.property.rating.ratingValue)).toBeInTheDocument();
    expect(screen.getByText(data.offer.name)).toBeInTheDocument();
    expect(screen.getByText(data.offer.promotion.title)).toBeInTheDocument();
    expect(screen.getByText(data.offer.displayPrice.amount)).toBeInTheDocument();
    expect(screen.getByText(content => content.includes(data.offer.displayPrice.currency))).toBeInTheDocument();
    if (data.offer.savings) {
      expect(screen.getByText(data.offer.savings.amount)).toBeInTheDocument();
      expect(screen.getByText(content => content.includes(data.offer.savings?.currency ?? ""))).toBeInTheDocument();
    }
    expect(screen.getByText("Free cancellation")).toBeInTheDocument();

    
  });
});