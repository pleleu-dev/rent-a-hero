import cls from "classnames";
import style from "./Country.module.css";

const flag = {
	DE: {
		background: style.DE,
		label: "Tournois en allemand",
	},
	FR: {
		background: style.FR,
		label: "Tournois en français",
	},
	ES: {
		background: style.ES,
		label: "Tournois en espagnol",
	},
	PT: {
		background: style.PT,
		label: "Tournois en portugais",
	},
};

type CountryPillProps = {
	country: "DE" | "FR" | "ES" | "PT";
	className?: string;
};

const CountryPill = ({ country, className = "" }: CountryPillProps) => {
	return (
		<div
			className={cls(style.countryPill, className)}
			role="img"
			aria-label={flag[country].label}
		>
			<span className={cls(flag[country].background, style.flag)} />
		</div>
	);
};
export { CountryPill };
