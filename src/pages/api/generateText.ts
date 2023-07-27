import { NextResponse } from "next/server";

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

  const data = await fetch("https://api.openai.com/v1/chat/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    method: "POST",
    body: JSON.stringify(payload),
  }).then((response) => response.json());

  const text = data.choices[0].message?.content;
  return NextResponse.json({ text });
}
