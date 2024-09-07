import style from "./CardGrid.module.css";

const CardGrid = ({ children }: React.PropsWithChildren) => {
	return <div className={style.container}>{children}</div>;
};
export { CardGrid };
