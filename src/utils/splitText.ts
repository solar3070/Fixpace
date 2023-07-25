const splitText = (text: string) => {
  const sentenceList = text.match(/[^.]+[.]/g);
  if (sentenceList) {
    return sentenceList.map((sentence) => sentence.trim());
  }
  return [];
};

export default splitText;
