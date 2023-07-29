import type { ResponseError, SpellCheck } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

const hanspell = require("hanspell");

export default async function handler(req: NextApiRequest, res: NextApiResponse<SpellCheck[] | ResponseError>) {
  const text = req.body.text;

  const endDAUM = function () {
    console.log("다음 맞춤법 검사기 검사 완료");
  };

  const CheckResultByDAUM = (data: SpellCheck[]) => {
    res.status(200).json(data);
  };

  const CheckErrorByDAUM = function (err: Error) {
    console.error("다음 맞춤법 검사 에러 발생: " + err);
    res.status(200).json([]);
  };

  const endPNU = function () {
    console.log("부산대 맞춤법 검사기 검사 완료");
  };

  const CheckResultByPNU = (data: SpellCheck[]) => {
    res.status(200).json(data);
  };

  const CheckErrorByPNU = function (err: Error) {
    console.error("부산대 맞춤법 검사 에러 발생: " + err);
    hanspell.spellCheckByDAUM(text, 6000, CheckResultByDAUM, endDAUM, CheckErrorByDAUM);
  };

  hanspell.spellCheckByPNU(text, 6000, CheckResultByPNU, endPNU, CheckErrorByPNU);
}
