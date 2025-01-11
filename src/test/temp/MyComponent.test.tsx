import { render } from "@testing-library/react";
import MyComponent from "../../main/temp/MyComponent";
import "@testing-library/jest-dom";

import { describe, it, expect } from "vitest";

describe("MyComponent", () => {
  it("renders the correct text", () => {
    const component = render(<MyComponent />);
    const element = component.getByText(/Hello, Vitest!/i);
    expect(element).toBeInTheDocument();
  });
});
