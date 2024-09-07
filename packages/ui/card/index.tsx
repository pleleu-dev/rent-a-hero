import style from "./index.module.css";

interface CardProps {
	hasShadow?: boolean;
	borderRadius?: "sm" | "md" | "lg";
	state?: "neutral" | "info" | "success";
}
const Card = ({
	hasShadow = false,
	borderRadius = "sm",
	state = "neutral",
	children,
}: React.PropsWithChildren<CardProps>) => {
	const shadow = hasShadow ? style.shadow : "";
	const backgroundAndBorder = style[state];
	const borderRadiusStyle = style[`rounded-${borderRadius}`];
	const cardStyle = `${style.card} ${shadow} ${backgroundAndBorder} ${borderRadiusStyle}`;

	return <div className={cardStyle}>{children}</div>;
};
export { Card };
