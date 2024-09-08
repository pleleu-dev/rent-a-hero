import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MoneyPill } from ".";

describe("MoneyPill component", () => {
	it("renders the amount and currency correctly", () => {
		const amount = 123.45;
		const currency = "EUR";
		render(<MoneyPill amount={amount} currency={currency} />);

		const amountElement = screen.getByText(`${amount} ${currency}`);
		expect(amountElement).toBeInTheDocument();
	});

	it("applies the correct className", () => {
		const customClassName = "my-custom-class";
		const { container } = render(
			<MoneyPill amount={100} className={customClassName} />,
		);

		const pillElement = container.firstElementChild;
		expect(pillElement).toHaveClass(customClassName);
	});

	it("handles missing currency correctly", () => {
		const amount = 50;
		render(<MoneyPill amount={amount} />);

		const amountElement = screen.getByText(`${amount}`);
		expect(amountElement).toBeInTheDocument();
	});
});
