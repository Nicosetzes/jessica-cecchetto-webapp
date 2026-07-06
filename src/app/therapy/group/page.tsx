import styles from "./styles.module.css";
import { BENEFITS, CARDS, GROUPS } from "./constants";
import { Cards, Closure, GroupSelector } from "@/views/components/layout";

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
