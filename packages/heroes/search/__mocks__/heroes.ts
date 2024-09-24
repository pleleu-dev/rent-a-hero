import type { Country, Hero } from "../types";

const mockHero1: Hero = {
	id: "11",
	name: "Hero 1",
	startDate: new Date("December 17, 2026 03:24:00"),
	startDateLabel: "03/01/2025",
	powers: ["Invisible", "Strong"],
	limit: "NLHE",
	nbPlayers: 100,
	archenemies: 10,
	price: 100,
	flag: "FR" as Country,
};

const mockHero2: Hero = {
	id: "12",
	name: "Hero 2",
	startDate: new Date("December 17, 2026 05:24:00"),
	startDateLabel: "01/01/2025",
	powers: ["Fly", "Strong"],
	limit: "NLHE",
	nbPlayers: 62,
	archenemies: 20,
	price: 100,
	flag: "DE" as Country,
};

const mockHero3: Hero = {
	id: "13",
	name: "Hero 3",
	startDate: new Date("December 17, 2026 09:24:00"),
	startDateLabel: "01/02/2025",
	powers: ["Fly"],
	limit: "NLHE",
	nbPlayers: 10,
	archenemies: 30,
	price: 120,
	flag: "FR" as Country,
};

export { mockHero1, mockHero2, mockHero3 };
