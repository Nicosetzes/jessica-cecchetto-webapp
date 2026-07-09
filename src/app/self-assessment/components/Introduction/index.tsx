import styles from "./styles.module.css";

type IntroductionProps = {
  onStart: () => void;
};

const Introduction = ({ onStart }: IntroductionProps) => {
  return (
    <section className={`section ${styles.introduction}`}>
      <div className={styles.card}>
        <span className={styles.eyebrow}>Self Assessment</span>
        <h1 className={styles.title}>
          Explore your current emotional well-being
        </h1>
        <p className={styles.description}>
          This questionnaire is designed to help identify the emotions that may
          be most present in your life right now and suggest which type of
          therapeutic support could be most relevant for you.
        </p>
        <div className={styles.highlights}>
          <div className={styles.highlight}>
            <strong>21 questions</strong>
            <span>Simple yes-or-no answers</span>
          </div>
          <div className={styles.highlight}>
            <strong>Anonymous</strong>
            <span>No personal information is stored</span>
          </div>
          <div className={styles.highlight}>
            <strong>3–5 minutes</strong>
            <span>Complete it at your own pace</span>
          </div>
        </div>
        <div className={styles.notice}>
          <p>
            This questionnaire is intended for guidance only and does not
            provide a clinical diagnosis.
          </p>
          <p>
            Before any group placement, an individual intake interview is
            conducted to better understand your situation and ensure appropriate
            guidance.
          </p>
        </div>
        <button type="button" className={styles.button} onClick={onStart}>
          Start Assessment
        </button>
      </div>
    </section>
  );
};

export default Introduction;
