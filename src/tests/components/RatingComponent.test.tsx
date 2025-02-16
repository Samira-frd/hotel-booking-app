import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";
import RatingComponent from "../../components/RatingComponent";


describe("RatingComponent", () => {
    test("renders without crashing", () => {
      render(<RatingComponent ratingValue={4.5} ratingType="self" />);
      expect(screen.getByLabelText("4.5 Stars")).toBeInTheDocument();
    });
  
    test("displays the correct rating value", () => {
      render(<RatingComponent ratingValue={5} ratingType="self" />);
      expect(screen.getByLabelText("5 Stars")).toBeInTheDocument();
    });
  });