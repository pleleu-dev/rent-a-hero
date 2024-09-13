import type { Country, Icon, Tournament } from "../types";

const mockTournament1: Tournament = {
	id: "11",
	name: "Tournament 1",
	startDate: new Date("December 17, 2026 03:24:00"),
	startDateLabel: "03/01/2025",
	icons: ["ree"] as Icon[],
	limit: "NLHE",
	nbPlayers: 100,
	buyIn: 10,
	prizepool: 1000,
	flag: "FR" as Country,
};

const mockTournament2: Tournament = {
	id: "12",
	name: "Tournament 2",
	startDate: new Date("December 17, 2026 05:24:00"),
	startDateLabel: "01/01/2025",
	icons: ["ree"] as Icon[],
	limit: "NLHE",
	nbPlayers: 62,
	buyIn: 20,
	prizepool: 10000,
	flag: "DE" as Country,
};

const mockTournament3: Tournament = {
	id: "13",
	name: "Tournament 3",
	startDate: new Date("December 17, 2026 09:24:00"),
	startDateLabel: "01/02/2025",
	icons: ["ree"] as Icon[],
	limit: "NLHE",
	nbPlayers: 10,
	buyIn: 30,
	prizepool: 12000,
	flag: "FR" as Country,
};

export { mockTournament1, mockTournament2, mockTournament3 };
