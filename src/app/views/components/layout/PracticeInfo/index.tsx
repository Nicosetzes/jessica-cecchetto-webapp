import styles from "./styles.module.css";
import {
  SessionCancellation,
  SessionDuration,
  SessionFee,
} from "@/views/components/icons";

type PracticeInfoProps = {
  duration: string;
  price: string;
  cancellation?: string;
};

const PracticeInfo = ({ duration, price, cancellation }: PracticeInfoProps) => {
  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.grid}>
        <article className={styles.card}>
          <div className={styles.cardHeader}>
            <SessionDuration fill="var(--color-text)" size={24} />
            <span className={styles.label}>Session length</span>
          </div>
          <strong>{duration}</strong>
        </article>
        <article className={styles.card}>
          <div className={styles.cardHeader}>
            <SessionFee fill="var(--color-text)" size={24} />
            <span className={styles.label}>Fee</span>
          </div>
          <strong>{price}</strong>
        </article>
        {cancellation && (
          <article className={styles.card}>
            <div className={styles.cardHeader}>
              <SessionCancellation fill="var(--color-text)" size={24} />
              <span className={styles.label}>Cancellation</span>
            </div>
            <strong>{cancellation}</strong>
          </article>
        )}
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
