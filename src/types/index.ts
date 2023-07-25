export type ResponseError = {
  message: string;
};

export type Text = {
  text: string;
};

export type SpellCheck = {
  token: string;
  suggestions: string[];
  info: string;
};

export type StepType = 1 | 2 | 3;

export type CorrectUserInput = {
  correctWord?: string;
  userWord: string;
};

export type userInputType = "keyword" | "text";
