import { InputErrorType } from "@/types";
import { useState } from "react";

function useInputValidation() {
  const [error, setError] = useState("");

  const handleError = (type: InputErrorType) => {
    switch (type) {
      case "MIN_KEYWORD":
        setError("* 키워드는 한 글자 이상 입력해 주세요.");
        break;
      case "MAX_KEYWORD":
        setError("* 최대 글자 수를 초과했습니다.");
        break;
      case "ACCURACY":
        setError("* 제시된 문장과 일치하지 않는 글자가 있습니다.");
        break;
      case "LENGTH":
        setError("* 제시된 문장의 글자 수와 일치하지 않습니다.");
        break;
    }
  };

  const handleFocus = () => {
    if (error !== "") {
      setError("");
    }
  };

  return { error, handleError, handleFocus };
}

export default useInputValidation;
