import style from "./index.module.css";

const Layout = ({ children }: React.PropsWithChildren) => {
	return <div className={style.layout}>{children}</div>;
};
export { Layout };
