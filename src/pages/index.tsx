import { Input, Layout } from "@/components/common";
import Typing from "@/components/Typing";
import { COLOR, MAX_KEYWORD } from "@/constants";
import useInputValidation from "@/hooks/useInputValidation";
import styled from "@emotion/styled";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const { error, handleError, resetError } = useInputValidation();
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length > MAX_KEYWORD) {
      setInputValue(inputValue.slice(0, MAX_KEYWORD));
      handleError("length");
      e.target.blur();
      return;
    }
    setInputValue(value);
  };

  const handleFocus = () => {
    if (error !== "") {
      resetError();
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {!submitted && (
        <>
          <StInfoText>
            안녕하세요. 띄어쓰기 연습을 위한 Fi<span style={{ color: `${COLOR.purple}` }}>x</span>face 입니다.
          </StInfoText>
          <form onSubmit={onSubmit}>
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
      )}
      {submitted && <Typing keyword={inputValue} />}
    </Layout>
  );
}

const StInfoText = styled.h1`
  margin-bottom: 13px;
  font-size: 23px;
  color: ${COLOR.white};
`;
