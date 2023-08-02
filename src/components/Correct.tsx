import { COLOR } from "@/constants";
import { CorrectUserInput } from "@/types";
import styled from "@emotion/styled";

interface CorrectProps {
  result: CorrectUserInput[];
}

function Correct({ result }: CorrectProps) {
  return (
    <StLine>
      {result.map(({ userWord, correctWord }, index) => {
        return correctWord ? (
          <StText key={index} isLastWord={index === result.length - 1}>
            <span>{userWord}</span>
            <span>&nbsp;</span>
            <StCorrect>'{correctWord}'</StCorrect>
          </StText>
        ) : (
          <span key={index}>{userWord + " "}</span>
        );
      })}
    </StLine>
  );
}

export default Correct;

const StLine = styled.div`
  position: relative;
  padding: 5px 5px 0 5px;

  color: ${COLOR.white};
  font-size: 26px;
  line-height: 2;

  @media (max-width: 750px) {
    font-size: 20px;
  }

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const StText = styled.div<{ isLastWord: boolean }>`
  display: inline-block;
  position: relative;
  width: fit-content;

  & > span:nth-of-type(1) {
    background: ${COLOR.purpleOpacity200};
    border-bottom: 2px solid ${COLOR.purple};
    white-space: ${({ isLastWord }) => (isLastWord ? "normal" : "pre")};
  }
`;

const StCorrect = styled.div`
  position: absolute;
  top: -25px;

  color: ${COLOR.purple};
  font-size: 17px;
  line-height: 3;

  @media (max-width: 750px) {
    top: -23px;
    font-size: 15px;
  }

  @media (max-width: 500px) {
    top: -20px;
    font-size: 13px;
  }
`;
