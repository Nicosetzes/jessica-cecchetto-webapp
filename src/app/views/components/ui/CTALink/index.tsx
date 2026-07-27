import Link from "next/link";
import styles from "./styles.module.css";

type CTALinkProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

const CTALink = ({ href, label, variant = "primary" }: CTALinkProps) => {
  return (
    <Link href={href} className={`${styles.cta} ${styles[variant]}`}>
      {label}
    </Link>
  );
};

export default CTALink;
