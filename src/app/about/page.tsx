import { Closure } from "@/views/components/layout";
import Image from "next/image";
import styles from "./styles.module.css";

export default function About() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>About</span>
          <h1 className={styles.title}>
            A collaborative and evidence-based approach to therapy
          </h1>
          <p className={styles.description}>
            I provide a supportive, structured, and active therapeutic
            environment where clients can better understand themselves, develop
            practical skills, and work toward meaningful and lasting change.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            fill
            alt="Psychotherapist portrait"
            className={styles.image}
            src="/images/jesica-hero.jpg"
          />
        </div>
      </section>
      <section className={`section ${styles.approachSection}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>My approach</span>
          <h2>
            Therapy that combines reflection, practical tools and collaboration
          </h2>
        </div>
        <div className={styles.approachCard}>
          <p>
            My approach is structured, collaborative, and active. I encourage
            clients to participate fully in the therapeutic process, and our
            work often includes practical tools, reflection exercises, and
            between-session activities designed to support lasting change.
          </p>
          <p>
            I work from an integrative and evidence-based perspective, primarily
            using Cognitive Behavioral Therapy (CBT) and Systemic Therapy, with
            additional training in Dialectical Behavior Therapy (DBT).
          </p>
          <p>
            My practice is also informed by the Gender Affirmative Model (GAM)
            and the Gender Minority Stress Model, providing a supportive and
            affirming space for gender-diverse and LGBTQ+ individuals.
          </p>
        </div>
      </section>
      <section className={`section ${styles.experienceSection}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Experience</span>
          <h2>Areas I commonly work with</h2>
        </div>
        <div className={styles.grid}>
          <article className={`${styles.card} ${styles.wide}`}>
            <Image
              src="/images/anxiety.png"
              alt=""
              fill
              className={styles.image}
            />
            <div className={styles.overlay} />
            <div className={styles.cardContent}>
              <h3>Anxiety</h3>
            </div>
          </article>
          <article className={`${styles.imageCard} ${styles.tall}`}>
            <Image
              fill
              alt="Therapy session"
              src="/images/jesica-01.jpg"
              className={styles.image}
            />
          </article>
          <article className={`${styles.imageCard} ${styles.tall}`}>
            <Image
              fill
              alt="Therapy session"
              className={styles.image}
              src="/images/jesica-02.jpg"
            />
          </article>
          <article className={styles.card}>
            <Image
              src="/images/depression.png"
              alt=""
              fill
              className={styles.image}
            />
            <div className={styles.overlay} />
            <div className={styles.cardContent}>
              <h3>Depression</h3>
            </div>
          </article>
          <article className={`${styles.card} ${styles.wide}`}>
            <Image
              src="/images/loneliness.png"
              alt=""
              fill
              className={styles.image}
            />
            <div className={styles.overlay} />
            <div className={styles.cardContent}>
              <h3>Loneliness</h3>
            </div>
          </article>
          <article className={styles.card}>
            <Image
              src="/images/grief.png"
              alt=""
              fill
              className={styles.image}
            />
            <div className={styles.overlay} />
            <div className={styles.cardContent}>
              <h3>Grief</h3>
            </div>
          </article>
          <article className={styles.card}>
            <Image
              src="/images/social-difficulties.png"
              alt=""
              fill
              className={styles.image}
            />
            <div className={styles.overlay} />
            <div className={styles.cardContent}>
              <h3>Social difficulties</h3>
            </div>
          </article>
          <article className={`${styles.imageCard} ${styles.tall}`}>
            <Image
              fill
              alt="Therapy session"
              className={styles.image}
              src="/images/jesica-03.jpg"
            />
          </article>
          <article className={`${styles.card} ${styles.wide}`}>
            <Image
              src="/images/gender-affirming.png"
              alt=""
              fill
              className={styles.image}
            />
            <div className={styles.overlay} />
            <div className={styles.cardContent}>
              <h3>Gender-Affirming Counselling</h3>
            </div>
          </article>
        </div>
      </section>
      <section className={`section ${styles.educationSection}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Education</span>
          <h2>Education & Professional Training</h2>
        </div>
        <div className={styles.educationGrid}>
          <article className={styles.educationCard}>
            <h3>Psychology Degree</h3>
            <p>National University of Mar del Plata</p>
            <span>Argentina</span>
          </article>
          <article className={styles.educationCard}>
            <h3>University Professor</h3>
            <p>Flores University</p>
            <span>Buenos Aires, Argentina</span>
          </article>
          <article className={styles.educationCard}>
            <h3>Cognitive & Systemic Therapy</h3>
            <p>Postgraduate Training</p>
            <span>Atlántida University</span>
          </article>
          <article className={styles.educationCard}>
            <h3>Cognitive Techniques</h3>
            <p>Postgraduate Training</p>
            <span>National University of Mar del Plata</span>
          </article>
          <article className={styles.educationCard}>
            <h3>HR Assessment & Recruitment</h3>
            <p>Diploma</p>
            <span>UCES</span>
          </article>
          <article className={styles.educationCard}>
            <h3>Psychological Assessment Tools</h3>
            <p>Big Five · NEO PI-R · 16PF5 · MBTI</p>
            <span>University of Buenos Aires</span>
          </article>
          <article className={styles.educationCard}>
            <h3>MMPI-2</h3>
            <p>Assessment Training</p>
            <span>Arapsic</span>
          </article>
          <article className={styles.educationCard}>
            <h3>Rorschach & Zulliger</h3>
            <p>Comprehensive Assessment Methods</p>
            <span>Arapsic</span>
          </article>
        </div>
      </section>
      <Closure />
    </>
  );
}
