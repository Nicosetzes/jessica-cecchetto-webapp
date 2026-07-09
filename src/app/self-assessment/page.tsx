"use client";

import { QUESTIONS } from "./constants";
import type { SelfAssessmentAnswers } from "@/types";
import { calculateAssessmentResult } from "@/utils";
import { useState } from "react";
import { Introduction, ProgressBar, Result, Step } from "./components";

export default function SelfAssessment() {
  const [answers, setAnswers] = useState<SelfAssessmentAnswers>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [started, setStarted] = useState(false);

  const currentQuestionData = QUESTIONS[currentQuestion];
  const isFinished = currentQuestion === QUESTIONS.length;

  const handleAnswer = (value: boolean): void => {
    const questionId = QUESTIONS[currentQuestion].id;

    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleNext = (): void => {
    setCurrentQuestion((prev) => Math.min(prev + 1, QUESTIONS.length));
  };

  const handlePrevious = (): void => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  if (!started) {
    return <Introduction onStart={() => setStarted(true)} />;
  }

  if (isFinished) {
    return <Result result={calculateAssessmentResult(answers)} />;
  }

  console.log("Current Question:", currentQuestionData);
  console.log("Answers:", answers);

  return (
    <section className="section">
      <ProgressBar current={currentQuestion + 1} total={QUESTIONS.length} />
      <Step
        currentQuestion={currentQuestion}
        question={currentQuestionData}
        totalQuestions={QUESTIONS.length}
        value={answers[currentQuestionData.id]}
        onAnswer={handleAnswer}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </section>
  );
}
