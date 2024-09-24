import { useLoaderData } from "@remix-run/react";

import { adaptHero } from "@rah-heroes/search";
import { Card } from "@rah/ui";
import { json } from "@remix-run/node";
import data from "../assets/data.json";
import { SearchList } from "../components/SearchList";

import type { HeroAPI } from "@rah-heroes/search";

import rentAHeroImage from "../assets/rentAHero.jpg";

import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{ title: "Rent a hero" },
		{
			name: "description",
			content:
				"Big problems need big heroes. Rent a hero is the place to find the hero you need for your next adventure. Rent a hero now",
		},
	];
};
export async function loader() {
	return json(data);
}

export default function Index() {
	const result = useLoaderData() as HeroAPI[];
	const data = result.map(adaptHero); // Adapt the data to the hero type

	return (
		<>
			<Card className="overflow-hidden h-[278px]" borderRadius="md">
				<img
					src={rentAHeroImage}
					alt="Find your heroes"
					width="100%"
					height="auto"
				/>
			</Card>
			<SearchList data={data} />
		</>
	);
}
