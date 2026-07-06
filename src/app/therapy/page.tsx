import Closure from "@/views/components/layout/Closure";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Therapy() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <span className={styles.eyebrow}>Therapy</span>
        <h1 className={styles.title}>
          Therapy tailored to your needs and the way you feel most comfortable
        </h1>
        <p className={styles.description}>
          Whether you prefer individual support or the shared experience of a
          therapeutic group, both approaches provide a safe and supportive space
          to explore emotions, strengthen coping strategies, and foster personal
          growth.
        </p>
      </section>
      <section className={`section ${styles.cardsSection}`}>
        <Link href="/therapy/individual" className={styles.card}>
          <div className={styles.content}>
            <span className={styles.cardEyebrow}>One-to-one</span>

            <h2>Individual Therapy</h2>

            <p>
              A confidential space focused entirely on your personal
              experiences, emotions and goals.
            </p>

            <span className={styles.link}>Learn more →</span>
          </div>
        </Link>
        <Link href="/therapy/group" className={styles.card}>
          <div className={styles.content}>
            <span className={styles.cardEyebrow}>Shared experience</span>
            <h2>Group Therapy</h2>
            <p>
              Connect with others facing similar challenges while developing new
              perspectives in a professionally guided environment.
            </p>
            <span className={styles.link}>Learn more →</span>
          </div>
        </Link>
      </section>
      <Closure />
    </>
  );
}
