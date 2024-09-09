import { Card } from "@wnmx/ui";
import { CardGrid } from "../shared/CardGrid";

import style from "./index.module.css";

const Headings = () => {
	return (
		<Card borderRadius="sm" className={style.headings}>
			<CardGrid>
				<span className={style.text}>Début</span>
				<span className={style.text}>Nom</span>
				<span className={style.text}>Jeu</span>
				<span className={style.text}>Jrs.</span>
				<span className={style.text}>Buy-in</span>
				<span className={style.text}>Dotation</span>
			</CardGrid>
		</Card>
	);
};
export { Headings };
