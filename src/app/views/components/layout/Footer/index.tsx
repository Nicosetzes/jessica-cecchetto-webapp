import Link from "next/link";
import { Logo } from "@/views/components/layout";
import styles from "./styles.module.css";
import { NavbarContact, Whatsapp } from "@/views/components/icons";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo dark />
          <div className={styles.socialLinks}>
            <div>
              <Whatsapp fill={"#fff"} height={24} width={24} />
              <a
                href="https://wa.me/4555248022"
                target="_blank"
                rel="noreferrer"
              >
                +45 55 24 80 22
              </a>
            </div>
            <div>
              <NavbarContact fill={"#fff"} height={24} width={24} />
              <a href="mailto:jesicacecchetto@gmail.com">
                jesicacecchetto@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Menu</h3>
          <ul className={styles.linkList}>
            <li>
              <Link href={"/"} className={styles.link}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"/about"} className={styles.link}>
                About
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className={styles.link}>
                Contact
              </Link>
            </li>
            <li>
              <Link href={"/self-assessment"} className={styles.link}>
                Self-Assessment
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Therapy</h3>
          <ul className={styles.linkList}>
            <li>
              <Link href={"/therapy"} className={styles.link}>
                Overview
              </Link>
            </li>
            <li>
              <Link href={"/therapy/individual"} className={styles.link}>
                Individual
              </Link>
            </li>
            <li>
              <Link href={"/therapy/group"} className={styles.link}>
                Group
              </Link>
            </li>
            <li>
              <Link href={"/therapy/gender-diverse"} className={styles.link}>
                Gender Diverse
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Legal</h3>
          <ul className={styles.linkList}>
            <li>
              <Link href={"#"} className={styles.link}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href={"#"} className={styles.link}>
                About GDPR
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.copy}>
          &copy; {year} Jésica Cecchetto · All rights reserved.
        </p>
        <p className={styles.copy}>
          Designed and developed by{" "}
          <a
            href="https://www.linkedin.com/in/nicol%C3%A1s-setzes-237657208/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nicolás Setzes
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
