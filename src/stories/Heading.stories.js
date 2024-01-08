import { Heading } from "../components/Atoms/Heading/Heading";
export default {
  title: "/Components/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    text: "FIND CLOTHES THAT MATCHES YOUR STYLE",
    primary: true,
    centeredText: true,
  },
};
