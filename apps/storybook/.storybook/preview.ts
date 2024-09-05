// @ts-ignore : this import will add the theme to the storybook preview
import { theme } from "@wnmx/ui";
import "../src/styles/global.css";

import {
	INITIAL_VIEWPORTS,
	MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";

import type { Preview } from "@storybook/react";

const preview: Preview = {
	parameters: {
		layout: "fullscreen",
		viewport: {
			viewports: {
				...INITIAL_VIEWPORTS,
				...MINIMAL_VIEWPORTS,
				custom: {
					name: "Custom",
					styles: {
						height: "100%",
						width: "768px",
					},
					type: "mobile",
				},
			},
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
