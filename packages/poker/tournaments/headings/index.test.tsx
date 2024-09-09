import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Headings } from ".";
import style from "./index.module.css";

describe("Headings component", () => {
	it("renders headings correctly", () => {
		render(<Headings />);

		// Check for each heading text element
		expect(screen.getByText("Début")).toBeInTheDocument();
		expect(screen.getByText("Nom")).toBeInTheDocument();
		expect(screen.getByText("Jeu")).toBeInTheDocument();
		expect(screen.getByText("Jrs.")).toBeInTheDocument();
		expect(screen.getByText("Buy-in")).toBeInTheDocument();
		expect(screen.getByText("Dotation")).toBeInTheDocument();
	});

	it("applies the correct className", () => {
		const { container } = render(<Headings />);
		const headings = container.firstElementChild;
		expect(headings).toHaveClass(style.headings);
	});
});
