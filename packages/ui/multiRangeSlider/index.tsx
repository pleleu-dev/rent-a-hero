import cls from "classnames";
import debounce from "lodash.debounce";

import { useEffect, useRef } from "react";
import { MoneyPill } from "../pills";
import style from "./index.module.css";
import { useMultiRangeSlider } from "./useMultiRangeSlider";

type MultiRangeSliderProps = {
	min: number;
	max: number;
	currentMin: number;
	currentMax: number;
	onChange: (value: { min: number; max: number }) => void;
	className?: string;
};

const MultiRangeSlider = ({
	min,
	max,
	currentMin,
	currentMax,
	onChange,
	className = "",
}: MultiRangeSliderProps) => {
	const {
		range,
		maxVal,
		minVal,
		updateMaxRange,
		updateMinRange,
		maxValRef,
		minValRef,
	} = useMultiRangeSlider({
		min,
		max,
		currentMin,
		currentMax,
	});
	const debouncedOnChangeRef = useRef(debounce(onChange, 300));

	useEffect(() => {
		debouncedOnChangeRef.current({ min: minVal, max: maxVal });
	}, [minVal, maxVal]);

	return (
		<div className={cls(style.multiRangeSlider, className)}>
			<MoneyPill className={style.leftValue} amount={minVal} currency="€" />
			<div className={style.slider}>
				<input
					type="range"
					min={min}
					max={max}
					value={minVal}
					ref={minValRef}
					onChange={(event) => {
						const value = Math.min(+event.target.value, maxVal - 1);
						updateMinRange(value);
					}}
					className={cls({
						[style.thumb as string]: true,
						[style.thumbMin as string]: true,
						[style.thumbAbove as string]: minVal > max - 100,
					})}
				/>
				<div className={style.trackContainer}>
					<div className={style.sliderTrack} />
					<div ref={range} className={style.sliderRange} />
				</div>
				<input
					type="range"
					min={min}
					max={max}
					value={maxVal}
					ref={maxValRef}
					onChange={(event) => {
						const value = Math.max(+event.target.value, minVal + 1);
						updateMaxRange(value);
					}}
					className={cls(style.thumb, style.thumbMax)}
				/>
			</div>
			<MoneyPill className={style.leftValue} amount={maxVal} currency="€" />
		</div>
	);
};

export { MultiRangeSlider };
