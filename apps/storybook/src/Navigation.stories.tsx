import React from "react";
import type { StoryObj, Meta } from "@storybook/react";
import { Navigation } from "@rah/ui";

const meta: Meta = {
  title: "UI/Navigation",
  component: Navigation,
  tags: ["autodocs"],
};

export default meta;

export const Example: StoryObj = {
  render: function Render() {
    return (
      <div className="h-20">
        <Navigation />
      </div>
    );
  },
};
