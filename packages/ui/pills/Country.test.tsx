import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CountryPill } from ".";

import style from "./Country.module.css";

describe("CountryPill component", () => {
	it("renders the correct flag and label for a given country", () => {
		const country = "FR";
		render(<CountryPill country={country} />);

		// Check for the main container element
		const pill = screen.getByRole("img");
		expect(pill).toBeInTheDocument();
		expect(pill).toHaveClass(style.countryPill);
		expect(pill).toHaveAttribute("aria-label", style[country].label);

		// Check for the flag background class
		const flagElement = pill.querySelector("span");
		expect(flagElement).toBeInTheDocument();
		expect(flagElement).toHaveClass(style[country]);
	});

	it("applies the correct className prop", () => {
		const customClassName = "my-custom-class";
		render(<CountryPill country="DE" className={customClassName} />);

		expect(screen.getByRole("img")).toHaveClass(customClassName);
	});
});
