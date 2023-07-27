import { useQuery } from "@tanstack/react-query";
import { generateTextByOpenAI, spellCheckText } from "@/apis";

export const useGenerateText = (keyword: string, text: string) => {
  return useQuery(["generateText", keyword], () => generateTextByOpenAI(keyword), {
    enabled: !text,
  });
};

export const useSpellCheck = (text: string, sentenceList: string[]) => {
  return useQuery(["spellCheck", text], () => spellCheckText(text), {
    enabled: !sentenceList.length,
  });
};
