/* v8 ignore */
export type State = "neutral" | "info" | "success";

export enum Country {
	fr = "FR",
	es = "ES",
	pt = "PT",
	de = "DE",
}

export type Hero = {
	id: string;
	startDate: Date;
	startDateLabel: string;
	powers: string[];
	name: string;
	limit: string;
	nbPlayers: number;
	archenemies: number;
	price: number;
	flag: Country;
	isTopHero?: boolean;
};

export type SetOfThree = {
	id: string;
	totalPrice: number;
	heroes: [Hero, Hero, Hero];
};

export * from "./api/HeroApi";
