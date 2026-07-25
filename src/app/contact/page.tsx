import { ClipboardButton } from "@/views/components/ui";
import { ContactForm } from "@/views/components/layout";
import styles from "./styles.module.css";
import { NavbarContact, Whatsapp } from "@/views/components/icons";

export default function Contact() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <span className={styles.eyebrow}>Contact</span>
        <h1 className={styles.title}>Get in touch</h1>
        <p className={styles.description}>
          If you have questions about therapy, would like more information, or
          are unsure which option may be right for you, feel free to reach out.
        </p>
        <p className={styles.description}>
          You can contact me by email, WhatsApp, or by filling out the contact
          form below.
        </p>
      </section>
      <section className={`section ${styles.contactMethodsSection}`}>
        <div className={styles.contactMethods}>
          <div className={styles.contactMethod}>
            <div className={styles.contactMethodIcon}>
              <NavbarContact
                fill="var(--color-secondary)"
                height={32}
                width={32}
              />
            </div>
            <div className={styles.contactMethodContent}>
              <span>Email</span>
              <a href="mailto:jesicacecchetto@gmail.com">
                jesicacecchetto@gmail.com
              </a>
            </div>
            <ClipboardButton
              ariaLabel="Copy email address to clipboard"
              textToCopy="jessicacecchetto@gmail.com"
            />
          </div>
          <div className={styles.contactMethod}>
            <div className={styles.contactMethodIcon}>
              <Whatsapp height={32} width={32} />
            </div>
            <div className={styles.contactMethodContent}>
              <span>WhatsApp</span>
              <a
                href="https://wa.me/4555248022"
                target="_blank"
                rel="noreferrer"
              >
                +45 55 24 80 22 (messages only)
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <ContactForm />
      </section>
    </>
  );
}
