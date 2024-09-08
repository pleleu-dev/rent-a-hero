import cls from "classnames";
import style from "./Money.module.css";

const MoneyPill = ({
	amount,
	currency = "",
	className = "",
}: { amount: number; currency?: string; className?: string }) => {
	return (
		<div className={cls(style.moneyPill, className)}>
			<span className={style.amount}>
				{amount}&nbsp;
				{currency}
			</span>
		</div>
	);
};
export { MoneyPill };
