import { Input } from "@/components/common";
import { COLOR, MAX_KEYWORD } from "@/constants";
import useInputValidation from "@/hooks/useInputValidation";
import { StepType, userInputType } from "@/types";
import styled from "@emotion/styled";
import { ChangeEvent, FormEvent, useState } from "react";

interface KeywordProps {
  saveUserInput: (type: userInputType, userInput: string) => void;
  changeStep: (step: StepType) => void;
}

function Keyword({ saveUserInput, changeStep }: KeywordProps) {
  const [inputValue, setInputValue] = useState("");
  const { error, handleError, handleFocus } = useInputValidation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length > MAX_KEYWORD) {
      setInputValue(inputValue.slice(0, MAX_KEYWORD));
      handleError("MAX_KEYWORD");
      e.target.blur();
      return;
    }
    setInputValue(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>, keyword: string) => {
    e.preventDefault();
    if (!inputValue.length) {
      handleError("MIN_KEYWORD");
      return;
    }
    saveUserInput("keyword", keyword);
    changeStep(2);
  };

  return (
    <>
      <StInfoText>
        <p>
          안녕하세요. 띄어쓰기 연습 공간 Fi<span style={{ color: `${COLOR.purple}` }}>x</span>face 입니다.
        </p>
        <p>
          <span style={{ color: `${COLOR.purple}` }}>AI가 제공하는 문장에 올바른 띄어쓰기</span>를 하며 띄어쓰기를
          연습해요!
        </p>
      </StInfoText>
      <form onSubmit={(e) => handleSubmit(e, inputValue)}>
        <Input
          placeholder="타이핑할 키워드를 입력해주세요."
          value={inputValue}
          error={error}
          hasCounter={true}
          onChange={handleChange}
          onFocus={handleFocus}
        />
      </form>
    </>
  );
}

export default Keyword;

const StInfoText = styled.div`
  margin-bottom: 13px;

  font-size: 23px;
  color: ${COLOR.white};
  line-height: 1.3;
`;
