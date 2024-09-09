import type { SetOfThree, Tournament } from "../types";

const promisify = <T>(fn: () => T): Promise<T> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(fn());
		}, 5);
	});
};

const adapt = (
	data: (Tournament | undefined)[],
	min: number,
	max: number,
	size: number,
	batchStart: number,
	batchEnd: number,
): SetOfThree[] => {
	const setsOfThree: SetOfThree[] = [];

	for (let i = batchStart; i < batchEnd; i++) {
		for (let j = i + 1; j < size; j++) {
			for (let k = j + 1; k < size; k++) {
				const first = data[i];
				const second = data[j];
				const third = data[k];

				if (!first || !second || !third) {
					break;
				}
				// Check if the tournaments total buy-in are within the range
				const totalBuyIn = first.buyIn + second.buyIn + third.buyIn;

				if (totalBuyIn > max || totalBuyIn < min) {
					break;
				}

				// Check if the tournaments start time are less than 1 hour apart
				const diff = Math.min(
					second.startDate.getTime() - first.startDate.getTime(),
					third.startDate.getTime() - second.startDate.getTime(),
				);

				if (diff >= 3600000) {
					const id = `${first.id}-${second.id}-${third.id}`;

					setsOfThree.push({
						id,
						totalBuyIn,
						tournaments: [first, second, third],
					});
				}
			}
		}
	}
	return setsOfThree;
};

/**
 * Filter and create sets of three algorithm :
 * @Description: Based on the data of the first 350 tournaments on the platform,
 *  - the user would like to find all sets of three tournaments that he can participate
 *  - in with a budget between min and max.
 *  - It is not possible to participate in tournaments that start less than 1 hour apart.
 *
 *  for performance reasons, the algorithm is divided into batches.
 *
 *  @param data: Array of tournaments
 *  @param min: Minimum budget
 *  @param max: Maximum budget
 *  @param rangeMin: Start of the range
 *  @param rangeMax: End of of the range
 */

// const batcher = async<Array<T>>(fn: () => T[], size: number, step = 1): T[
//
// ] => {
// 	const batch = Array.from({ length: size }, (_, i) =>
// 		promisify<typeof fn>(() => fn.bind(i * step, (i + 1) * step)),
// 	);
// 	const result = await Promise.all(batch);
//
// 	return result.flat();
// };
const filterAndCreateSetsOfThree = async (
	data: Tournament[],
	min: number,
	max: number,
	size: number,
): Promise<SetOfThree[]> => {
	// Batches can be fine tuned to improve performance
	// By changing the batches size, and the transform function timeout value

	const SET_SIZE = 3;
	const BATCH_LENGHT = 350;

	const batchSize = (i: number) => (i + 1) * Math.ceil(size / BATCH_LENGHT);

	// The number of element to iterate (size) should be greater than the set size
	const minSize = Math.max(size, SET_SIZE);

	const batch = Array.from({ length: BATCH_LENGHT }, (_, i) =>
		promisify<SetOfThree[]>(() =>
			adapt(data, min, max, minSize, i, batchSize(i)),
		),
	);

	const result = await Promise.all(batch);

	return result.flat();
};

const sortByTotalBuyIn = (a: SetOfThree, b: SetOfThree) =>
	a.totalBuyIn - b.totalBuyIn;

export { filterAndCreateSetsOfThree, sortByTotalBuyIn };
