import cls from "classnames";
import style from "./Country.module.css";

const flag = {
	DE: {
		background: style.DE,
		label: "German hero",
	},
	FR: {
		background: style.FR,
		label: "French hero",
	},
	ES: {
		background: style.ES,
		label: "Spanish hero",
	},
	PT: {
		background: style.PT,
		label: "Portuguese hero",
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
