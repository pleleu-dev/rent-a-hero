import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { filterAndCreateSetsOfThree, sortByTotalBuyIn } from ".";
import {
	mockTournament1,
	mockTournament2,
	mockTournament3,
} from "../__mocks__/tournaments";

import { mockSetsOfThree } from "../__mocks__/setOfThree";
import type { SetOfThree, Tournament } from "../types";

const mockTournamentsWithOutOfRangeBuyIn: Tournament[] = [
	mockTournament1,
	mockTournament2,
	mockTournament3,
	{
		...mockTournament1,
		id: "14",
		buyIn: 300,
	},
];

const mockTournamentsWithCloseStartTimes: Tournament[] = [
	mockTournament1,
	mockTournament2,
	mockTournament3,

	{
		...mockTournament1,
		id: "14",
		startDate: new Date(mockTournament1.startDate.getTime() + 1000 * 60 * 30),
	},
];

const mockTournaments = [mockTournament1, mockTournament2, mockTournament3];

beforeEach(() => {
	vi.useFakeTimers();
});

afterEach(() => {
	vi.restoreAllMocks();
});

function executeAfterTwoHours(func: () => void) {
	return new Promise((resolve) => {
		setTimeout(() => resolve(func()), 1000 * 60 * 60 * 2); // 2 hours
	});
}

describe("filterAndCreateSetsOfThree", () => {
	it("should execute the function", async () => {
		const mock = () => ["test"];
		const result = executeAfterTwoHours(mock);
		vi.runAllTimers();
		expect(["test"]).toEqual(await result);
	});

	it("returns empty array for empty data", async () => {
		const result = filterAndCreateSetsOfThree([], 100, 200, 3);
		vi.runAllTimers();
		expect(await result).toEqual([]);
	});

	it("returns expected array with all tournaments", async () => {
		const result = filterAndCreateSetsOfThree(mockTournaments, 1, 200, 3);
		await vi.runAllTimersAsync();
		expect(await result).toEqual(mockSetsOfThree);
	});

	it("filters tournaments based on buy-in range", async () => {
		const result = filterAndCreateSetsOfThree(
			mockTournamentsWithOutOfRangeBuyIn,
			1,
			200,
			3,
		);

		await vi.runAllTimersAsync();
		expect(await result).toEqual(mockSetsOfThree);
	});

	it("filters tournaments based on start time", async () => {
		const result = filterAndCreateSetsOfThree(
			mockTournamentsWithCloseStartTimes,
			1,
			200,
			3,
		);
		await vi.runAllTimersAsync();
		expect(await result).toEqual(mockSetsOfThree);
	});
});

describe("sortByTotalBuyIn", () => {
	it("sorts sets of three by total buy-in (ascending)", () => {
		const set1 = {
			id: "1",
			totalBuyIn: 150,
			tournaments: [],
		} as unknown as SetOfThree;
		const set2 = {
			id: "2",
			totalBuyIn: 200,
			tournaments: [],
		} as unknown as SetOfThree;
		const set3 = {
			id: "3",
			totalBuyIn: 100,
			tournaments: [],
		} as unknown as SetOfThree;

		const unsorted = [set2, set1, set3];
		const sorted = unsorted.sort(sortByTotalBuyIn);

		expect(sorted).toEqual([set3, set1, set2]);
	});
});
