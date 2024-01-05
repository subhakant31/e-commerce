import { Button } from "../components/Atoms/Button/Button";
export default {
  title: "/Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    text: "shop now",
    primary: true,
  },
};
