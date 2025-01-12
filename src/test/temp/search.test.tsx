import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import App from "../../App";

describe("Component rendering states", () => {
  it("Empty list", async () => {
    render(<App />);

    const searchButton = screen.getByText("Search");
    fireEvent.click(searchButton);

    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "" } });

    const emptyListText = await screen.findByText("Empty List", {});

    // Assert that the first one exists
    expect(emptyListText).toBeInTheDocument();
  });

  it("Search error", async () => {
    render(<App />);

    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "ERROR" } });

    const errorMessage = await screen.findByText(
      "Whoops, something went wrong, error: Fake API Error",
      {}
    );

    // Assert that the first one exists
    expect(errorMessage).toBeInTheDocument();
  });

  it("search and clear", async () => {
    render(<App />);

    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "apple" } });

    const fruitsTextArray = await screen.findAllByText("fruits", {});
    const appleText = await screen.findByText("apple", {});

    // Assert that the first one exists
    expect(fruitsTextArray[0]).toBeInTheDocument();
    expect(appleText).toBeInTheDocument();

    // clearing the results

    const clearButton = screen.getByTestId("clear-button");
    fireEvent.click(clearButton);

    const emptyListText = await screen.findByText("Empty List", {});

    // Assert that the first one exists
    expect(emptyListText).toBeInTheDocument();
  });
});
