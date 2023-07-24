import { Layout } from "@/components/common";
import Keyword from "@/components/Keyword";
import Result from "@/components/Result";
import Typing from "@/components/Typing";
import { correctTextState } from "@/recoil/atom";
import { StepType } from "@/types";
import { FormEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [step, setStep] = useState<StepType>(1);
  const [correctText, setCorrectText] = useRecoilState(correctTextState);
  const [userInputList, setUserInputList] = useState<string[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>, keyword: string) => {
    e.preventDefault();
    setKeyword(keyword);
    setStep(2);
  };

  useEffect(() => {
    if (correctText.length) {
      setCorrectText([]);
    }
  }, []);

  const changeStep = (step: StepType) => {
    setStep(step);
  };

  const saveUserInput = (userInput: string) => {
    setUserInputList((prev) => [...prev, userInput]);
  };

  return (
    <Layout>
      {step === 1 && <Keyword onSubmit={handleSubmit} />}
      {step === 2 && <Typing keyword={keyword} changeStep={changeStep} saveUserInput={saveUserInput} />}
      {step === 3 && <Result userInputList={userInputList} changeStep={changeStep} />}
    </Layout>
  );
}
