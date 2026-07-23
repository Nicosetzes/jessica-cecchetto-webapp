import Link from "next/link";
import styles from "./styles.module.css";

const Logo = ({ dark = false }) => {
  return (
    <Link className={styles.logoLink} href="/">
      <span className={`${styles.logoName} ${dark ? styles.dark : ""}`}>
        Jésica Cecchetto
      </span>
      <span className={`${styles.logoSubtitle} ${dark ? styles.dark : ""}`}>
        Psychotherapist
      </span>
    </Link>
  );
};

export default Logo;
