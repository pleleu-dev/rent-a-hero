import { Country, Icon } from "../types";
import type { Tournament } from "../types";
import type { TournamentAPI } from "../types/api/TournamentApi";

function formatDate(date: string): string {
	const givenDate = new Date(date);
	const today = new Date();
	const startOfWeek = new Date(
		today.getFullYear(),
		today.getMonth(),
		today.getDate() - today.getDay(),
	);
	const endOfWeek = new Date(startOfWeek.getTime() + 6 * 24 * 60 * 60 * 1000);

	if (givenDate >= startOfWeek && givenDate <= endOfWeek) {
		return givenDate.toLocaleString("fr-Fr", {
			weekday: "short",
			timeStyle: "short",
		});
	}
	return givenDate.toLocaleDateString("fr-Fr", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	});
}

const isCountry = (x: string): x is Country =>
	Object.values<string>(Country).includes(x);

const isIcon = (x: string): x is Icon =>
	Object.values<string>(Icon).includes(x);

/**
 * @description: Adapt the API response to the Tournament type
 * @param t: TournamentAPI
 * @returns Tournament
 */

const adaptTournament = (t: TournamentAPI): Tournament => ({
	id: t.tournamentId.toString(),
	name: t.name,
	isTopTournament: t.highlighted || false,
	startDateLabel: formatDate(t.startDate),
	startDate: new Date(t.startDate),
	nbPlayers: t.nbPlayers,
	buyIn: t.buyIn,
	icons: t.icons.filter(isIcon),
	limit: t.limit,
	prizepool: t.prizepool,
	flag: isCountry(t.flag) ? t.flag : Country.fr,
});

export { adaptTournament };
