export type State = "neutral" | "info" | "success";

export enum Icon {
	wi = "wi",
	ree = "ree",
	mt = "mt",
	mst = "mst",
	mko = "mko",
	m = "m",
	ko = "ko",
	f = "f",
}

export enum Country {
	fr = "FR",
	es = "ES",
	pt = "PT",
	de = "DE",
}

export type Tournament = {
	id: string;
	startDate: Date;
	startDateLabel: string;
	icons: Icon[];
	name: string;
	limit: string;
	nbPlayers: number;
	buyIn: number;
	prizepool: number;
	flag: Country;
	isTopTournament?: boolean;
};

export type SetOfThree = {
	id: string;
	totalBuyIn: number;
	tournaments: [Tournament, Tournament, Tournament];
};

export * from "./api/TournamentApi";
