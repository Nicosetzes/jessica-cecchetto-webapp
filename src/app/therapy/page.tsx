import Closure from "@/views/components/layout/Closure";
import PresentationCards from "@/views/components/layout/PresentationCards";
import { presentationCards } from "./constants";
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
      <section className={"section"}>
        <PresentationCards presentationCards={presentationCards} />
      </section>
      <Closure />
    </>
  );
}
