import { Tabs } from "@wnmx/ui";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "UI/Tabs",
  component: Tabs,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};
export const Default = {
  args: {},
};
