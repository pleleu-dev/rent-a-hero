import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tabs } from ".";

import style from "./index.module.css";

describe("Tabs component", () => {
	it("renders children correctly", () => {
		const children = <div>Tab 1</div>;
		render(<Tabs>{children}</Tabs>);
		expect(screen.getByText("Tab 1")).toBeInTheDocument();
	});

	it("applies the correct className", () => {
		render(<Tabs />);
		expect(screen.getByRole("navigation")).toHaveClass(style.tabs);
	});
});
