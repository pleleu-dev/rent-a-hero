import logo from "../assets/logo.svg";
import style from "./index.module.css";

const Navigation = () => {
	return (
		<header className={style.navigation}>
			<img src={logo} alt="Winamax" width="60" height="60" />
		</header>
	);
};
export { Navigation };
