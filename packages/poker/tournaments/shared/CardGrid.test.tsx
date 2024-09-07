import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CardGrid } from "./CardGrid";

import style from "./CardGrid.module.css";

describe("CardGrid component", () => {
	it("renders children correctly", () => {
		const children = <div>Card 1</div>;
		render(<CardGrid>{children}</CardGrid>);
		expect(screen.getByText("Card 1")).toBeInTheDocument();
	});

	it("applies the correct className", () => {
		const { container } = render(<CardGrid />);
		expect(container.firstChild).toHaveClass(style.cardGrid);
	});

	it("applies custom className", () => {
		const customClassName = "my-custom-class";
		const { container } = render(<CardGrid className={customClassName} />);
		expect(container.firstChild).toHaveClass(customClassName);
	});
});
