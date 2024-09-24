import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Headings } from ".";
import style from "./index.module.css";

describe("Headings component", () => {
	it("renders headings correctly", () => {
		render(<Headings />);

		// Check for each heading text element
		expect(screen.getByText("Availability")).toBeInTheDocument();
		expect(screen.getByText("Name")).toBeInTheDocument();
		expect(screen.getByText("Power")).toBeInTheDocument();
		expect(screen.getByText("Team")).toBeInTheDocument();
		expect(screen.getByText("Price")).toBeInTheDocument();
	});

	it("applies the correct className", () => {
		const { container } = render(<Headings />);
		const headings = container.firstElementChild;
		expect(headings).toHaveClass(style.headings);
	});
});
