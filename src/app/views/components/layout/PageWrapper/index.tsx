import styles from "./styles.module.css";

type PageWrapperProps = {
  children: React.ReactNode;
};

const PageWrapper = ({ children }: PageWrapperProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default PageWrapper;
