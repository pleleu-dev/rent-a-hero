import React from "react";
import type { StoryObj, StoryFn, Meta } from "@storybook/react";

import { SetOfThreeList } from "@wnmx-poker/tournament";
import type {
  SetOfThree,
  Tournament,
  Icon,
  Country,
} from "@wnmx-poker/tournament";

const meta: Meta = {
  title: "Poker/SetOfThree",
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

const mockTournament1: Tournament = {
  id: "11",
  name: "Tournament 1",
  startDate: new Date("December 17, 2026 03:24:00"),
  startDateLabel: "03/01/2025",
  icons: ["ree"] as Icon[],
  limit: "NLHE",
  nbPlayers: 100,
  buyIn: 10,
  prizepool: 1000,
  flag: "FR" as Country,
};

const mockTournament2: Tournament = {
  id: "12",
  name: "Tournament 2",
  startDate: new Date("December 17, 2026 05:24:00"),
  startDateLabel: "01/01/2025",
  icons: ["ree"] as Icon[],
  limit: "NLHE",
  nbPlayers: 62,
  buyIn: 20,
  prizepool: 10000,
  flag: "DE" as Country,
};

const mockTournament3: Tournament = {
  id: "13",
  name: "Tournament 3",
  startDate: new Date("December 17, 2026 09:24:00"),
  startDateLabel: "01/02/2025",
  icons: ["ree"] as Icon[],
  limit: "NLHE",
  nbPlayers: 10,
  buyIn: 30,
  prizepool: 12000,
  flag: "FR" as Country,
};

const mockSetsOfThree: SetOfThree[] = [
  {
    id: "11-12-13",
    totalBuyIn: 60,
    tournaments: [mockTournament1, mockTournament2, mockTournament3],
  },
];

export const Example: StoryObj = {
  render: function Render() {
    return <SetOfThreeList setsOfThree={mockSetsOfThree} />;
  },
};
