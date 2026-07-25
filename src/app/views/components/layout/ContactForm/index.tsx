"use client";

import Link from "next/link";
import styles from "./styles.module.css";

const ContactForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
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
            <option value="individual">Individual Therapy</option>
            <option value="group">Group Therapy</option>
            <option value="gender-affirming">
              Gender-Affirming Counselling
            </option>
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
            personal data, will be processed for the purpose of responding to my
            inquiry in accordance with applicable data protection laws,
            including the GDPR and the practice&apos;s{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>.
          </span>
        </label>
        <button type="submit" className={styles.submitButton}>
          Send message
        </button>
      </form>
    </>
  );
};

export default ContactForm;
