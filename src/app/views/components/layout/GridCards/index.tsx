"use client";

import type { GridCardsProps } from "./types";
import ICONS from "./iconsMap";
import styles from "./styles.module.css";

const GridCards = ({ gridCards = [] }: GridCardsProps) => {
  return (
    <div className={styles.grid}>
      {gridCards.map(({ description, iconKey, title }, index) => {
        const Icon = iconKey ? ICONS[iconKey] : null;
        return (
          <article
            className={`${styles.card} ${index === gridCards.length - 1 ? styles.wide : ""}`}
            key={index}
          >
            <div className={styles.cardHeader}>
              {Icon && <Icon fill="var(--color-primary)" size={36} />}
              <h3>{title}</h3>
            </div>
            {description.map((desc, descIndex) => (
              <p key={descIndex}>{desc}</p>
            ))}
          </article>
        );
      })}
    </div>
  );
};

export default GridCards;
