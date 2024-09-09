import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useMultiRangeSlider } from "./useMultiRangeSlider";

describe("useMultiRangeSlider hook", () => {
	it("initializes values correctly", () => {
		const { result } = renderHook(() =>
			useMultiRangeSlider({
				min: 100,
				max: 500,
				currentMin: 200,
				currentMax: 400,
			}),
		);

		expect(result.current.minVal).toBe(200);
		expect(result.current.maxVal).toBe(400);
	});

	it("updates min value on updateMinRange", async () => {
		const { result } = renderHook(() =>
			useMultiRangeSlider({
				min: 100,
				max: 500,
				currentMin: 200,
				currentMax: 400,
			}),
		);

		result.current.minValRef.current = { value: "200" } as HTMLInputElement;
		result.current.maxValRef.current = { value: "400" } as HTMLInputElement;

		expect(result.current.minVal).toBe(200);

		result.current.updateMinRange(300);

		await waitFor(() => {
			expect(result.current.minVal).toBe(300);
		});
	});

	it("updates max value on updateMaxRange", async () => {
		const { result } = renderHook(() =>
			useMultiRangeSlider({
				min: 100,
				max: 500,
				currentMin: 200,
				currentMax: 400,
			}),
		);

		result.current.minValRef.current = { value: "200" } as HTMLInputElement;
		result.current.maxValRef.current = { value: "400" } as HTMLInputElement;

		expect(result.current.maxVal).toBe(400);

		result.current.updateMaxRange(350);

		await waitFor(() => {
			expect(result.current.maxVal).toBe(350);
		});
	});

	it("updates range style and width on updateMinRange and updateMaxRange", async () => {
		const { result } = renderHook(() =>
			useMultiRangeSlider({
				min: 0,
				max: 100,
				currentMin: 20,
				currentMax: 40,
			}),
		);

		result.current.minValRef.current = { value: "20" } as HTMLInputElement;
		result.current.maxValRef.current = { value: "40" } as HTMLInputElement;
		result.current.range.current = {
			style: {
				left: "",
				width: "",
			},
		} as HTMLDivElement;

		result.current.updateMinRange(30);

		await waitFor(() => {
			expect(result.current.range.current?.style.left).toBe("30%");
			expect(result.current.range.current?.style.width).toBe("10%");
		});

		result.current.updateMaxRange(50);

		await waitFor(() => {
			expect(result.current.range.current?.style.width).toBe("20%");
		});
	});
});
