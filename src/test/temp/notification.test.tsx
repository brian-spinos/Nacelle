import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import App from "../../App";

describe("Notifications Component rendering", () => {
  it("Notifications page displays", async () => {
    render(<App />);
    const searchButton = screen.getByText("Notifications");
    fireEvent.click(searchButton);
    const notificationsTitle = screen.getByTestId("notifications-title");
    expect(notificationsTitle).toBeInTheDocument();
  });
});
