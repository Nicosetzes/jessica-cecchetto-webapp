import styles from "./styles.module.css";
import {
  SessionAppointment,
  SessionDuration,
  SessionFee,
} from "@/views/components/icons";

const PracticeInfo = () => {
  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.grid}>
        <article className={`${styles.card} ${styles.highlightCard}`}>
          <div>
            <SessionAppointment fill="currentColor" size={32} />
            <span className={styles.badge}>First consultation</span>
          </div>
          <strong>600 DKK</strong>
          <span>60-minute online session</span>
        </article>
        <article className={styles.card}>
          <SessionDuration fill="currentColor" size={32} />
          <strong>75 min</strong>
          <span>Session length</span>
        </article>
        <article className={styles.card}>
          <SessionFee fill="currentColor" size={32} />
          <strong>700 DKK</strong>
          <span>Per session</span>
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
