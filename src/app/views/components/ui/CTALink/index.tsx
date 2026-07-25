import Link from "next/link";
import styles from "./styles.module.css";

type CTALinkProps = {
  href: string;
  label: string;
};

const CTALink = ({ href, label }: CTALinkProps) => {
  return (
    <Link href={href} className={styles.cta}>
      {label}
    </Link>
  );
};

export default CTALink;
