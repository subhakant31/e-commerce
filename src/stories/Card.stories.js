import { Card } from "../components/Molecules/Card";

// eslint-disable-next-line storybook/story-exports
export default {
    title: "Example/Card",
    component: Card,
  };

  export const Primary = {
    args: {
      primary: true,
      label: "Crad Title",
    },
  };