import { ErrorText } from "../components/Atoms/ErrorText/ErrorText";
export default {
  title: "/Components/ErrorText",
  component: ErrorText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    text: "No item Present in the cart",
    size: "large",
  },
};
