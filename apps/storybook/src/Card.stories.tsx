import React from "react";
import type { StoryFn, StoryObj, Meta } from "@storybook/react";
import { Card } from "@wnmx/ui";
import imageFile from "./assets/tournois.jpg";

const meta: Meta = {
	title: "UI/Card",
	component: Card,
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

const Image: StoryObj = {
	render: function Render() {
		return (
			<Card borderRadius="lg">
				<img src={imageFile} alt="" width="100%" height="auto" />
			</Card>
		);
	},
};

const Neutral: StoryObj = {
	render: function Render() {
		return (
			<Card state="neutral">
				<div className="w-full h24 text-center">
					<h2 className="text-2xl mt-1 font-semibold">Neutral</h2>
					<p className="text-gray-600">This card has a neutral state.</p>
				</div>
			</Card>
		);
	},
};

const Info: StoryObj = {
	render: function Render() {
		return (
			<Card state="info">
				<div className="w-full h24 text-center">
					<h2 className="text-2xl mt-1 font-semibold">Info</h2>
					<p className="text-gray-600">This card has a info state.</p>
				</div>
			</Card>
		);
	},
};

const Success: StoryObj = {
	render: function Render() {
		return (
			<Card state="success">
				<div className="w-full h24 text-center">
					<h2 className="text-2xl mt-1 font-semibold">Succes</h2>
					<p className="text-gray-600">This card has a success state.</p>
				</div>
			</Card>
		);
	},
};

const Shadow: StoryObj = {
	render: function Render() {
		return (
			<Card state="neutral" hasShadow>
				<div className="w-full h24 text-center text-center">
					<h2 className="text-2xl mt-1 font-semibold">Shadow</h2>
					<p className="text-gray-600">This card has a shadow.</p>
				</div>
			</Card>
		);
	},
};

const Borders: StoryObj = {
	render: function Render() {
		return (
			<div className="grid grid-rows-3 gap-y-4">
				<Card borderRadius="sm">
					<div className="w-full h24 text-center">
						<h2 className="text-2xl mt-1 font-semibold">SM border radius</h2>
						<p className="text-gray-600">
							This card has a small border radius.
						</p>
					</div>
				</Card>
				<Card borderRadius="md">
					<div className="w-full h24 text-center">
						<h2 className="text-2xl mt-1 font-semibold">MD border radius</h2>
						<p className="text-gray-600">
							This card has a medium border radius.
						</p>
					</div>
				</Card>
				<Card borderRadius="lg">
					<div className="w-full h24 text-center">
						<h2 className="text-2xl mt-1 font-semibold">LG border radius</h2>
						<p className="text-gray-600">
							This card has a large border radius.
						</p>
					</div>
				</Card>
			</div>
		);
	},
};

export { Image, Neutral, Info, Success, Shadow, Borders };
