import { Tabs } from "@rah/ui";
import { Link, useLocation } from "@remix-run/react";

const TabBar = () => {
	const location = useLocation();

	const isHome = location.pathname === "/";
	const isReadme = location.pathname === "/readme";

	const homeStyle = isHome ? "icon-home-black" : "icon-home";
	const readmeStyle = isReadme ? "icon-readme-black" : "icon-readme";

	return (
		<Tabs>
			<Link to="/">
				<span className={homeStyle} />
				<span>Home</span>
			</Link>
			<Link to="/readme">
				<span className={readmeStyle} />
				<span>Readme</span>
			</Link>
		</Tabs>
	);
};

export { TabBar };
