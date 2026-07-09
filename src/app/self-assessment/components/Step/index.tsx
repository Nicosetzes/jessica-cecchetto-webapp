import type { SelfAssessmentQuestion } from "@/types";
import styles from "./styles.module.css";

type StepProps = {
  currentQuestion: number;
  question: SelfAssessmentQuestion;
  totalQuestions: number;
  value?: boolean;
  onAnswer: (value: boolean) => void;
  onPrevious: () => void;
  onNext: () => void;
};

const Step = ({
  currentQuestion,
  totalQuestions,
  question,
  value,
  onAnswer,
  onPrevious,
  onNext,
}: StepProps) => {
  return (
    <div className={styles.step}>
      <div className={styles.header}>
        <span className={styles.counter}>
          Question {currentQuestion + 1} of {totalQuestions}
        </span>
        <h2 className={styles.question}>{question.text}</h2>
      </div>
      <div className={styles.answers}>
        <button
          type="button"
          className={`${styles.answer} ${
            value === true ? styles.selected : ""
          }`}
          onClick={() => onAnswer(true)}
        >
          Yes
        </button>
        <button
          type="button"
          className={`${styles.answer} ${
            value === false ? styles.selected : ""
          }`}
          onClick={() => onAnswer(false)}
        >
          No
        </button>
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          onClick={onPrevious}
          disabled={currentQuestion === 0}
          className={styles.secondaryButton}
        >
          Previous
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={value === undefined}
          className={styles.primaryButton}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step;
