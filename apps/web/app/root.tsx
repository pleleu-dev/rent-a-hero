import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

import { Content, Navigation, Layout as PageLayout } from "@rah/ui";
import { TabBar } from "./components/TabBar";
import "./tailwind.css";

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return (
		<PageLayout>
			<Navigation />
			<Content>
				<Outlet />
			</Content>
			<TabBar />
		</PageLayout>
	);
}
