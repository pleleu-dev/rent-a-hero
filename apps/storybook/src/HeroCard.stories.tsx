import React from "react";
import { HeroCard } from "@rah-heroes/search";
import type { Icon, Country, Hero } from "@rah-heroes/search";

import type { StoryObj, StoryFn, Meta } from "@storybook/react";

const meta: Meta = {
  title: "Heroes/HeroCard",
  component: HeroCard,
  tags: ["autodocs"],
  decorators: [
    (Story: StoryFn) => (
      <div style={{ padding: "20px", width: "780px" }}>
        <Story />
      </div>
    ),
  ],
};

const hero: Hero = {
  id: "sdqfsdf",
  name: "Monster Stack",
  limit: "NLHE",
  startDate: new Date("2021-09-01T18:00:00Z"),
  startDateLabel: "2022/09/01",
  archenemies: 5,
  price: 413,
  nbPlayers: 68,
  flag: "PT" as Country,
  icons: ["mst", "ree"] as Icon[],
  isTopHero: true,
};

export default meta;

export const Example: StoryObj = {
  render: function Render() {
    return <HeroCard hero={hero} />;
  },
};
