import { useGenerateText, useSpellCheck } from "@/hooks/queries";
import { correctText } from "@/utils/correctText";

function Text({ keyword }: { keyword: string }) {
  let text = "";
  let answer = "";

  const textQuery = useGenerateText(keyword, text);
  if (textQuery.isSuccess) {
    text = textQuery.data.text;
  }

  const checkQuery = useSpellCheck(text, answer);
  if (checkQuery.isSuccess) {
    const checkList = checkQuery.data;
    answer = text && checkList.length ? correctText(text, checkList) : text;
  }

  return <div style={{ color: "green" }}>{answer}</div>;
}

export default Text;
