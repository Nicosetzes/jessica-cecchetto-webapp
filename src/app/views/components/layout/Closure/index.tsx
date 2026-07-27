import { CTALink } from "@/views/components/ui";
import styles from "./styles.module.css";

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
            <span className={styles.cardLabel}>Self-Assessment</span>
            <h3 className={styles.cardTitle}>Not sure where to begin?</h3>
            <p className={styles.cardDescription}>
              Complete a brief self-assessment to reflect on your current
              challenges and identify areas where therapy may be helpful.
            </p>
            <CTALink href="/self-assessment" label="Start Self-Assessment" />
          </article>
          <article className={styles.card}>
            <span className={styles.cardLabel}>Contact</span>
            <h3 className={styles.cardTitle}>Ready to reach out?</h3>
            <p className={styles.cardDescription}>
              Get in touch to discuss your situation, ask questions and explore
              which type of support may be the best fit for your needs.
            </p>
            <CTALink href="/contact" label="Get in touch" />
          </article>
        </div>
      </section>
    </div>
  );
};

export default Closure;
