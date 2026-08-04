import { GENDER_AFFIRMING_CARDS } from "./constants";
import styles from "./styles.module.css";
import { Closure, GridCards, PracticeInfo } from "@/views/components/layout";

export default function GenderAffirmingCounselling() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <span className={styles.eyebrow}>Gender-Affirming Counselling</span>
        <h1 className={styles.title}>
          A supportive, respectful and affirming space for gender-diverse and
          LGBTQ+ individuals
        </h1>
        <p className={styles.description}>
          My practice is grounded in a gender-affirmative and strengths-based
          approach that recognizes gender diversity as a natural and valuable
          part of human experience.
        </p>
      </section>
      <PracticeInfo />
      <section className={`section ${styles.approachSection}`}>
        <div className={styles.content}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>My approach</span>
            <h2 className={styles.heading}>
              Collaborative, culturally responsive and individualized
            </h2>
          </div>
        </div>
        <GridCards gridCards={GENDER_AFFIRMING_CARDS} />
      </section>
      <Closure />
    </>
  );
}
