import type { SetOfThree } from "../types";
import {
	mockTournament1,
	mockTournament2,
	mockTournament3,
} from "./tournaments";

const mockSetsOfThree: SetOfThree[] = [
	{
		id: "11-12-13",
		totalBuyIn: 60,
		tournaments: [mockTournament1, mockTournament2, mockTournament3],
	},
];

export { mockSetsOfThree };
