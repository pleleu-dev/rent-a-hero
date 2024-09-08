import React from "react";
import type { StoryObj, StoryFn, Meta } from "@storybook/react";
import { CountryPill, MoneyPill, RegisterPill } from "@wnmx/ui";

const meta: Meta = {
  title: "UI/Pills",
  decorators: [
    (Story: StoryFn) => (
      <div style={{ margin: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
export const AllPills: StoryObj = {
  render: function Render() {
    return (
      <div className="flex gap-6">
        <CountryPill country="FR" />
        <MoneyPill prize={1300} currency="€" />
        <RegisterPill />
      </div>
    );
  },
};
