"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import { useCopyToClipboard } from "@/hooks";
import {
  Check,
  Clipboard,
  NavbarContact,
  Whatsapp,
} from "@/views/components/icons";

export default function Contact() {
  const [copy, copiedState] = useCopyToClipboard();

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
            <button
              aria-label="Copy email address"
              className={styles.copyButton}
              type="button"
              onClick={() => copy("jesicacecchetto@gmail.com")}
            >
              {copiedState ? (
                <>
                  <Check height={32} width={32} />
                  <span className={styles.copiedText}>Copied!</span>
                </>
              ) : (
                <>
                  <Clipboard
                    fill="var(--color-secondary)"
                    height={32}
                    width={32}
                  />
                  <span className={styles.copiedText}>Copy to clipboard</span>
                </>
              )}
            </button>
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
      <section className={`section ${styles.formSection}`}>
        <form className={styles.form}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="firstName">First name</label>
              <input id="firstName" name="firstName" type="text" />
            </div>
            <div className={styles.field}>
              <label htmlFor="lastName">Last name</label>
              <input id="lastName" name="lastName" type="text" />
            </div>
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" />
          </div>
          <div className={styles.field}>
            <label htmlFor="reason">Reason for your inquiry</label>
            <select id="reason" name="reason" defaultValue="">
              <option value="" disabled>
                Select an option
              </option>
              <option value="individual">Individual therapy</option>
              <option value="group">Group therapy</option>
              <option value="affirmative">Affirmative counseling</option>
              <option value="unsure">Not sure yet</option>
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={8} />
          </div>

          <label className={styles.checkbox}>
            <input required type="checkbox" name="privacyConsent" />
            <span>
              I understand that this contact form is not intended for sharing
              detailed or urgent personal health information. I acknowledge that
              any personal information I choose to provide, including sensitive
              personal data, will be processed for the purpose of responding to
              my inquiry in accordance with applicable data protection laws,
              including the GDPR and the practice&apos;s{" "}
              <Link href="/privacy-policy">Privacy Policy</Link>.
            </span>
          </label>
          <button type="submit" className={styles.submitButton}>
            Send message
          </button>
        </form>
      </section>
    </>
  );
}
