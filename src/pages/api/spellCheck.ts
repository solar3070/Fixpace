import type { ResponseError, SpellCheck } from "@/types";
import { isAxiosError } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const hanspell = require("hanspell");

export default async function handler(req: NextApiRequest, res: NextApiResponse<SpellCheck[] | ResponseError>) {
  const text = req.body.text;

  const end = function () {
    console.log("맞춤법 검사 완료");
  };

  const error = function (err: string) {
    console.error("맞춤법 검사 에러 발생 " + err);
  };

  const result = (data: SpellCheck[]) => {
    res.status(200).json(data);
  };

  try {
    hanspell.spellCheckByPNU(text, 6000, result, end, error);
  } catch (error) {
    if (isAxiosError<ResponseError>(error)) {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      } else {
        res.status(500).json({ message: "맞춤법 검사 요청 중에 에러가 발생했습니다." });
      }
    }
  }
}
