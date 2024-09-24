import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Filter } from ".";

describe("Filter component", () => {
	const mockProps = {
		min: 100,
		max: 500,
		currentMin: 150,
		currentMax: 300,
		onChange: vi.fn(),
	};

	it("renders initial state (closed)", () => {
		render(<Filter {...mockProps} />);

		expect(screen.getByText("Find your heroes")).toBeInTheDocument();
		expect(screen.queryByText("Your search")).not.toBeInTheDocument(); // Hidden initially
	});

	it("opens filter panel on button click", () => {
		render(<Filter {...mockProps} />);

		fireEvent.click(screen.getByRole("button", { name: /Find/i }));

		expect(screen.getByText("Your search")).toBeInTheDocument();
	});

	it("closes filter panel on close button click", () => {
		render(<Filter {...mockProps} />);
		fireEvent.click(screen.getByRole("button", { name: /Find/i }));

		expect(screen.getByText("Your search")).toBeInTheDocument();

		fireEvent.click(screen.getByRole("button", { name: /Close/i }));

		expect(screen.queryByText("Your search")).not.toBeInTheDocument(); // Hidden again
	});
});
