import cls from "classnames";
import { Card } from "@wnmx/ui";
import { Registration } from "../registration";

import style from "./index.module.css";

import type { Tournament } from "../types";

type ListProps = {
	className?: string;
	tournaments?: Tournament[];
	loading?: boolean;
	error?: boolean;
};

const List = ({
	loading = true,
	error = false,
	tournaments = [],
	className = "",
}: ListProps) => {
	if (loading) {
		return (
			<Card
				as="div"
				borderRadius="sm"
				className={cls(style.loading, className)}
			>
				Chargement en cours...
			</Card>
		);
	}

	if (error) {
		return (
			<Card as="div" borderRadius="sm" className={cls(style.error, className)}>
				Une erreur est survenue lors du chargement des tournois.
			</Card>
		);
	}

	return (
		<div className={style.success}>
			{tournaments.map((tournament) => (
				<Registration key={tournament.id} tournament={tournament} />
			))}
		</div>
	);
};
export { List };
