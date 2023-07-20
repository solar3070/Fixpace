import { Input } from "@/components/common";
import Skeleton from "@/components/common/Skeleton";
import Text from "@/components/Text";
import useInputValidation from "@/hooks/useInputValidation";
import { validateInput } from "@/utils";
import { KeyboardEvent, Suspense, useState } from "react";

interface TypingProps {
  keyword: string;
}

function Typing({ keyword }: TypingProps) {
  const { error, handleError, resetError } = useInputValidation();
  const [sentenceList, setSentenceList] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInputList, setUserInputList] = useState<string[]>([]);

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
    }
  };

  const handleFocus = () => {
    if (error !== "") {
      resetError();
    }
  };

  return (
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
        onFocus={handleFocus}
      />
    </>
  );
}

export default Typing;
