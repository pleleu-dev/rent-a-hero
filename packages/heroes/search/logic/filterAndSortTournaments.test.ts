import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { filterAndCreateSetsOfThree, sortByTotalPrice } from ".";
import { mockHero1, mockHero2, mockHero3 } from "../__mocks__/heroes";

import { mockSetsOfThree } from "../__mocks__/setOfThree";
import type { Hero, SetOfThree } from "../types";

const mockHerosWithOutOfRangePrice: Hero[] = [
	mockHero1,
	mockHero2,
	mockHero3,
	{
		...mockHero1,
		id: "14",
		price: 300,
	},
];

const mockHerosNotAvailableOnTheSameDay: Hero[] = [
	mockHero1,
	mockHero2,
	mockHero3,

	{
		...mockHero1,
		id: "14",
		startDate: new Date(mockHero1.startDate.getTime() + 1000 * 60 * 30 * 24),
	},
];

const mockHeros = [mockHero1, mockHero2, mockHero3];

beforeEach(() => {
	vi.useFakeTimers();
});

afterEach(() => {
	vi.restoreAllMocks();
});

describe("filterAndCreateSetsOfThree", () => {
	it("returns empty array for empty data", async () => {
		const result = filterAndCreateSetsOfThree([], 100, 200, 3);
		vi.runAllTimers();
		expect(await result).toEqual([]);
	});

	it("returns expected array with all heroes", async () => {
		const result = filterAndCreateSetsOfThree(mockHeros, 1, 400, 3);
		await vi.runAllTimersAsync();
		expect(await result).toEqual(mockSetsOfThree);
	});

	it("filters heroes based on price range", async () => {
		const result = filterAndCreateSetsOfThree(
			mockHerosWithOutOfRangePrice,
			1,
			330,
			3,
		);

		await vi.runAllTimersAsync();
		expect(await result).toEqual(mockSetsOfThree);
	});

	it("filters heroes based on start time", async () => {
		const result = filterAndCreateSetsOfThree(
			mockHerosNotAvailableOnTheSameDay,
			1,
			330,
			3,
		);
		await vi.runAllTimersAsync();
		expect(await result).toEqual(mockSetsOfThree);
	});
});

describe("sortByTotalPrice", () => {
	it("sorts sets of three by total price (ascending)", () => {
		const set1 = {
			id: "1",
			totalPrice: 150,
			heroes: [],
		} as unknown as SetOfThree;
		const set2 = {
			id: "2",
			totalPrice: 200,
			heroes: [],
		} as unknown as SetOfThree;
		const set3 = {
			id: "3",
			totalPrice: 100,
			heroes: [],
		} as unknown as SetOfThree;

		const unsorted = [set2, set1, set3];
		const sorted = unsorted.sort(sortByTotalPrice);

		expect(sorted).toEqual([set3, set1, set2]);
	});
});
