import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import MENU from "../menu";

const Footer = () => {
  const year = new Date().getFullYear();

  const footerLinks = MENU.filter(({ href }) => href !== "/contact");
  const contactLink = MENU.find(({ href }) => href === "/contact");

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logoLink}>
            LOGO
            {/* <Image
              src="/images/logo.png"
              alt="Logo"
              width={120}
              height={40}
              className={styles.logo}
            /> */}
          </Link>
          <p className={styles.tagline}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl vel tincidunt lacinia.
          </p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Menu</h3>
          <ul className={styles.linkList}>
            {footerLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={styles.link}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Contact</h3>
          <ul className={styles.linkList}>
            <li>
              <Link href={contactLink?.href ?? "#"} className={styles.link}>
                {contactLink?.label ?? "Contact"}
              </Link>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Instagram
              </a>
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
                About GDRP
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
