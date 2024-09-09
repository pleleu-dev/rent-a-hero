import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MultiRangeSlider } from ".";

describe("MultiRangeSlider component", () => {
	it("renders initial values correctly", () => {
		const min = 100;
		const max = 500;
		const currentMin = 200;
		const currentMax = 400;
		const onChange = vi.fn(); // Mock onChange handler

		render(
			<MultiRangeSlider
				min={min}
				max={max}
				currentMin={currentMin}
				currentMax={currentMax}
				onChange={onChange}
			/>,
		);

		expect(screen.getByText(`${currentMin} €`)).toBeInTheDocument();
		expect(screen.getByText(`${currentMax} €`)).toBeInTheDocument();
	});

	// TODO : Consider adding e2e tests for draging
});
