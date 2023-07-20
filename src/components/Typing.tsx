import { Input } from "@/components/common";
import Text from "@/components/Text";
import { Suspense } from "react";

interface TypingProps {
  keyword: string;
}

function Typing({ keyword }: TypingProps) {
  const handleChange = () => {
    console.log("체인지");
  };

  const handleFocus = () => {
    console.log("포커싱");
  };

  return (
    <>
      <Suspense fallback={<div style={{ color: "red", fontSize: "30px" }}>loading...</div>}>
        <Text keyword={keyword}></Text>
      </Suspense>
      <Input
        placeholder="타이핑할 키워드를 입력해주세요."
        value={""}
        // error={error}
        onChange={handleChange}
        onFocus={handleFocus}
      />
    </>
  );
}

export default Typing;
