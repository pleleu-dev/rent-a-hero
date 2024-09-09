import style from "./index.module.css";

const Content = ({ children }: React.PropsWithChildren) => {
	return <main className={style.content}>{children}</main>;
};
export { Content };
