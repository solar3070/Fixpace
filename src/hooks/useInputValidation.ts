import { useState } from "react";

type ErrorType = "length" | "accuracy";

function useInputValidation() {
  const [error, setError] = useState("");

  const handleError = (type: ErrorType) => {
    switch (type) {
      case "length":
        setError("* 최대 글자 수를 초과했습니다.");
        break;
      case "accuracy":
        setError("* 제시된 문장과 일치하지 않는 글자가 있습니다.");
        break;
    }
  };

  const resetError = () => {
    setError("");
  };

  return {error, handleError, resetError};
}

export default useInputValidation;
