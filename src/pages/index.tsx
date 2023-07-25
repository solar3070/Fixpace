import { Layout } from "@/components/common";
import Keyword from "@/components/Keyword";
import Result from "@/components/Result";
import Typing from "@/components/Typing";
import { correctTextState } from "@/recoil/atom";
import { StepType, userInputType } from "@/types";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [step, setStep] = useState<StepType>(1);
  const [correctText, setCorrectText] = useRecoilState(correctTextState);
  const [userInputList, setUserInputList] = useState<string[]>([]);

  const changeStep = (step: StepType) => {
    setStep(step);
  };

  const saveUserInput = (type: userInputType, userInput: string) => {
    switch (type) {
      case "keyword":
        setKeyword(userInput);
        break;
      case "text":
        setUserInputList((prev) => [...prev, userInput]);
        break;
    }
  };

  useEffect(() => {
    if (correctText.length) {
      setCorrectText([]);
    }
  }, []);

  return (
    <Layout>
      {step === 1 && <Keyword saveUserInput={saveUserInput} changeStep={changeStep} />}
      {step === 2 && <Typing keyword={keyword} saveUserInput={saveUserInput} changeStep={changeStep} />}
      {step === 3 && <Result userInputList={userInputList} changeStep={changeStep} />}
    </Layout>
  );
}
