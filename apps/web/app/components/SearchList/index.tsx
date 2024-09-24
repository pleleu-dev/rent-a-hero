import {
	Filter,
	Headings,
	SetOfThreeList,
	filterAndCreateSetsOfThree,
	sortByTotalPrice,
} from "@rah-heroes/search";
import { useDeferredValue, useEffect, useState } from "react";

import { Card } from "@rah/ui";

import type { Hero, SetOfThree } from "@rah-heroes/search";

const MIN = 100;
const MAX = 5000;
const LIST_SIZE = 1000; // First 350 heroes

const SearchList = ({ data }: { data: Hero[] }) => {
	const [currentMin, setCurrentMin] = useState(MIN);
	const [currentMax, setCurrentMax] = useState(2500);

	const [heroes, setHeroes] = useState<SetOfThree[]>([]);

	const deferredHeroes = useDeferredValue(heroes);

	useEffect(() => {
		const transformData = async () => {
			const filteredAndSortedData = await filterAndCreateSetsOfThree(
				data,
				currentMin,
				currentMax,
				LIST_SIZE,
			);

			setHeroes(filteredAndSortedData.sort(sortByTotalPrice));
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
			{deferredHeroes.length === 0 ? (
				<Card
					className="flex justify-center content-center p-12 h-28"
					borderRadius="md"
				>
					<p className="text-base">Loading heroes...</p>
				</Card>
			) : (
				<>
					<Card as="h3" className="flex justify-center">
						Showing all possible 3 heroes team for given budget. From{" "}
						{LIST_SIZE} heroes. There is&nbsp;<b>{heroes.length}</b>&nbsp;teams available
					</Card>
					<SetOfThreeList setsOfThree={deferredHeroes} />
				</>
			)}
		</>
	);
};

export { SearchList };
