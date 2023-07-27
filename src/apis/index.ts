import type { SpellCheck, Text } from "@/types";
import axios from "axios";

export const generateTextByOpenAI = async (keyword: string) => {
  const response = await axios.post<Text>("/api/generateText", { keyword });
  return response.data;
};

export const spellCheckText = async (text: string) => {
  const response = await axios.post<SpellCheck[]>("/api/spellCheck", { text });
  return response.data;
};
