import style from "./index.module.css";

const Content = ({ children }: React.PropsWithChildren) => {
	return <div className={style.content}>{children}</div>;
};
export { Content };
