import { ErrorType } from "@/hooks/useInputValidation";
import { SpellCheck } from "@/types";

export const correctText = (text: string, checkList: SpellCheck[]) => {
  let temp = text;
  checkList.map(({ token, suggestions }: SpellCheck) => {
    temp = temp.replace(token, suggestions[0]);
  });
  return temp;
};

export const removeSpace = (text: string) => {
  return text.replace(/ /gi, "");
};

export const splitText = (text: string) => {
  const spaceRemovedText = removeSpace(text);
  const sentenceList = spaceRemovedText.match(/[^.!?]+[.!?]/g);
  if (sentenceList) {
    return sentenceList.map((sentence) => sentence.trim());
  }
  return [];
};

export const checkLengthEqual = (sentence: string, userInput: string) => {
  return sentence.length === userInput.length;
};

export const checkSentenceEqual = (sentence: string, userInput: string) => {
  return sentence.slice(0, userInput.length) === userInput;
};

export const validateInput = (sentence: string, userInput: string): ErrorType => {
  const spaceRemovedUserInput = removeSpace(userInput);
  if (!checkSentenceEqual(sentence, spaceRemovedUserInput)) {
    return "ACCURACY";
  }
  if (!checkLengthEqual(sentence, spaceRemovedUserInput)) {
    return "LENGTH";
  }
  return "NO_ERROR";
};
