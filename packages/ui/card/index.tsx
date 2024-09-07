import card from "./index.module.css";

interface CardProps {
	hasShadow?: boolean;
	borderRadius?: "sm" | "md" | "lg";
	state?: "neutral" | "info" | "success";
	style?: React.CSSProperties;
}
const Card = ({
	hasShadow = false,
	borderRadius = "sm",
	state = "neutral",
	style = {},
	children,
}: React.PropsWithChildren<CardProps>) => {
	const shadow = hasShadow ? card.shadow : "";
	const backgroundAndBorder = card[state];
	const borderRadiusStyle = card[`rounded-${borderRadius}`];
	const cardStyle = `${card.card} ${style} ${shadow} ${backgroundAndBorder} ${borderRadiusStyle}`;

	return <div className={cardStyle}>{children}</div>;
};
export { Card };
