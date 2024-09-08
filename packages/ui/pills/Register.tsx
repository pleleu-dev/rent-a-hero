import cls from "classnames";
import style from "./Register.module.css";

const RegisterPill = ({ className = "" }: { className?: string }) => {
	return (
		<div
			className={cls(style.registerPill, className)}
			role="img"
			aria-label="Inscrit au tournois"
		>
			<span className={cls("icon-tick", style.tick)} />
			<span className={style.in}>IN</span>
		</div>
	);
};
export { RegisterPill };
