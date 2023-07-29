import { TEMP_TEXT } from "@/constants";
import { NextResponse } from "next/server";

class CustomError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export const config = { runtime: "edge", regions: "icn1" };

export default async function handler(req: Request) {
  const { keyword } = (await req.json()) as { keyword: string };

  const payload = {
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You make a short novel in Korean." },
      {
        role: "user",
        content: `Please write a novel related to ${keyword} in Korean.
        Novel is more than 60 characters and less than 80 characters.
        If possible, try to keep novel to three or four sentences.
        A sentence should be about 20 characters long.
        Don't include English in a novel`,
      },
    ],
  };

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      method: "POST",
      body: JSON.stringify(payload),
    });
    const data = await response.json();

    if (!response.ok) {
      const { status } = response;
      const { code, message } = data.error;
      console.error("error: ", message);
      if (status === 401 || (status === 429 && code === "insufficient_quota")) {
        return NextResponse.json({ text: TEMP_TEXT });
      }
      throw new CustomError(message, status);
    }

    const text = data.choices[0].message?.content;
    return NextResponse.json({ text });
  } catch (error) {
    const { message, status } = error as CustomError;
    return NextResponse.json({ message }, { status });
  }
}
