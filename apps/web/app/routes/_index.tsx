import { useLoaderData } from "@remix-run/react";

import { json } from "@remix-run/node";
import { adaptTournament } from "@wnmx-poker/tournament";
import { Card } from "@wnmx/ui";
import data from "../assets/data.json";
import { TournamentList } from "../components/TournamentList";

import type { TournamentAPI } from "@wnmx-poker/tournament";

import tournamentImage from "../assets/tournois.jpg";

import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{ title: "Winamax sports | Paris sportifs | Poker en ligne - Winamax" },
		{
			name: "description",
			content:
				"Pariez sur le sport et jouez au poker sur Winamax. Recevez directement jusqu'à 100 € pour parier sur tous les sports et bénéficiez d'un bonus poker jusqu'à 250 € !",
		},
	];
};
export async function loader() {
	return json(data);
}

export default function Index() {
	const result = useLoaderData() as TournamentAPI[];
	const data = result.map(adaptTournament); // Adapt the data to the tournament type

	return (
		<>
			<Card className="overflow-hidden h-[278px]" borderRadius="md">
				<img
					src={tournamentImage}
					alt="Tournois de poker"
					width="100%"
					height="auto"
				/>
			</Card>
			<TournamentList data={data} />
		</>
	);
}
