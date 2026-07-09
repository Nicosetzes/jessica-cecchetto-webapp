import { motion } from "framer-motion";
import styles from "./styles.module.css";

type ProgressBarProps = {
  current: number;
  total: number;
};

const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const progress = (current / total) * 100;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.label}>
          Question {current} of {total}
        </span>
        <span className={styles.percentage}>{Math.round(progress)}%</span>
      </div>
      <div
        className={styles.track}
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={0}
        aria-valuemax={total}
      >
        <motion.div
          className={styles.fill}
          animate={{
            width: `${progress}%`,
          }}
          initial={false}
          transition={{
            duration: 0.3,
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
