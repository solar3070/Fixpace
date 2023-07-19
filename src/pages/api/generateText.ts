import type { ResponseError, TextResponse } from "@/types";
import { isAxiosError } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

export default async function handler(req: NextApiRequest, res: NextApiResponse<TextResponse | ResponseError>) {
  if (!configuration.apiKey) {
    res.status(500).json({ message: "OpenAI API key not configured, please follow instructions in README.md" });
    return;
  }

  const keyword = req.body.keyword || "";
  if (keyword.trim().length === 0) {
    res.status(400).json({ message: "Please enter a valid keyword" });
    return;
  }

  try {
    const { data } = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You make a short novel in Korean." },
        {
          role: "user",
          content: `Please write a novel in Korean that is more than 80 characters and less than 100 characters related to ${keyword}`,
        },
      ],
    });
    const text = data.choices[0].message?.content;
    if (text) {
      res.status(200).json({ text });
    }
  } catch (error) {
    if (isAxiosError<ResponseError>(error)) {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      } else {
        res.status(500).json({ message: "An error occurred during your request." });
      }
    }
  }
}
