import { GENDER_AFFIRMING_CARDS } from "./constants";
import type { Metadata } from "next";
import styles from "./styles.module.css";
import {
  Closure,
  GridCards,
  PracticeInfo,
  SelfAssessmentToast,
} from "@/views/components/layout";

export const metadata: Metadata = {
  alternates: {
    canonical: "/therapy/gender-affirming",
  },
  description:
    "Gender-affirming counselling in Copenhagen for gender-diverse and LGBTQ+ individuals, offering a supportive, respectful and individualized therapeutic space.",
  openGraph: {
    description:
      "A supportive, respectful and individualized space for gender-diverse and LGBTQ+ individuals.",
    title: "Gender-Affirming Counselling in Copenhagen",
    type: "website",
    url: "/therapy/gender-affirming",
  },
  title: "Gender-Affirming Counselling in Copenhagen",
};

export default function GenderAffirmingCounselling() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <span className={styles.eyebrow}>Gender-Affirming Counselling</span>
        <h1 className={styles.title}>
          A supportive, respectful and affirming space for gender-diverse and
          LGBTQ+ individuals
        </h1>
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
      <SelfAssessmentToast />
    </>
  );
}
