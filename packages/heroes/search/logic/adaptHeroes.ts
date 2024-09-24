import { Country } from "../types";
import type { Hero, HeroAPI } from "../types";

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

/**
 * @description: Adapt the API response to the Hero type
 * @param t: HeroAPI
 * @returns Hero
 */

const adaptHero = (t: HeroAPI): Hero => ({
	id: t.heroId.toString(),
	name: t.name,
	isTopHero: t.highlighted || false,
	startDateLabel: formatDate(t.startDate),
	startDate: new Date(t.startDate),
	nbPlayers: t.nbPlayers,
	archenemies: t.archenemies,
	powers: t.powers,
	limit: t.limit,
	price: t.price,
	flag: isCountry(t.flag) ? t.flag : Country.fr,
});

export { adaptHero };
