export enum PersonalityType {
  MoreOfIntrovert = 'introvert',
  MoreOfExtrovert = 'extrovert'
}

export interface Answer {
  pts: number;
  text: string;
}

export interface MultipleChoiceQuestion {
  id: number;
  question: string;
  answers: Answer[]
}

export interface Explainer {
  headline: string;
  text: string;
}

export type PersonalityTypeExplainer = {} | {
  [key in PersonalityType]: Explainer;
}