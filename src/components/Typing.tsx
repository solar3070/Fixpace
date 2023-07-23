import Accuracy from "@/components/Accuracy";
import { Input, Skeleton } from "@/components/common";
import Correct from "@/components/Correct";
import Text from "@/components/Text";
import { COLOR } from "@/constants";
import useInputValidation from "@/hooks/useInputValidation";
import { correctTextState } from "@/recoil/atom";
import { calcAccuracy, validateInput } from "@/utils";
import { animateSpace } from "@/utils/animateSpace";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { KeyboardEvent, Suspense, useState } from "react";
import { useRecoilValue } from "recoil";

interface TypingProps {
  keyword: string;
}

function Typing({ keyword }: TypingProps) {
  const { error, handleError, resetError } = useInputValidation();
  const [sentenceList, setSentenceList] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInputList, setUserInputList] = useState<string[]>([]);
  const [spacePressed, setSpacePressed] = useState(false);
  const [done, setDone] = useState(false);
  const correctList = useRecoilValue(correctTextState);

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
      setUserInputList((prev) => [...prev, value]);
      e.currentTarget.value = "";

      if (currentIndex === sentenceList.length - 1) {
        setDone(true);
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

  const handleFocus = () => {
    if (error !== "") {
      resetError();
    }
  };

  return (
    <>
      {done && (
        <>
          <Suspense fallback={<Skeleton />}>
            <Text
              keyword={keyword}
              sentenceList={sentenceList}
              currentIndex={currentIndex}
              setSentenceList={setSentenceList}
            />
          </Suspense>
          <Input
            placeholder="제시된 문장에 올바른 띄어쓰기를 해주세요."
            error={error}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            onFocus={handleFocus}
          />
          <StSpace spacePressed={spacePressed}>space</StSpace>
        </>
      )}
      {!done && (
        <>
          <Correct userInputList={userInputList} correctList={correctList} />
          <Accuracy accuracy={calcAccuracy(userInputList, correctList)} />
        </>
      )}
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
`;
