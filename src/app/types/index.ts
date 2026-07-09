export type SelfAssessmentAnswers = Record<number, boolean>;

export type SelfAssessmentProfile =
  | "depression"
  | "anxiety"
  | "grief"
  | "loneliness"
  | "mixed";

export type SelfAssessmentQuestion = {
  id: number;
  text: string;
};

export type SelfAssessmentResult = {
  profile: SelfAssessmentProfile;
  scores: SelfAssessmentScores;
};

export type SelfAssessmentScores = {
  anxiety: number;
  depression: number;
  grief: number;
  loneliness: number;
};

export type SVG = {
  fill?: string;
  filled?: boolean;
  height?: number;
  size?: number;
  width?: number;
} & React.SVGProps<SVGSVGElement>;
