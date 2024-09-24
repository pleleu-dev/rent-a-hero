import { Card, MultiRangeSlider } from "@rah/ui";
import cls from "classnames";

import { useState } from "react";
import style from "./index.module.css";

type FilterProps = {
	min: number;
	max: number;
	currentMin: number;
	currentMax: number;
	className?: string;
	onChange: (value: { min: number; max: number }) => void;
};

const Filter = ({
	min,
	max,
	currentMin,
	currentMax,
	onChange,
	className = "",
}: FilterProps) => {
	const [showFilter, setShowFilter] = useState(false);

	if (!showFilter) {
		return (
			<Card
				as="button"
				tabIndex={0}
				borderRadius="sm"
				className={cls(style.filter, className)}
				onClick={() => setShowFilter(true)}
			>
				<span className={cls("icon-search", style.search)} />
				Find your heroes
			</Card>
		);
	}

	return (
		<Card
			borderRadius="sm"
			className={cls(style.filter, style.filterBox, className)}
		>
			<button
				type="button"
				tabIndex={0}
				onClick={() => setShowFilter(false)}
				className={cls(style.close, "icon-close")}
				aria-label="Close search panel"
			/>
			<p className={style.title}>Your search</p>
			<label className={style.label}>Budget :</label>
			<MultiRangeSlider
				className={style.rangeSlider}
				min={min}
				max={max}
				currentMin={currentMin}
				currentMax={currentMax}
				onChange={onChange}
			/>
		</Card>
	);
};
export { Filter };
