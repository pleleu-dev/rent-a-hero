import {
	Filter,
	Headings,
	SetOfThreeList,
	filterAndCreateSetsOfThree,
	sortByTotalBuyIn,
} from "@wnmx-poker/tournament/";
import { useDeferredValue, useEffect, useState } from "react";

import { Card } from "@wnmx/ui";

import type { SetOfThree, Tournament } from "@wnmx-poker/tournament/";

const MIN = 1;
const MAX = 500;
const LIST_SIZE = 350; // First 350 tournaments

const TournamentList = ({ data }: { data: Tournament[] }) => {
	const [currentMin, setCurrentMin] = useState(MIN);
	const [currentMax, setCurrentMax] = useState(100);

	const [tournaments, setTournaments] = useState<SetOfThree[]>([]);

	const deferredTournament = useDeferredValue(tournaments);

	useEffect(() => {
		const transformData = async () => {
			const filteredAndSortedData = await filterAndCreateSetsOfThree(
				data,
				currentMin,
				currentMax,
				LIST_SIZE,
			);

			setTournaments(filteredAndSortedData.sort(sortByTotalBuyIn));
		};

		const start = performance.now();
		transformData();
		const end = performance.now();
		console.log(`Filter execution time: ${end - start} ms`);
	}, [data, currentMin, currentMax]);
	return (
		<>
			<Filter
				min={MIN}
				max={MAX}
				currentMin={currentMin}
				currentMax={currentMax}
				onChange={({ min, max }) => {
					setCurrentMin(min);
					setCurrentMax(max);
				}}
			/>
			<Headings />
			{deferredTournament.length === 0 ? (
				<Card
					className="flex justify-center content-center p-12 h-28"
					borderRadius="md"
				>
					<p className="text-base">Chargement des tournois...</p>
				</Card>
			) : (
				<SetOfThreeList setsOfThree={deferredTournament} />
			)}
		</>
	);
};

export { TournamentList };
