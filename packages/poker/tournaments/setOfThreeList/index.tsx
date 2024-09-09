import cls from "classnames";
import { useRef } from "react";
import { ViewportList } from "react-viewport-list";
import { Registration } from "../registration";

import style from "./index.module.css";

import { MoneyPill } from "@wnmx/ui";
import type { SetOfThree } from "../types";

type SetOfThreeListProps = {
	className?: string;
	setsOfThree?: SetOfThree[];
};

const SetOfThreeList = ({
	setsOfThree = [],
	className = "",
}: SetOfThreeListProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const listRef = useRef(null);
	return (
		<div ref={ref} className={cls(style.setOfThreeList, className)}>
			<ViewportList ref={listRef} viewportRef={ref} items={setsOfThree}>
				{(item) => (
					<div key={item.id} className={style.tournaments}>
						<div className={style.totalBuyIn}>
							Total buy-in:&nbsp;
							<MoneyPill
								className={style.pill}
								amount={item.totalBuyIn}
								currency="€"
							/>
						</div>
						{item.tournaments.map((tournament) => (
							<Registration key={tournament.id} tournament={tournament} />
						))}
					</div>
				)}
			</ViewportList>
		</div>
	);
};
export { SetOfThreeList };
