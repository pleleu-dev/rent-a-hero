import { describe, expect, it } from "vitest";
import { mockTournamentApi } from "../__mocks__/APITournaments";
import { adaptTournament } from "./adaptTournaments";

describe("adaptTournament", () => {
	it("returns expected result", () => {
		const result = adaptTournament(mockTournamentApi);
		expect(result).toEqual({
			buyIn: 10,
			flag: "PT",
			icons: ["mst", "ree"],
			id: "689900738",
			isTopTournament: false,
			limit: "NLHE",
			name: "Monster Stack",
			nbPlayers: 68,
			prizepool: 413,
			startDate: new Date("2023-09-18T00:00:00.000Z"),
			startDateLabel: "18/09/2023",
		});
	});
});
