import cls from "classnames";
import style from "./index.module.css";

type State = "neutral" | "info" | "success";

type CardProps<T extends React.ElementType> = {
	as?: T;
	hasShadow?: boolean;
	borderRadius?: "sm" | "md" | "lg";
	state?: State;
	className?: string;
	onClick?: () => void;
};
const Card = <T extends React.ElementType = "div">({
	children,
	as,
	onClick,
	onKeyDown,
	hasShadow = false,
	borderRadius = "sm",
	state = "neutral",
	className = "",
	tabIndex = -1,
}: React.PropsWithChildren<
	CardProps<T> & React.ComponentPropsWithoutRef<T>
>) => {
	const Tag = as || "div";
	const cardStyle = cls(
		{
			[style.shadow as string]: hasShadow,
			[style.neutral as string]: state === "neutral",
			[style.info as string]: state === "info",
			[style.success as string]: state === "success",
		},
		style[`rounded-${borderRadius}`],
		className,
	);

	return (
		<Tag
			tabIndex={tabIndex}
			className={cardStyle}
			onClick={onClick}
			onKeyDown={onKeyDown}
		>
			{children}
		</Tag>
	);
};
export { Card };
