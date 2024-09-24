import cls from "classnames";
import { useRef } from "react";
import { ViewportList } from "react-viewport-list";
import { HeroCard } from "../heroCard";

import style from "./index.module.css";

import { MoneyPill } from "@rah/ui";
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
					<div key={item.id} className={style.heroes}>
						<div className={style.totalBuyIn}>
							Total price:&nbsp;
							<MoneyPill
								className={style.pill}
								amount={item.totalPrice}
								currency="€"
							/>
						</div>
						{item.heroes.map((hero) => (
							<HeroCard key={hero.id} hero={hero} />
						))}
					</div>
				)}
			</ViewportList>
		</div>
	);
};
export { SetOfThreeList };
