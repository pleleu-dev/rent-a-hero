import { useCallback, useRef, useState } from "react";

type UseMultiSliderProps = {
	min: number;
	max: number;
	currentMin: number;
	currentMax: number;
};

const useMultiRangeSlider = ({
	min,
	max,
	currentMin,
	currentMax,
}: UseMultiSliderProps) => {
	const [minVal, setMinVal] = useState(currentMin || min);
	const [maxVal, setMaxVal] = useState(currentMax || max);
	const minValRef: React.MutableRefObject<HTMLInputElement | null> =
		useRef(null);
	const maxValRef: React.MutableRefObject<HTMLInputElement | null> =
		useRef(null);

	const range: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

	const getPercent = useCallback(
		(value: number) => Math.round(((value - min) / (max - min)) * 100),
		[min, max],
	);

	// Set width of the range to decrease from the left side
	const updateMinRange = (minVal: number) => {
		if (maxValRef.current) {
			const minPercent = getPercent(minVal);
			const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

			if (range.current) {
				range.current.style.left = `${minPercent}%`;
				range.current.style.width = `${maxPercent - minPercent}%`;
			}
			if (minValRef.current) {
				minValRef.current.value = `${minVal}`;
			}

			setMinVal(minVal);
		}
	};

	// Set width of the range to decrease from the right side
	const updateMaxRange = (maxVal: number) => {
		if (minValRef.current) {
			const minPercent = getPercent(+minValRef.current.value);
			const maxPercent = getPercent(maxVal);

			if (range.current) {
				range.current.style.width = `${maxPercent - minPercent}%`;
			}
			if (maxValRef.current) {
				maxValRef.current.value = `${maxVal}`;
			}

			setMaxVal(maxVal);
		}
	};

	return {
		minVal,
		maxVal,
		minValRef,
		maxValRef,
		range,
		updateMinRange,
		updateMaxRange,
	};
};

export { useMultiRangeSlider };
