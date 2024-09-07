import cls from "classnames";
import style from "./IconList.module.css";

import type { Icon } from "../types";

type IconsProps = {
	className?: string;
	list: Icon[];
};

const IconList = ({ className = "", list }: IconsProps) => {
	return (
		<div className={cls(style.iconList, className)}>
			{list.map((i) => {
				return <span key={i} className={`${style.icon} ${style[i]}`} />;
			})}
		</div>
	);
};
export { IconList };
