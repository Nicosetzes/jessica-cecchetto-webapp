import { PROFILE_CONTENT } from "../../constants";
import type { SelfAssessmentResult } from "@/types";
import styles from "./styles.module.css";

type ResultProps = {
  result: SelfAssessmentResult;
};

const Result = ({ result }: ResultProps) => {
  const content = PROFILE_CONTENT[result.profile];

  return (
    <section className={`section ${styles.result}`}>
      <div className={styles.card}>
        <span className={styles.eyebrow}>Assessment Result</span>
        <h1 className={styles.title}>{content.title}</h1>
        <p className={styles.description}>{content.description}</p>
        <div className={styles.notice}>
          This questionnaire is intended for guidance only and does not replace
          a professional psychological assessment.
        </div>
        <div className={styles.actions}>
          <a href="/contact" className={styles.primaryButton}>
            Get in Touch
          </a>
          <a href="/therapy" className={styles.secondaryButton}>
            Explore Therapy Options
          </a>
        </div>
      </div>
    </section>
  );
};

export default Result;
