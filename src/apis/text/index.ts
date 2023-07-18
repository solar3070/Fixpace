import type { Text } from "@/types";
import axios from "axios";

export const createTextByOpenAI = async (keyword: string) => {
  const response = await axios.post<Text>("/api/generate", { keyword });
  return response.data;
};
