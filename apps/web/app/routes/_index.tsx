import type { MetaFunction } from "@remix-run/node";
import { Content } from "@ui/content";
import { Layout } from "@ui/layout";
import { Navigation } from "@ui/navigation";
import { Tabs } from "@ui/tabs";

export const meta: MetaFunction = () => {
	return [
		{ title: "Winamax sports | Paris sportifs | Poker en ligne - Winamax" },
		{
			name: "description",
			content:
				"Pariez sur le sport et jouez au poker sur Winamax. Recevez directement jusqu'à 100 € pour parier sur tous les sports et bénéficiez d'un bonus poker jusqu'à 250 € !",
		},
	];
};

export default function Index() {
	return (
		<div className="p-4">
			<Layout>
				<Navigation />
				<Content>
					<h1 className="text-2xl font-bold">Welcome to Winamax</h1>
				</Content>
				<Tabs />
			</Layout>
		</div>
	);
}
