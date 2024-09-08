import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RegisterPill } from ".";

import style from "./Register.module.css";

describe("RegisterPill component", () => {
	it("renders basic structure with default className", () => {
		const { container } = render(<RegisterPill />);

		// Check for the main container element
		const pill = screen.getByRole("img");
		expect(pill).toBeInTheDocument();
		expect(pill).toHaveClass(style.registerPill);

		// Check for "IN" text
		expect(screen.getByText("IN")).toBeInTheDocument();
		expect(screen.getByText("IN")).toHaveClass(style.in);

		const tickIcon = container.querySelector("span.icon-tick");

		// Check for tick icon
		expect(tickIcon).toBeInTheDocument();
	});

	it("renders additional className prop", () => {
		const customClassName = "my-custom-class";
		render(<RegisterPill className={customClassName} />);

		expect(screen.getByRole("img")).toHaveClass(customClassName);
	});
});
