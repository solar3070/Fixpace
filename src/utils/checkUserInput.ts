import { CorrectUserInput } from "@/types";

const checkUserInput = (userText: string, correctText: string) => {
  const correctWordList = correctText.split(" ");
  const userWordList = userText.split(" ");

  let result: CorrectUserInput[] = [];
  let correct = { index: 0, sum: "", list: [] as string[] };
  let user = { index: 0, sum: "", list: [] as string[] };

  while (correct.index !== correctWordList.length && user.index !== userWordList.length) {
    if (user.sum === "" && correct.sum === "") {
      user.sum += userWordList[user.index];
      user.list.push(userWordList[user.index]);

      correct.sum += correctWordList[correct.index];
      correct.list.push(correctWordList[correct.index]);
    } else if (user.sum === correct.sum) {
      const userJoin = user.list.join(" ");
      const correctJoin = correct.list.join(" ");

      result.push({ userWord: userJoin, correctWord: userJoin !== correctJoin ? correctJoin : undefined });

      user = { index: user.index + 1, sum: "", list: [] };
      correct = { index: correct.index + 1, sum: "", list: [] };
    } else if (user.sum.length > correct.sum.length) {
      correct.index += 1;
      correct.sum += correctWordList[correct.index];
      correct.list.push(correctWordList[correct.index]);
    } else if (user.sum.length < correct.sum.length) {
      user.index += 1;
      user.sum += userWordList[user.index];
      user.list.push(userWordList[user.index]);
    }
  }

  return result;
};

export default checkUserInput;
