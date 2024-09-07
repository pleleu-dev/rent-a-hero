import React from "react";
import { Registration } from "@wnmx-poker/tournament";

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

type country = "DE" | "FR" | "ES" | "PT";
type IconsName = "wi" | "ree" | "mt" | "mst" | "mko" | "m" | "ko" | "f";

const tournament: Tournament = {
  id: "sdqfsdf",
  name: "Monster Stack",
  limit: "NLHE",
  startDate: "Mar. 10:45",
  buyIn: "5 €",
  prizepool: 413,
  nbPlayers: 68,
  flag: "PT" as country,
  icons: ["mst", "ree"] as IconsName[],
  isTopTournament: true,
  isRegistred: true,
};

export default meta;

export const Example: StoryObj = {
  render: function Render() {
    return <Registration tournament={tournament} />;
  },
};
