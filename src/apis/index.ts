import type { SpellCheck, Text } from "@/types";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const generateTextByOpenAI = async (keyword: string) => {
  const response = await axios.post<Text>(`${BASE_URL}/api/generateText`, { keyword });
  return response.data;
};

export const spellCheckText = async (text: string) => {
  const response = await axios.post<SpellCheck[]>(`${BASE_URL}/api/spellCheck`, { text });
  return response.data;
};
