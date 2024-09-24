import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SetOfThreeList } from ".";
import { mockSetsOfThree } from "../__mocks__/setOfThree";

import style from "./index.module.css";

describe("SetOfThreeList component", () => {
	it("renders children correctly", () => {
		const { container } = render(
			<SetOfThreeList setsOfThree={mockSetsOfThree} />,
		);

		const total = container.querySelector(`.${style.totalBuyIn}`);

		expect(total?.textContent?.replace(/\u00a0/g, " ")).toBe(
			"Total price: 320 €",
		);
		expect(screen.getByText("Hero 1")).toBeInTheDocument();
	});

	it("applies the correct className", () => {
		const { container } = render(<SetOfThreeList />);
		const list = container.firstElementChild;
		expect(list).toHaveClass(style.setOfThreeList);
	});

	it("applies custom className", () => {
		const customClass = "my-custom-list";
		const { container } = render(<SetOfThreeList className={customClass} />);
		const list = container.firstElementChild;
		expect(list).toHaveClass(customClass);
	});
});
