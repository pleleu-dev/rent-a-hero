import React from "react";
import type { StoryObj, StoryFn, Meta } from "@storybook/react";

import { Headings } from "@rah-heroes/search";

const meta: Meta = {
	title: "Heroes/Headings",
	component: Headings,
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

export const Example: StoryObj = {
	render: function Render() {
		return (
			<div className="h-20">
				<Headings />
			</div>
		);
	},
};
