import { InputField } from "../components/Atoms/InputField/InputField";

export default {
  title: "/Components/InputField",
  component: InputField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    placeHolder: "enter text",
    icon: undefined,
  },
};
