import { GroupSelector } from "@/views/components/ui";
import Link from "next/link";
import styles from "./styles.module.css";
import { BENEFITS, CARDS, GROUPS } from "./constants";
import { Cards, Closure } from "@/views/components/layout";
import {
  SessionDiscount,
  SessionDuration,
  SessionFee,
  SessionGroupSize,
} from "@/views/components/icons";

export default function GroupTherapy() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <span className={styles.eyebrow}>Group Therapy</span>
        <h1 className={styles.title}>
          Share with others in a safe environment to better understand yourself
        </h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugit
          aut sunt porro dicta, animi neque delectus temporibus quis
          reprehenderit mollitia sapiente vitae, obcaecati aperiam beatae
          repellendus, facere tempore illum!
        </p>
      </section>
      <section className={`section ${styles.infoSection}`}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Practical information</span>
          <h2 className={styles.heading}>
            Small groups, structured support and clear goals
          </h2>
          <div className={styles.infoGrid}>
            <article className={styles.infoCard}>
              <SessionDuration fill="currentColor" size={32} />
              <strong>75 min</strong>
              <span>Session length</span>
            </article>
            <article className={styles.infoCard}>
              <SessionGroupSize fill="currentColor" size={32} />
              <strong>Max 4</strong>
              <span>Participants</span>
            </article>
            <article className={styles.infoCard}>
              <SessionFee fill="currentColor" size={32} />
              <strong>700 DKK</strong>
              <span>Per session</span>
              <div className={styles.discountInfo}></div>
            </article>
            <article className={styles.infoCard}>
              <SessionDiscount fill="currentColor" size={32} />
              <h3>Reduced rate available</h3>
              <span>
                Book and pay for the full programme in advance to receive a
                discounted rate of
                <span className={styles.discountFee}> 600 DKK per session</span>
                .
              </span>
            </article>
          </div>
          <h3 className={styles.subheading}>Available programmes</h3>
          <div className={styles.programmes}>
            <article className={styles.programme}>
              <strong>Coping with Depression</strong>
              <span>20 sessions</span>
            </article>
            <article className={styles.programme}>
              <strong>Loneliness & Social Skills</strong>
              <span>15 sessions</span>
            </article>
            <article className={styles.programme}>
              <strong>Tools for Anxiety</strong>
              <span>15 sessions</span>
            </article>
          </div>
          <div className={styles.programmesFooter}>
            <span>
              Once the group sessions have concluded, you are welcome to
              continue with{" "}
              <Link href="/therapy/individual">individual therapy</Link> for
              additional support, if desired.
            </span>
          </div>
        </div>
      </section>
      <section className={`section ${styles.benefitsSection}`}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Why group therapy works?</span>
          <h2 className={styles.heading}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugit
          </h2>
        </div>
        <Cards cards={BENEFITS} />
      </section>
      <section className={`section ${styles.interviewSection}`}>
        <div className={styles.interviewCard}>
          <span className={styles.step}>Before joining a group</span>
          <h2 className={styles.interviewTitle}>
            Every participant begins with an individual interview
          </h2>
          <p className={styles.interviewDescription}>
            Before joining a therapy group, each participant attends an
            individual interview. This first conversation helps create balanced
            and compatible groups, prepares participants for the group
            experience and contributes to a safe, respectful and effective
            therapeutic environment.
          </p>
          <Cards numbered cards={CARDS} />
        </div>
      </section>
      <section className={`section ${styles.groupsSection}`}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Choose a group</span>
          <h2 className={styles.heading}>
            Find the group that best matches your current needs
          </h2>
        </div>
        <GroupSelector groups={GROUPS} />
      </section>
      <Closure />
    </>
  );
}
