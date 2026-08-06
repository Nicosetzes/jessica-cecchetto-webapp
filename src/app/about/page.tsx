import { Check } from "@/views/components/icons";
import Image from "next/image";
import styles from "./styles.module.css";
import { Closure, SelfAssessmentToast } from "@/views/components/layout";

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
            preload
            alt="Psychotherapist portrait"
            className={styles.image}
            src="/images/jesica-02.jpg"
          />
        </div>
      </section>
      <section className={`section ${styles.personalSection}`}>
        <div className={styles.personalImage}>
          <Image
            fill
            alt="Jesica"
            className={styles.image}
            src="/images/jesica-hero.jpg"
          />
        </div>
        <div className={styles.personalContent}>
          <span className={styles.eyebrow}>A bit more about me</span>
          <h2 className={styles.personalTitle}>Beyond the therapy room</h2>
          <div className={styles.personalText}>
            <p>Welcome, I&apos;m Jesi, and I&apos;m 43 years old.</p>
            <p>
              Along with my psychotherapeutic work, I&apos;m a passionate
              reader, especially drawn to books that touch the soul, leave a
              lasting impression, and stay with us long after we finish the last
              page. For this reason, it is very common for me to share
              meaningful quotes from books during sessions or between sessions,
              along with reflections that I believe may support my clients in
              their personal journeys.
            </p>
            <p>
              I also enjoy writing my own fiction stories, creating characters
              and narratives that explore emotions, human experiences, and the
              complexity of life.
            </p>
            <p>
              I&apos;m proud to be part of the beautiful rainbow community, and
              whenever I have the opportunity, I celebrate diversity, promote
              inclusion, and share psychoeducation to foster greater
              understanding.
            </p>
            <p>
              I&apos;m happy to welcome you here and look forward to sharing
              this space with you.
            </p>
          </div>
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
          <div className={styles.approachItem}>
            <Check size={24} />
            <div>
              <strong>Structured and collaborative</strong>
              <p>
                My approach is structured, collaborative, and active. I
                encourage clients to participate fully in the therapeutic
                process, and our work often includes practical tools, reflection
                exercises, and between-session activities designed to support
                lasting change.
              </p>
            </div>
          </div>
          <div className={styles.approachItem}>
            <Check size={24} />
            <div>
              <strong>Evidence-based practice</strong>
              <p>
                I work from an integrative and evidence-based perspective,
                primarily using Cognitive Behavioral Therapy (CBT) and Systemic
                Therapy, with additional training in Dialectical Behavior
                Therapy (DBT).
              </p>
            </div>
          </div>
          <div className={styles.approachItem}>
            <Check size={24} />
            <div>
              <strong>Gender-affirmative support</strong>
              <p>
                My practice is also informed by the Gender Affirmative Model
                (GAM) and the Gender Minority Stress Model, providing a
                supportive and affirming space for gender-diverse and LGBTQ+
                individuals.
              </p>
            </div>
          </div>
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
              src="/images/jesica-04.jpg"
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
            <p>
              Business consulting for family businesses and small and
              medium-sized enterprises (SMEs) at Flores University
            </p>
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
      <SelfAssessmentToast />
    </>
  );
}
