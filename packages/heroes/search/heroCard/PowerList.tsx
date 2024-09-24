import cls from "classnames";
import style from "./PowerList.module.css";

type PowersProps = {
	className?: string;
	list: string[];
};

const PowerList = ({ className = "", list }: PowersProps) => {
	return (
		<div className={cls(style.powerList, className)}>
			{list.map((p, i) => {
				return (
					<span key={p}>
						{i === 0 ? "" : " / "}
						{p}
					</span>
				);
			})}
		</div>
	);
};
export { PowerList };
