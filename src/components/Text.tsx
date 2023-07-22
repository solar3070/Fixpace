import { COLOR } from "@/constants";
import { useGenerateText, useSpellCheck } from "@/hooks/queries";
import { correctText, splitText } from "@/utils";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect } from "react";

interface TextProps {
  keyword: string;
  currentIndex: number;
  sentenceList: string[];
  setSentenceList: (list: string[]) => void;
}

function Text({ keyword, sentenceList, currentIndex, setSentenceList }: TextProps) {
  let text = "";
  const textQuery = useGenerateText(keyword, sentenceList);
  if (textQuery.isSuccess) {
    text = textQuery.data.text;
  }
  const checkQuery = useSpellCheck(text, sentenceList);

  useEffect(() => {
    if (checkQuery.isSuccess && !sentenceList.length) {
      const checkList = checkQuery.data;
      const textList = splitText(checkList.length ? correctText(text, checkList) : text);
      setSentenceList(textList);
    }
  }, [checkQuery]);

  return (
    <>
      <StTextWrapper>
        {sentenceList.map((sentence, index) => (
          <StText key={index} current={index === currentIndex}>
            {sentence}
          </StText>
        ))}
      </StTextWrapper>
    </>
  );
}

export default Text;

const StTextWrapper = styled.div`
  width: 100%;

  margin-bottom: 30px;
  padding: 10px;
  border-radius: 10px;

  background-color: ${COLOR.dark200};
`;

const StText = styled.p<{ current: boolean }>`
  width: fit-content;
  padding: 5px 5px 0 5px;
  border-radius: 5px;

  color: ${COLOR.gray100};
  font-size: 26px;
  line-height: 1.5;

  ${({ current }) =>
    current &&
    css`
      background-color: ${COLOR.dark300};
      color: ${COLOR.white};
    `};
`;
