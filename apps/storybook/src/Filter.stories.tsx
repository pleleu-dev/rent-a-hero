import React from "react";
import type { StoryObj, StoryFn, Meta } from "@storybook/react";

import { Filter } from "@rah-heroes/search";

const meta: Meta = {
	title: "Heroes/Filter",
	component: Filter,
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
			<Filter
				min={1}
				max={100}
				currentMin={10}
				currentMax={50}
				onChange={(value) => {
					console.log(value);
				}}
			/>
		);
	},
};
