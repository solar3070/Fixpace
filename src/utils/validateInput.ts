import { InputErrorType } from "@/types";
import { removeSpace } from "@/utils";

const checkLengthEqual = (sentence: string, userInput: string) => {
  return sentence.length === userInput.length;
};
const checkSentenceEqual = (sentence: string, userInput: string) => {
  return sentence.slice(0, userInput.length) === userInput;
};

const validateInput = (sentence: string, userInput: string): InputErrorType => {
  const spaceRemovedUserInput = removeSpace(userInput);
  if (!checkSentenceEqual(sentence, spaceRemovedUserInput)) {
    return "ACCURACY";
  }
  if (!checkLengthEqual(sentence, spaceRemovedUserInput)) {
    return "LENGTH";
  }
  return "NO_ERROR";
};

export default validateInput;
