import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Content } from ".";

import style from "./index.module.css";

describe("Content component", () => {
	it("renders children correctly", () => {
		const children = <div>Content goes here</div>;
		render(<Content>{children}</Content>);
		expect(screen.getByText("Content goes here")).toBeInTheDocument();
	});

	it("applies the correct className", () => {
		render(<Content />);
		expect(screen.getByRole("main")).toHaveClass(style.content);
	});
});
