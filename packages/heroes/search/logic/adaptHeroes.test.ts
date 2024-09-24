import { describe, expect, it } from "vitest";
import { mockHeroApi } from "../__mocks__/APIHeroes";
import { adaptHero } from "./adaptHeroes";

describe("adaptHero", () => {
	it("returns expected result", () => {
		const result = adaptHero(mockHeroApi);
		expect(result).toEqual({
			archenemies: 10,
			flag: "PT",
			powers: ["mst", "ree"],
			id: "689900738",
			isTopHero: false,
			limit: "NLHE",
			name: "Monster Stack",
			nbPlayers: 68,
			price: 413,
			startDate: new Date("2023-09-18T00:00:00.000Z"),
			startDateLabel: "18/09/2023",
		});
	});
});
