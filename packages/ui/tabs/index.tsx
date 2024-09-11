import style from "./index.module.css";

const Tabs = ({ children }: React.PropsWithChildren) => {
	return <nav className={style.tabs}>{children}</nav>;
};
export { Tabs };
