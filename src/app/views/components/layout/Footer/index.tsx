import Link from "next/link";
import { Logo } from "@/views/components/layout";
import styles from "./styles.module.css";
import { CVR, NavbarContact, Whatsapp } from "@/views/components/icons";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo dark />
          <div className={styles.footerInfo}>
            <div>
              <CVR fill={"#fff"} height={24} width={24} />
              <span>CVR: 43452630</span>
            </div>
            <div>
              <Whatsapp fill={"#fff"} height={24} width={24} />
              <a
                href="https://wa.me/4555248022"
                target="_blank"
                rel="noreferrer"
              >
                +45 55 24 80 22
              </a>
              <span>(messages only)</span>
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
              <Link href={"/therapy/gender-affirming"} className={styles.link}>
                Gender-Affirming
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Legal</h3>
          <ul className={styles.linkList}>
            <li>
              <Link href={"/privacy-policy"} className={styles.link}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.copy}>
          &copy; {year} Jesica Cecchetto (she/her) · All rights reserved.
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
