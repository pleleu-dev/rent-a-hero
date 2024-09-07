import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { IconList } from "./IconList";

import type { Icon } from "../types";
import style from "./IconList.module.css";

describe("IconList component", () => {
	it("renders an empty list with no icons", () => {
		const { container } = render(<IconList list={[]} />);
		expect(container.firstElementChild?.childElementCount).toEqual(0);
	});

	it("renders icons based on the provided list", () => {
		const mockIcons: Icon[] = ["ko", "mko"] as Icon[];
		const { container } = render(<IconList list={mockIcons} />);

		for (const icon of mockIcons) {
			const i = container.querySelector(`.${style.icon}.${style[icon]}`);
			expect(i).toBeInTheDocument();
		}
	});
});
