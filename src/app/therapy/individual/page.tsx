import { CARDS } from "./constants";
import type { Metadata } from "next";
import styles from "./styles.module.css";
import {
  Cards,
  Closure,
  PracticeInfo,
  SelfAssessmentToast,
} from "@/views/components/layout";

export const metadata: Metadata = {
  alternates: {
    canonical: "/therapy/individual",
  },
  description:
    "Individual therapy for adults in Copenhagen, available in person and online. A confidential and supportive space to explore emotions, life challenges and personal growth.",
  openGraph: {
    description:
      "A confidential and supportive space to explore emotions, life challenges and personal growth, with in-person and online sessions.",
    title: "Individual Therapy for Adults in Copenhagen",
    type: "website",
    url: "/therapy/individual",
  },
  title: "Individual Therapy for Adults in Copenhagen",
};

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
      <PracticeInfo />
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
          <Cards svgBackground="var(--color-secondary)" cards={CARDS} />
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
      <SelfAssessmentToast />
    </>
  );
}
