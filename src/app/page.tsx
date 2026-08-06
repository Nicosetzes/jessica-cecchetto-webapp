import { CTALink } from "./views/components/ui";
import Image from "next/image";
import styles from "./styles.module.css";
import { CARDS, PRESENTATION_CARDS } from "./constants";
import {
  Cards,
  Closure,
  PresentationCards,
  SelfAssessmentToast,
} from "@/views/components/layout";

export default function Home() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Psychotherapy in Copenhagen</span>
          <h1 className={styles.title}>
            Evidence-based therapy for emotional well-being, resilience and
            meaningful change
          </h1>
          <p className={styles.description}>
            Individual therapy, group therapy and gender-affirming counselling
            for adults seeking support with anxiety, depression, loneliness,
            grief and life transitions.
          </p>
          <div className={styles.actions}>
            <CTALink href="/self-assessment" label="Take a self-assessment" />
            <CTALink href="/contact" label="Contact me" variant="secondary" />
          </div>
        </div>
      </section>
      <section className={`section ${styles.supportSection}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Areas of support</span>
          <h2 className={styles.heading}>
            Challenges I commonly help people navigate
          </h2>
        </div>
        <Cards cards={CARDS} svgColor={"var(--color-primary)"} svgSize={40} />
      </section>
      <section
        className={`section ${styles.therapySection}`}
        id="therapy-options"
      >
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Therapy options</span>
          <h2 className={styles.heading}>
            Find the option that best suits your needs
          </h2>
          <p className={styles.description}>
            Whether you prefer individual support or the shared experience of a
            therapeutic group, both approaches provide a safe and supportive
            space to explore emotions, strengthen coping strategies, and foster
            personal growth.
          </p>
        </div>
        <PresentationCards presentationCards={PRESENTATION_CARDS} />
      </section>
      <section className={`section ${styles.aboutSection}`}>
        <div className={styles.aboutImage}>
          <Image
            fill
            src="/images/jesica-01.jpg"
            alt="Psychotherapist"
            className={styles.image}
          />
        </div>
        <div className={styles.aboutContent}>
          <span className={styles.eyebrow}>About</span>
          <h2 className={styles.heading}>
            Structured, collaborative and evidence-based therapy
          </h2>
          <p className={styles.paragraph}>
            My approach integrates Cognitive Behavioural Therapy (CBT), Systemic
            Therapy and Dialectical Behaviour Therapy (DBT), supporting
            meaningful and lasting change through practical tools, reflection
            and active participation.
          </p>
          <CTALink href="/about" label="Learn more about my approach" />
        </div>
      </section>
      <Closure />
      <SelfAssessmentToast />
    </>
  );
}
