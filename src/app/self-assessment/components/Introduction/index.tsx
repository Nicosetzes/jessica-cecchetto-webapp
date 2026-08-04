import Link from "next/link";
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
          Explore how you&apos;re feeling at the moment
        </h1>
        <p className={styles.description}>
          This questionnaire helps identify the predominant emotions you are
          experiencing right now. Emotions can be complex and varied, take your
          time to answer thoughtfully.
        </p>
        <p className={styles.description}>
          Only you will be able to see the results at the end.
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
            This questionnaire is intended for guidance only and does{" "}
            <strong>not</strong> provide a clinical diagnosis.
          </p>
          <p>
            If you decide to start therapy after completing this questionnaire,
            we can discuss together your results and I will help you identify
            the type of therapeutic support that may be most beneficial, whether
            that&apos;s a <Link href="/therapy/group">therapy group</Link> or{" "}
            <Link href="/therapy/individual">individual therapy</Link>.
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
