import Image from "next/image";
import Link from "next/link";
import type { PresentationCardsProps } from "./types";
import styles from "./styles.module.css";

const PresentationCards = ({
  presentationCards = [],
}: PresentationCardsProps) => {
  return (
    <div className={styles.container}>
      {presentationCards.map(
        (
          { description, eyebrow, linkUrl, imageAlt, imageUrl, title },
          index,
        ) => (
          <article className={styles.card} key={index}>
            <Link href={linkUrl}>
              <div className={styles.imageContainer}>
                <Image
                  fill
                  alt={imageAlt}
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src={imageUrl}
                />
              </div>
              <div className={styles.content}>
                <span className={styles.cardEyebrow}>{eyebrow}</span>
                <h2>{title}</h2>
                <p>{description}</p>
                <span className={styles.link}>Learn more →</span>
              </div>
            </Link>
          </article>
        ),
      )}
    </div>
  );
};

export default PresentationCards;
