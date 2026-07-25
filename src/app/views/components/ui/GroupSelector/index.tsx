"use client";

import type { GroupSelectorProps } from "./types";
import ICONS from "./iconsMap";
import styles from "./styles.module.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const GroupSelector = ({ color = "#fff", groups }: GroupSelectorProps) => {
  const [selected, setSelected] = useState(groups[0]);

  return (
    <div className={styles.groupSelector}>
      <div className={styles.tabs}>
        {groups.map((group) => (
          <button
            key={group.id}
            onClick={() => setSelected(group)}
            className={`${styles.tab} ${
              selected.id === group.id ? styles.active : ""
            }`}
          >
            {group.title}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={selected.id}
          className={styles.content}
          initial={{
            opacity: 0,
            scale: 0.99,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.99,
          }}
          transition={{
            duration: 0.22,
            ease: "easeOut",
          }}
        >
          <h3>{selected.title}</h3>
          <p>{selected.subtitle}</p>
          <ul className={styles.goalList}>
            {selected.goals.map(({ description, iconKey, title }) => {
              const Icon = iconKey ? ICONS[iconKey] : null;
              return (
                <li className={styles.goal} key={title}>
                  {Icon && <Icon fill={color} height={54} width={54} />}
                  <h3>{title}</h3>
                  <p>{description}</p>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default GroupSelector;
