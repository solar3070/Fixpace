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
