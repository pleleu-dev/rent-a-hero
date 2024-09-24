import type { SetOfThree } from "../types";
import { mockHero1, mockHero2, mockHero3 } from "./heroes";

const mockSetsOfThree: SetOfThree[] = [
	{
		id: "11-12-13",
		totalPrice: 320,
		heroes: [mockHero1, mockHero2, mockHero3],
	},
];

export { mockSetsOfThree };
