import { Input, RetryErrorBoundary, Skeleton } from "@/components/common";
import Text from "@/components/Text";
import { COLOR } from "@/constants";
import useInputValidation from "@/hooks/useInputValidation";
import { StepType, userInputType } from "@/types";
import { animateSpace, validateInput } from "@/utils";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { KeyboardEvent, Suspense, useState } from "react";

interface TypingProps {
  keyword: string;
  changeStep: (step: StepType) => void;
  saveUserInput: (type: userInputType, userInput: string) => void;
}

function Typing({ keyword, changeStep, saveUserInput }: TypingProps) {
  const { error, handleError, handleFocus } = useInputValidation();
  const [sentenceList, setSentenceList] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [spacePressed, setSpacePressed] = useState(false);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      const value = e.currentTarget.value;
      const errorType = validateInput(sentenceList[currentIndex], value);
      if (errorType !== "NO_ERROR") {
        handleError(errorType);
        e.currentTarget.blur();
        return;
      }
      setCurrentIndex((prev) => prev + 1);
      saveUserInput("text", value);
      e.currentTarget.value = "";

      if (currentIndex === sentenceList.length - 1) {
        changeStep(3);
      }
    }

    if (e.key === " ") {
      setSpacePressed(true);
      animateSpace(e);
    }
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " ") {
      setSpacePressed(false);
    }
  };

  return (
    <>
      <RetryErrorBoundary>
        <Suspense fallback={<Skeleton />}>
          <Text
            keyword={keyword}
            sentenceList={sentenceList}
            currentIndex={currentIndex}
            setSentenceList={setSentenceList}
          />
        </Suspense>
      </RetryErrorBoundary>
      <Input
        placeholder="제시된 문장에 올바른 띄어쓰기를 해주세요."
        error={error}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onFocus={handleFocus}
      />
      <StSpace spacePressed={spacePressed}>space</StSpace>
    </>
  );
}

export default Typing;

const StSpace = styled.div<{ spacePressed: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  left: 50%;
  transform: translate(-50%, 0);

  width: 370px;
  height: 45px;
  margin: 50px 0 10px 0;

  border: 2px solid ${COLOR.white};
  border-radius: 10px;

  background-color: ${COLOR.purple};
  font-size: 20px;
  color: ${COLOR.white};
  box-shadow: 0 4px ${COLOR.gray100};

  ${({ spacePressed }) =>
    spacePressed &&
    css`
      box-shadow: inset 3px 8px 10px #5351c9;
      top: 2px;
    `};

  @media (max-width: 750px) {
    width: 330px;
    height: 38px;
    margin: 30px 0 10px 0;

    border-radius: 8px;
    font-size: 17px;
  }

  @media (max-width: 500px) {
    width: 75%;
    max-width: 330px;
    height: 33px;
    margin: 15px 0 5px 0;

    border-radius: 7px;
    font-size: 14px;
  }
`;
