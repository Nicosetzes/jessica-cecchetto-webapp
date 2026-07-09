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

export const applyPriorityRules = (
  scores: SelfAssessmentScores,
  answers: SelfAssessmentAnswers,
): SelfAssessmentProfile => {
  const entries = Object.entries(scores);
  const maxScore = Math.max(...Object.values(scores));
  const winners = entries.filter(([, score]) => score === maxScore);

  if (winners.length === 1) {
    return winners[0][0] as SelfAssessmentProfile;
  }

  if (answers[9] && answers[10] && (answers[11] || answers[12])) {
    return "grief";
  }

  if (answers[6] && answers[7] && answers[8]) {
    return "anxiety";
  }

  if (answers[1] && answers[5] && answers[17] && !answers[20]) {
    return "depression";
  }

  if (answers[2] && answers[14] && answers[15] && answers[20]) {
    return "loneliness";
  }

  return "mixed";
};

export const calculateAssessmentResult = (
  answers: SelfAssessmentAnswers,
): SelfAssessmentResult => {
  const scores = calculateScore(answers);

  const profile = applyPriorityRules(scores, answers);

  return {
    profile,
    scores,
  };
};

export const calculateScore = (
  answers: SelfAssessmentAnswers,
): SelfAssessmentScores => {
  const scores: SelfAssessmentScores = {
    anxiety: countPositiveAnswers(answers, ANXIETY_QUESTIONS),
    depression: countPositiveAnswers(answers, DEPRESSION_QUESTIONS),
    grief: countPositiveAnswers(answers, GRIEF_QUESTIONS),
    loneliness: countPositiveAnswers(answers, LONELINESS_QUESTIONS),
  };

  if (answers[8]) {
    scores.anxiety += 1;
  }

  if (answers[20]) {
    scores.loneliness += 1;
  } else {
    scores.depression += 1;
  }

  if (answers[19]) {
    scores.anxiety += 1;
  } else {
    scores.grief += 1;
  }

  return scores;
};

const countPositiveAnswers = (
  answers: SelfAssessmentAnswers,
  questionIds: number[],
): number => {
  return questionIds.reduce((score, questionId) => {
    return answers[questionId] ? score + 1 : score;
  }, 0);
};
