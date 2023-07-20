import { useState } from "react";

export type ErrorType = "MAX_KEYWORD" | "ACCURACY" | "LENGTH" | "NO_ERROR";

function useInputValidation() {
  const [error, setError] = useState("");

  const handleError = (type: ErrorType) => {
    switch (type) {
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

  const resetError = () => {
    setError("");
  };

  return { error, handleError, resetError };
}

export default useInputValidation;
