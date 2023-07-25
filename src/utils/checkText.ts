import { SpellCheck } from "@/types";

const checkText = (text: string, checkList: SpellCheck[]) => {
  let temp = text;
  checkList.map(({ token, suggestions }: SpellCheck) => {
    temp = temp.replace(token, suggestions[0]);
  });
  return temp;
};

export default checkText;
