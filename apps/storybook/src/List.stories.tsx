import React from "react";
import { List } from "@wnmx-poker/tournament";
import type { StoryObj, StoryFn, Meta } from "@storybook/react";
import type { Tournament } from "@wnmx-poker/tournament";

const meta: Meta = {
  title: "Poker/List",
  component: List,
  tags: ["autodocs"],
  decorators: [
    (Story: StoryFn) => (
      <div style={{ padding: "20px", width: "780px" }}>
        <Story />
      </div>
    ),
  ],
};

const tournaments: Tournament[] = [
  {
    id: "123",
    name: "Monster Stack",
    limit: "NLHE",
    startDate: "Mar. 10:45",
    buyIn: "5 €",
    prizepool: 413,
    nbPlayers: 68,
    flag: "PT",
    icons: ["mst", "ree"],
    isTopTournament: true,
    isRegistred: true,
  },
  {
    id: "sdqfsdf",
    name: "TERMINATOR",
    limit: "NLHE",
    startDate: "Mer. 12:45",
    buyIn: "2 €",
    prizepool: 1413,
    nbPlayers: 24,
    flag: "FR",
    icons: ["ko", "ree"],
    isTopTournament: false,
    isRegistred: false,
  },
];

export default meta;

export const Example: StoryObj = {
  render: function Render() {
    return <List tournaments={tournaments} />;
  },
};
