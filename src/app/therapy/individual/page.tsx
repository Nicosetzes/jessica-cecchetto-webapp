import { CARDS } from "./constants";
import styles from "./styles.module.css";
import { Cards, Closure } from "@/views/components/layout";

export default function IndividualTherapy() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <span className={styles.eyebrow}>Individual Therapy</span>
        <h1 className={styles.title}>
          A confidential space to explore your thoughts, emotions and
          experiences
        </h1>
        <p className={styles.description}>
          I provide individual therapy for adults through{" "}
          <strong>in-person</strong> and <strong>online</strong> sessions,
          offering a safe, supportive environment where you can explore what
          matters most to you.
        </p>
      </section>
      <section className={`section ${styles.specialtiesSection}`}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>Areas I can support you with</h2>
            <p className={styles.paragraph}>
              Therapy can provide a safe space to better understand yourself,
              process difficult emotions and develop healthier ways of coping
              with life&apos;s challenges.
            </p>
          </div>
          <Cards cards={CARDS} />
        </div>
      </section>
      <section className={`section ${styles.closingSection}`}>
        <div className={styles.closingContainer}>
          <h2 className={styles.heading}>
            Taking the first step can make a difference
          </h2>
          <p className={styles.paragraph}>
            Whether you are experiencing emotional distress, adjusting to a new
            country, dealing with loss, or simply looking for greater emotional
            balance, therapy can help you better understand yourself and develop
            healthier ways of coping.
          </p>
        </div>
      </section>
      <Closure />
    </>
  );
}
