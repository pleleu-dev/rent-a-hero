import React from "react";
import type { StoryObj, StoryFn, Meta } from "@storybook/react";

import { SetOfThreeList } from "@rah-heroes/search";
import type { SetOfThree, Hero, Icon, Country } from "@rah-heroes/search";

const meta: Meta = {
  title: "Heroes/SetOfThree",
  component: SetOfThreeList,
  tags: ["autodocs"],
  decorators: [
    (Story: StoryFn) => (
      <div style={{ margin: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

const mockHero1: Hero = {
  id: "11",
  name: "Hero 1",
  startDate: new Date("December 17, 2026 03:24:00"),
  startDateLabel: "03/01/2025",
  icons: ["ree"] as Icon[],
  limit: "NLHE",
  nbPlayers: 100,
  archenemies: 10,
  price: 1000,
  flag: "FR" as Country,
};

const mockHero2: Hero = {
  id: "12",
  name: "Hero 2",
  startDate: new Date("December 17, 2026 05:24:00"),
  startDateLabel: "01/01/2025",
  icons: ["ree"] as Icon[],
  limit: "NLHE",
  nbPlayers: 62,
  archenemies: 20,
  price: 10000,
  flag: "DE" as Country,
};

const mockHero3: Hero = {
  id: "13",
  name: "Hero 3",
  startDate: new Date("December 17, 2026 09:24:00"),
  startDateLabel: "01/02/2025",
  icons: ["ree"] as Icon[],
  limit: "NLHE",
  nbPlayers: 10,
  archenemies: 30,
  price: 12000,
  flag: "FR" as Country,
};

const mockSetsOfThree: SetOfThree[] = [
  {
    id: "11-12-13",
    totalBuyIn: 60,
    heroes: [mockHero1, mockHero2, mockHero3],
  },
];

export const Example: StoryObj = {
  render: function Render() {
    return <SetOfThreeList setsOfThree={mockSetsOfThree} />;
  },
};
