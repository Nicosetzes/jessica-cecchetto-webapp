import CTALink from "../CTALink";
import styles from "./styles.module.css";
import { NavbarContact, NavbarSelfAssessment } from "@/views/components/icons";

const Closure = () => {
  return (
    <div className={styles.wrapper}>
      <section className={`section ${styles.closureSection}`}>
        <div className={styles.header}>
          <h2>Next steps</h2>
          <p className={styles.description}>
            Whether you would like to discuss your situation or take a moment to
            reflect on your current well-being, the options below can help you
            decide on your next step.
          </p>
        </div>
        <div className={styles.cards}>
          <article className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconContainer}>
                <NavbarContact fill="#fff" height={36} width={36} />
              </div>
              <h3>Contact me</h3>
            </div>
            <p>
              Reach out to discuss your situation, ask questions, or explore
              whether therapy may be right for you.
            </p>
            <CTALink href="/contact" label="Get in touch" />
          </article>
          <article className={styles.card}>
            <div className={`${styles.cardHeader}`}>
              <div className={styles.iconContainer}>
                <NavbarSelfAssessment fill="#fff" height={36} width={36} />
              </div>
              <h3>Self-assessment</h3>
            </div>
            <p>
              Take a few minutes to reflect on your current emotional well-being
              through a brief self-assessment questionnaire.
            </p>
            <CTALink href="/self-assessment" label="Start Self-Assessment" />
          </article>
        </div>
      </section>
    </div>
  );
};

export default Closure;
