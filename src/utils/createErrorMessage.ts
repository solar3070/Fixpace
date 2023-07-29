const createErrorMessage = (status: number) => {
  let errorMessage = "";

  switch (status) {
    case 429:
      errorMessage += "AI는 1분에 문장을 최대 3개까지 만들 수 있습니다.";
      break;
    case 500:
    case 503:
      errorMessage += "요청을 처리하는 동안 서버에 오류가 발생했습니다.";
      break;
    case 504:
      errorMessage += "요청을 하는 도중 오류가 발생했습니다.";
      break;
  }
  errorMessage += "\n잠시 후에 다시 시도해주세요.";

  return errorMessage;
};

export default createErrorMessage;
