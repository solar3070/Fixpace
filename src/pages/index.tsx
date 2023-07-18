import { createTextByOpenAI } from "@/apis/text";
import { Input, Layout } from "@/components/common";
import COLOR from "@/constants/colors";
import useInputValidation from "@/hooks/useInputValidation";
import styled from "@emotion/styled";
import React, { useState } from "react";

const MAX_KEYWORD = 5;

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const { error, handleError, resetError } = useInputValidation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length > MAX_KEYWORD) {
      setKeyword(keyword.slice(0, MAX_KEYWORD));
      handleError("length");
      e.target.blur();
      return;
    }
    setKeyword(value);
  };

  const handleFocus = () => {
    if (error !== "") {
      resetError();
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { result } = await createTextByOpenAI(keyword);
  };

  return (
    <Layout>
      <StInfoText>
        안녕하세요. 띄어쓰기 연습을 위한 Fi<span style={{ color: `${COLOR.purple}` }}>x</span>face 입니다.
      </StInfoText>
      <form onSubmit={onSubmit}>
        <Input
          placeholder="타이핑할 키워드를 입력해주세요."
          value={keyword}
          error={error}
          hasCounter={true}
          onChange={handleChange}
          onFocus={handleFocus}
        />
      </form>
    </Layout>
  );
}

const StInfoText = styled.h1`
  margin-bottom: 13px;
  font-size: 23px;
  color: ${COLOR.white};
`;
