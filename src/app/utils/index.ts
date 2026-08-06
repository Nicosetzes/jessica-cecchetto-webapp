import {
  ANXIETY_QUESTIONS,
  DEPRESSION_QUESTIONS,
  GRIEF_QUESTIONS,
  LONELINESS_QUESTIONS,
} from "@/self-assessment/constants";
import type {
  SelfAssessmentAnswers,
  SelfAssessmentProfile,
  SelfAssessmentResult,
  SelfAssessmentScores,
} from "@/types";

export const calculateAssessmentResult = (
  answers: SelfAssessmentAnswers,
): SelfAssessmentResult => {
  const scores = calculateScores(answers);
  const profile = getAssessmentProfile(scores);

  return {
    profile,
    scores,
  };
};

export const getAssessmentProfile = (
  scores: SelfAssessmentScores,
): SelfAssessmentProfile => {
  const maxScore = Math.max(...Object.values(scores));

  const winners = Object.entries(scores).filter(
    ([, score]) => score === maxScore,
  );

  return winners.length === 1
    ? (winners[0][0] as SelfAssessmentProfile)
    : "mixed";
};

export const calculateScores = (
  answers: SelfAssessmentAnswers,
): SelfAssessmentScores => {
  return {
    anxiety: countPositiveAnswers(answers, ANXIETY_QUESTIONS),
    depression: countPositiveAnswers(answers, DEPRESSION_QUESTIONS),
    grief: countPositiveAnswers(answers, GRIEF_QUESTIONS),
    loneliness: countPositiveAnswers(answers, LONELINESS_QUESTIONS),
  };
};

const countPositiveAnswers = (
  answers: SelfAssessmentAnswers,
  questionIds: number[],
): number => {
  return questionIds.reduce((score, questionId) => {
    return answers[questionId] ? score + 1 : score;
  }, 0);
};
