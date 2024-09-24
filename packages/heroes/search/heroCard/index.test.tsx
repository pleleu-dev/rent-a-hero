import { act, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import userEvent from "@testing-library/user-event"; // For simulating
import { HeroCard } from ".";
import type { Country, Hero } from "../types";

import style from "./index.module.css";

describe("HeroCard component", () => {
	const mockHero: Hero = {
		id: "de",
		startDateLabel: "20/10/2024",
		startDate: new Date("2024-10-20"),
		powers: ["Strong", "Fast"],
		name: "Hero Name",
		limit: "100",
		nbPlayers: 50,
		archenemies: 100,
		price: 200,
		flag: "FR" as Country,
	};

	it("renders basic information correctly (not registered)", () => {
		render(<HeroCard hero={mockHero} />);

		expect(screen.getByText(mockHero.name)).toBeInTheDocument();
		expect(screen.getByText(mockHero.startDateLabel)).toBeInTheDocument();
		expect(screen.getByText(mockHero.limit)).toBeInTheDocument();
		expect(screen.getByText(mockHero.nbPlayers)).toBeInTheDocument();

		const country = screen.getByLabelText("French hero");
		expect(country).toBeInTheDocument();
	});

	it('renders "TOP HERO" for top heroes', () => {
		render(<HeroCard hero={{ ...mockHero, isTopHero: true }} />);

		expect(screen.getByText("TOP HERO")).toBeInTheDocument();
	});

	it("renders register pill on click", async () => {
		const { container } = render(<HeroCard hero={mockHero} />);

		expect(screen.queryByText("IN")).not.toBeInTheDocument();

		const registrationContainer = container.querySelector(
			`.${style.container}`,
		);

		act(() => {
			userEvent.click(registrationContainer as HTMLElement);
		});

		expect(await screen.findByText("IN")).toBeInTheDocument();
	});

	it("registers on Enter key press", async () => {
		const { container } = render(<HeroCard hero={mockHero} />);
		const registrationContainer = container.querySelector(
			`.${style.container}`,
		);

		userEvent.type(registrationContainer as HTMLElement, "{enter}"); // Simulate Enter key press

		expect(await screen.findByText("IN")).toBeInTheDocument();
	});

	it("shows chip animation on registration", async () => {
		const { container } = render(<HeroCard hero={mockHero} />);

		const registrationContainer = container.querySelector(
			`.${style.container}`,
		);

		expect(screen.queryByAltText("Booked hero")).not.toBeInTheDocument(); // Initially not visible

		act(() => {
			userEvent.click(registrationContainer as HTMLElement);
		});

		expect(await screen.findByAltText("Booked hero")).toBeInTheDocument(); // Chip image should be visible
	});
});
