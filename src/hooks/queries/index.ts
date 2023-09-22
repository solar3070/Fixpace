import { useQuery } from "@tanstack/react-query";
import { generateTextByOpenAI, spellCheckText } from "@/apis";

export const useGenerateText = (keyword: string, sentenceList: string[]) => {
  return useQuery(["generateText"], () => generateTextByOpenAI(keyword), {
    enabled: !sentenceList.length,
    cacheTime: 0,
  });
};

export const useSpellCheck = (text: string, sentenceList: string[]) => {
  return useQuery(["spellCheck"], () => spellCheckText(text), {
    enabled: !sentenceList.length,
    cacheTime: 0,
  });
};
