import { Card } from "@rah/ui";
import { CardGrid } from "../shared/CardGrid";

import style from "./index.module.css";

const Headings = () => {
	return (
		<Card borderRadius="sm" className={style.headings}>
			<CardGrid>
				<span className={style.text}>Availability</span>
				<span className={style.text}>Name</span>
				<span className={style.text}>Team</span>
				<span className={style.text}>Power</span>
				<span className={style.text}>Price</span>
			</CardGrid>
		</Card>
	);
};
export { Headings };
