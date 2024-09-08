import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Card } from ".";

import { act } from "react";
import style from "./index.module.css";

describe("Card component", () => {
	it("renders children correctly", () => {
		const children = <p>Card Content</p>;
		render(<Card>{children}</Card>);
		expect(screen.getByText("Card Content")).toBeInTheDocument();
	});

	it("applies default styles", () => {
		const { container } = render(<Card />);
		const card = container.firstElementChild;
		expect(card).toHaveClass(style["rounded-sm"]);
	});

	it("applies custom borderRadius", () => {
		render(<Card borderRadius="md" />);
		const { container } = render(<Card borderRadius="md" />);
		const card = container.firstElementChild;
		expect(card).toHaveClass(style["rounded-md"]);
	});

	it("applies hasShadow class with hasShadow prop", () => {
		const { container } = render(<Card hasShadow />);
		const card = container.firstElementChild;
		expect(card).toHaveClass(style.shadow);
	});

	it("applies state info styles correctly", () => {
		const { container } = render(<Card state="info" />);
		const card = container.firstElementChild;
		expect(card).toHaveClass(style.info);
	});

	it("applies state success styles correctly", () => {
		const { container } = render(<Card state="success" />);
		const card = container.firstElementChild;
		expect(card).toHaveClass(style.success);
	});

	it("applies custom className", () => {
		const customClass = "my-custom-card";
		const { container } = render(<Card className={customClass} />);
		const card = container.firstElementChild;
		expect(card).toHaveClass(customClass);
	});

	it("calls onClick handler on click", () => {
		const mockOnClick = vi.fn();
		const { container } = render(<Card onClick={mockOnClick} />);
		act(() => {
			fireEvent.click(container.firstElementChild as HTMLElement);
		});

		expect(mockOnClick).toHaveBeenCalledTimes(1);
	});
});
