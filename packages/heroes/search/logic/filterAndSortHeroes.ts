import type { Hero, SetOfThree } from "../types";

const promisify = <T>(fn: () => T): Promise<T> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(fn());
		}, 5);
	});
};

const adapt = (
	data: (Hero | undefined)[],
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
				// Check if the heroes total price are within the range
				const totalPrice = first.price + second.price + third.price;

				if (totalPrice > max || totalPrice < min) {
					break;
				}

				// Check if the heroes availablity time are less than 1 day apart
				const diff = Math.max(
					second.startDate.getTime() - first.startDate.getTime(),
					third.startDate.getTime() - second.startDate.getTime(),
				);

				if (diff < 24 * 60 * 60 * 1000) {
					const id = `${first.id}-${second.id}-${third.id}`;

					setsOfThree.push({
						id,
						totalPrice,
						heroes: [first, second, third],
					});
				}
			}
		}
	}
	return setsOfThree;
};

/**
 * Filter and create sets of three algorithm :
 * @Description: Based on the data of the first 350 heroes on the platform,
 *  - the user would like to find all sets of three heroes that he can rent for a day.
 *  - in with a budget between min and max.
 *  - It is not possible to participate in heroes that start less than 1 hour apart.
 *
 *  for performance reasons, the algorithm is divided into batches.
 *
 *  @param data: Array of heroes
 *  @param min: Minimum budget
 *  @param max: Maximum budget
 *  @param rangeMin: Start of the range
 *  @param rangeMax: End of of the range
 *  @param size: Number of heroes
 */

const filterAndCreateSetsOfThree = async (
	data: Hero[],
	min: number,
	max: number,
	size: number,
): Promise<SetOfThree[]> => {
	// Batches can be fine tuned to improve performance
	// By changing the batchLength value, and the transform function timeout value
	// by default the batchLength is set to number of heroes in the data

	const SET_SIZE = 3;
	const batchLength = data.length;

	const batchSize = (i: number) => (i + 1) * Math.ceil(size / batchLength);

	// The number of element to iterate (size) should be greater than the set size
	const minSize = Math.max(size, SET_SIZE);

	const batch = Array.from({ length: batchLength }, (_, i) =>
		promisify<SetOfThree[]>(() =>
			adapt(data, min, max, minSize, i, batchSize(i)),
		),
	);

	const result = await Promise.all(batch);

	return result.flat();
};

const sortByTotalPrice = (a: SetOfThree, b: SetOfThree) =>
	a.totalPrice - b.totalPrice;

export { filterAndCreateSetsOfThree, sortByTotalPrice };
