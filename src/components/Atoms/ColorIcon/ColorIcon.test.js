import { render } from "@testing-library/react";
import ColorIcon from "./ColorIcon";

test("ColorIcon renders with the provided color", () => {
  const { container } = render(<ColorIcon color="red" />);
  const colorIconElement = container.firstChild;

  expect(colorIconElement).toHaveAttribute("color", "red");
  expect(colorIconElement).toHaveAttribute("title", "red");
});
