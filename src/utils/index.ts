import { ErrorType } from "@/hooks/useInputValidation";
import { SpellCheck } from "@/types";

export const checkText = (text: string, checkList: SpellCheck[]) => {
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
  const sentenceList = text.match(/[^.]+[.]/g);
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

type resultType = {
  correct?: string;
  user: string;
};

export const checkUserInput = (userText: string, correctText: string) => {
  const correct = correctText.split(" ");
  const user = userText.split(" ");

  let result: resultType[] = [];
  let userIndex = 0;
  let wordSum = "";
  let wordList: string[] = [];

  correct.forEach((word) => {
    if (word !== user[userIndex]) {
      wordSum += word;
      wordList.push(word);
      if (wordSum === user[userIndex]) {
        result.push({ correct: wordList.join(" "), user: wordSum + " " });
        wordSum = "";
        wordList = [];
        userIndex += 1;
      }
    } else {
      result.push({ user: user[userIndex] + " " });
      userIndex += 1;
    }
  });

  return result;
};
