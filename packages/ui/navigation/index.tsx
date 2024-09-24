import logo from "../assets/logo.png";
import style from "./index.module.css";

const Navigation = () => {
	return (
		<header className={style.navigation}>
			<img src={logo} alt="Rent a hero" width="60" height="60" />
		</header>
	);
};
export { Navigation };
