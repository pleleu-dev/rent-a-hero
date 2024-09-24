import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Navigation } from ".";

import logo from "../assets/logo.png";

import style from "./index.module.css";

describe("Navigation component", () => {
	it("renders the logo image", () => {
		render(<Navigation />);

		// Check for the logo image element
		const logoImage = screen.getByAltText("Rent a hero");
		expect(logoImage).toBeInTheDocument();
		expect(logoImage).toHaveAttribute("src", logo); // Assuming logo is a valid image path
		expect(logoImage).toHaveAttribute("width", "60");
		expect(logoImage).toHaveAttribute("height", "60");
	});

	it("applies the correct className", () => {
		render(<Navigation />);

		const navigationElement = screen.getByRole("banner"); // Assuming header has a banner role
		expect(navigationElement).toHaveClass(style.navigation);
	});
});
