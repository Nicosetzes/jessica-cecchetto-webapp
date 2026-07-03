"use client";

import ICONS from "./iconsMap";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

type CardItem = {
  description: string;
  iconKey?: string;
  title: string;
};

const Cards = ({ cards }: { cards: CardItem[] }) => {
  return (
    <div className={styles.cards}>
      {cards.map(({ description, iconKey, title }, index) => {
        const Icon = iconKey ? ICONS[iconKey as keyof typeof ICONS] : null;
        return (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.125 * index },
            }}
            viewport={{ once: true }}
          >
            {Icon ? (
              <Icon fill="var(--color-secondary)" height={54} width={54} />
            ) : null}
            <h3>{title}</h3>
            <p>{description}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Cards;
