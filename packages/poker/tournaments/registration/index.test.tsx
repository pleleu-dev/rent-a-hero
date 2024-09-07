import { act, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import userEvent from "@testing-library/user-event"; // For simulating
import { Registration } from ".";
import type { Country, Icon, Tournament } from "../types";

import style from "./index.module.css";

describe("Registration component", () => {
	const mockTournament: Tournament = {
		id: "de",
		startDateLabel: "20/10/2024",
		startDate: new Date("2024-10-20"),
		icons: ["ree", "me"] as Icon[],
		name: "Tournament Name",
		limit: "100",
		nbPlayers: 50,
		buyIn: 100,
		prizepool: 200,
		flag: "FR" as Country,
	};

	it("renders basic information correctly (not registered)", () => {
		const { container } = render(<Registration tournament={mockTournament} />);

		expect(screen.getByText(mockTournament.name)).toBeInTheDocument();
		expect(screen.getByText(mockTournament.startDateLabel)).toBeInTheDocument();
		expect(screen.getByText(`${mockTournament.buyIn} €`)).toBeInTheDocument();
		expect(screen.getByText(mockTournament.limit)).toBeInTheDocument();
		expect(screen.getByText(mockTournament.nbPlayers)).toBeInTheDocument();

		const country = screen.getByLabelText("Tournois en français");
		expect(country).toBeInTheDocument();
	});

	it('renders "TOP TOURNOI" for top tournaments', () => {
		render(
			<Registration
				tournament={{ ...mockTournament, isTopTournament: true }}
			/>,
		);

		expect(screen.getByText("TOP TOURNOI")).toBeInTheDocument();
	});

	it("renders register pill on click", async () => {
		const { container } = render(<Registration tournament={mockTournament} />);

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
		const { container } = render(<Registration tournament={mockTournament} />);
		const registrationContainer = container.querySelector(
			`.${style.container}`,
		);

		userEvent.type(registrationContainer as HTMLElement, "{enter}"); // Simulate Enter key press

		expect(await screen.findByText("IN")).toBeInTheDocument();
	});

	it("shows chip animation on registration", async () => {
		const { container } = render(<Registration tournament={mockTournament} />);

		const registrationContainer = container.querySelector(
			`.${style.container}`,
		);

		expect(
			screen.queryByAltText("Vous êtes inscrit à ce tournoi"),
		).not.toBeInTheDocument(); // Initially not visible

		act(() => {
			userEvent.click(registrationContainer as HTMLElement);
		});

		expect(
			await screen.findByAltText("Vous êtes inscrit à ce tournoi"),
		).toBeInTheDocument(); // Chip image should be visible
	});
});
