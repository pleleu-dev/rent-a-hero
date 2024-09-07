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

		expect(screen.getByText("Recherchez des Tournois")).toBeInTheDocument();
		expect(screen.queryByText("Votre recherche")).not.toBeInTheDocument(); // Hidden initially
	});

	it("opens filter panel on button click", () => {
		render(<Filter {...mockProps} />);

		fireEvent.click(screen.getByRole("button", { name: /Recherchez/i }));

		expect(screen.getByText("Votre recherche")).toBeInTheDocument();
	});

	it("closes filter panel on close button click", () => {
		render(<Filter {...mockProps} />);
		fireEvent.click(screen.getByRole("button", { name: /Recherchez/i }));

		expect(screen.getByText("Votre recherche")).toBeInTheDocument();

		fireEvent.click(screen.getByRole("button", { name: /Fermer/i }));

		expect(screen.getByText("Recherchez des Tournois")).toBeInTheDocument();
		expect(screen.queryByText("Votre recherche")).not.toBeInTheDocument(); // Hidden again
	});
});
