import style from "./CardGrid.module.css";

type CardGridProps = {
	className?: string;
};

const CardGrid = ({
	children,
	className = "",
}: React.PropsWithChildren<CardGridProps>) => {
	const cardGridStyle = `${style.cardGrid} ${className}`;
	return <div className={cardGridStyle}>{children}</div>;
};
export { CardGrid };
