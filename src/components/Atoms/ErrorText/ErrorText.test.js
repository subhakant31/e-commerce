import { render } from "@testing-library/react";
import { ErrorText } from "./ErrorText";

describe("ErrorText component", () => {
  test("Renders with the provided text", () => {
    const { getByText } = render(<ErrorText text="Test Error" />);
    expect(getByText("Test Error")).toBeInTheDocument();
  });

  test("Applies the provided className", () => {
    const { container } = render(<ErrorText text="Test Error" className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });

  test("Applies the provided color", () => {
    const { container } = render(<ErrorText text="Test Error" color="red" />);
    expect(container.firstChild).toHaveStyle("color: red");
  });
});
