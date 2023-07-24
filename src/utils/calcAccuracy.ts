import { CorrectUserInput } from "@/types";

const calcAccuracy = (result: CorrectUserInput[], userInput: string) => {
  const correctSpaceCount = result.length - 1;
  if (!correctSpaceCount) return 0;
  const allSpaceCount = userInput.split(" ").length - 1;
  return Math.round((correctSpaceCount / allSpaceCount) * 100);
};

export default calcAccuracy;
