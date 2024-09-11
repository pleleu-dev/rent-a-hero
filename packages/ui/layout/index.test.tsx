import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Layout } from ".";

import style from "./index.module.css";

describe("Layout component", () => {
	it("renders children correctly", () => {
		const children = <div>Content</div>;
		render(<Layout>{children}</Layout>);
		expect(screen.getByText("Content")).toBeInTheDocument();
	});

	it("applies the correct className", () => {
		const { container } = render(<Layout />);
		const layout = container.firstElementChild;
		expect(layout).toHaveClass(style.layout);
	});
});
