const calcAccuracy = (userText: string, correctText: string) => {
  let correctCount = 0;
  let wrongCount = 0;
  let uIdx = 0;
  let cIdx = 0;

  while (uIdx !== userText.length && cIdx !== correctText.length) {
    if (userText[uIdx] === correctText[cIdx]) {
      if (userText[uIdx] === " " && correctText[cIdx] === " ") {
        correctCount += 1;
      }
      uIdx += 1;
      cIdx += 1;
    } else {
      if (userText[uIdx] === " ") {
        uIdx += 1;
      } else if (correctText[cIdx] === " ") {
        cIdx += 1;
      }
      wrongCount += 1;
    }
  }

  return Math.round((correctCount / (correctCount + wrongCount)) * 100);
};

export default calcAccuracy;
