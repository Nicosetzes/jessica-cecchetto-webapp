import Link from "next/link";
import styles from "./styles.module.css";

type CTALinkProps = {
  href: string;
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

const CTALink = ({
  href,
  label,
  variant = "primary",
  onClick,
}: CTALinkProps) => {
  return (
    <Link
      href={href}
      className={`${styles.cta} ${styles[variant]}`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default CTALink;
