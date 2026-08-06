"use client";

import { CTALink } from "../../ui";
import styles from "./styles.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const SelfAssessmentToast = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("assessment-toast-dismissed")) {
      return;
    }

    const timer = setTimeout(() => {
      setVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closeToast = () => {
    sessionStorage.setItem("assessment-toast-dismissed", "true");
    setVisible(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeToast();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          className={styles.card}
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 40,
            scale: 0.98,
          }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
        >
          <button
            aria-label="Close"
            className={styles.close}
            onClick={closeToast}
          >
            ×
          </button>
          <span className={styles.eyebrow}>Self-Assessment</span>
          <h3>Not sure where to begin?</h3>
          <p>
            Complete a brief self-assessment to reflect on your current
            challenges and identify areas where therapy may be helpful.
          </p>
          <CTALink
            href="/self-assessment"
            label="Start Assessment"
            onClick={closeToast}
          />
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default SelfAssessmentToast;
