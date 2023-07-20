import { SpellCheck } from "@/types";

export const correctText = (text: string, checkList: SpellCheck[]) => {
  let temp = text;
  checkList.map(({ token, suggestions }: SpellCheck) => {
    temp = temp.replace(token, suggestions[0]);
  });
  return temp;
};

export const removeSpaces = (text: string) => {
  return text.replace(/(\.|\s)/gi, (_, char) => (char === "." ? ".\n" : ""));
};
