import React from "react";
import { Registration } from "@wnmx-poker/tournament";
import type { Icon, Country } from "@wnmx-poker/tournament";

import type { StoryObj, StoryFn, Meta } from "@storybook/react";
import type { Tournament } from "@wnmx-poker/tournament";

const meta: Meta = {
  title: "Poker/Registration",
  component: Registration,
  tags: ["autodocs"],
  decorators: [
    (Story: StoryFn) => (
      <div style={{ padding: "20px", width: "780px" }}>
        <Story />
      </div>
    ),
  ],
};

const tournament: Tournament = {
  id: "sdqfsdf",
  name: "Monster Stack",
  limit: "NLHE",
  startDate: new Date("2021-09-01T18:00:00Z"),
  startDateLabel: "2022/09/01",
  buyIn: 5,
  prizepool: 413,
  nbPlayers: 68,
  flag: "PT" as Country,
  icons: ["mst", "ree"] as Icon[],
  isTopTournament: true,
};

export default meta;

export const Example: StoryObj = {
  render: function Render() {
    return <Registration tournament={tournament} />;
  },
};
