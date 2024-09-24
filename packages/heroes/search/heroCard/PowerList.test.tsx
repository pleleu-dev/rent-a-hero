import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PowerList } from "./PowerList";

describe("PowerList component", () => {
	it("renders an empty list with no powers", () => {
		const { container } = render(<PowerList list={[]} />);
		expect(container.firstElementChild?.childElementCount).toEqual(0);
	});

	it("renders powers based on the provided list", () => {
		const mockPowers = ["Fly", "Strong"];
		render(<PowerList list={mockPowers} />);

		const fly = screen.getByText("Fly");
		expect(fly).toBeInTheDocument();

		const strong = screen.getByText("/ Strong");
		expect(strong).toBeInTheDocument();
	});
});
