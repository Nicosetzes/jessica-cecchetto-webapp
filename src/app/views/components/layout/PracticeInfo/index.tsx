import styles from "./styles.module.css";
import {
  SessionAppointment,
  SessionCancellation,
  SessionDuration,
  SessionFee,
} from "@/views/components/icons";

const PracticeInfo = () => {
  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.grid}>
        <article className={styles.card}>
          <div className={styles.cardHeader}>
            <SessionDuration fill="var(--color-text)" size={24} />
            <span className={styles.label}>Session length</span>
          </div>
          <strong>60 minutes</strong>
        </article>
        <article className={styles.card}>
          <div className={styles.cardHeader}>
            <SessionFee fill="var(--color-text)" size={24} />
            <span className={styles.label}>Fee</span>
          </div>
          <strong>1000 DKK per session</strong>
        </article>
        <article className={styles.card}>
          <div className={styles.cardHeader}>
            <SessionCancellation fill="var(--color-text)" size={24} />
            <span className={styles.label}>Cancellation</span>
          </div>
          <strong>24 hours notice required</strong>
        </article>
        <article className={`${styles.card} ${styles.highlightCard}`}>
          <div className={styles.cardHeader}>
            <SessionAppointment fill="var(--color-text)" size={24} />
            <span className={styles.label}>First consultation</span>
          </div>
          <strong>600 DKK</strong>
          <span className={styles.cardDescription}>
            60-minute online session
          </span>
        </article>
      </div>
      <div className={styles.note}>
        <p>
          If an appointment is cancelled, this must be done no later than 24
          hours before the scheduled time.
        </p>
        <p>
          In case of late cancellation or missed appointments, a fee of 500 DKK
          will be charged.
        </p>
      </div>
    </section>
  );
};

export default PracticeInfo;
