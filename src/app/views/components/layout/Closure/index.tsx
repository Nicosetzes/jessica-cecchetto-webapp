import CTALink from "../CTALink";
import styles from "./styles.module.css";
import { NavbarContact, NavbarSelfAssessment } from "@/views/components/icons";

const Closure = () => {
  return (
    <section className={`section ${styles.closureSection}`}>
      <div className={styles.header}>
        <h2>Get in touch</h2>
        <p className={styles.description}>
          If you have questions about therapy or would like to explore whether
          we are a good fit, I invite you to get in touch. I&apos;ll be happy to
          answer your questions and discuss how I can support you.
        </p>
      </div>
      <div className={styles.cards}>
        <article className={styles.card}>
          <div className={styles.cardHeader}>
            <NavbarContact
              fill="var(--color-secondary)"
              height={32}
              width={32}
            />
            <h3>Contact me</h3>
          </div>
          <p>
            Have a question or ready to take the next step? I would be happy to
            hear from you.
          </p>
          <CTALink href="/contact" label="Contact" />
        </article>
        <article className={styles.card}>
          <div className={`${styles.cardHeader} ${styles.large}`}>
            <NavbarSelfAssessment
              fill="var(--color-secondary)"
              height={32}
              width={32}
            />
            <h3>Wondering whether therapy is right for you?</h3>
          </div>
          <p>
            Take the <strong>free</strong> self-assessment questionnaire to
            reflect on your current situation and explore whether therapy could
            support you.
          </p>
          <p>It only takes a few minutes.</p>
          <CTALink href="/self-assessment" label="Start Self-Assessment" />
        </article>
      </div>
    </section>
  );
};

export default Closure;
