import { COLOR } from "@/constants";
import { createErrorMessage } from "@/utils";
import styled from "@emotion/styled";
import Image from "next/image";
import { FallbackProps } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const errorMessage = createErrorMessage(error.response.status);

  return (
    <StErrorFallback>
      <StErrorMessage>{errorMessage}</StErrorMessage>
      <StRetry onClick={() => resetErrorBoundary()}>
        <Image src="/icons/replay.svg" alt="다시하기" width={19} height={25} />
      </StRetry>
    </StErrorFallback>
  );
}

export default ErrorFallback;

const StErrorFallback = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 100%;
  height: 170px;
  margin-bottom: 30px;
  padding: 10px;
  border-radius: 10px;

  background-color: ${COLOR.dark200};
  color: ${COLOR.gray100};
`;

const StErrorMessage = styled.p`
  text-align: center;
  font-size: 22px;
  line-height: 1.4;
  white-space: pre;

  @media (max-width: 750px) {
    font-size: 19px;
  }

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const StRetry = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 45px;
  height: 45px;

  border: none;
  border-radius: 10px;

  background-color: ${COLOR.dark100};
  cursor: pointer;
`;
