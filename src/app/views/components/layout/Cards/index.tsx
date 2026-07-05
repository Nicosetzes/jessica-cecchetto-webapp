"use client";

import ICONS from "./iconsMap";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import type { CardsProps } from "./types";

const Cards = ({ cards, numbered }: CardsProps) => {
  return (
    <div className={`${styles.cards} ${numbered ? styles.numbered : ""}`}>
      {cards.map(({ description, iconKey, title }, index) => {
        const Icon = iconKey ? ICONS[iconKey] : null;
        return (
          <motion.div
            className={`${styles.card} ${numbered ? styles.numbered : ""}`}
            key={index}
            initial={{ opacity: 0, y: 100 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.125 * index, duration: 0.4 },
            }}
          >
            {Icon ? (
              <Icon fill="var(--color-secondary)" height={54} width={54} />
            ) : null}
            {numbered && (
              <span className={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
            {title && <h3>{title}</h3>}
            <p>{description}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Cards;
