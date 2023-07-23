import { COLOR } from "@/constants";
import { checkUserInput } from "@/utils";
import styled from "@emotion/styled";

interface CorrectProps {
  userInputList: string[];
  correctList: string[];
}

function Correct({ userInputList, correctList }: CorrectProps) {
  return (
    <StTextWrapper>
      {userInputList.map((userInput, index) => {
        const result = checkUserInput(userInput, correctList[index]);
        return (
          <StLine key={index}>
            {result.map(({ user, correct }) =>
              correct ? (
                <StText>
                  <span>{user}</span>
                  <StCorrect>'{correct}'</StCorrect>
                </StText>
              ) : (
                <span>{user}</span>
              ),
            )}
          </StLine>
        );
      })}
    </StTextWrapper>
  );
}

export default Correct;

const StTextWrapper = styled.div`
  width: 100%;

  margin-bottom: 30px;
  padding: 10px;
  border-radius: 10px;

  background-color: ${COLOR.dark200};
`;

const StLine = styled.div`
  position: relative;
  padding: 5px 5px 0 5px;

  color: ${COLOR.white};
  font-size: 26px;
  line-height: 2;
`;

const StText = styled.div`
  display: inline-block;
  position: relative;
  width: fit-content;

  & > span {
    background: ${COLOR.purpleOpacity200};
    border-bottom: 2px solid ${COLOR.purple};
  }
`;

const StCorrect = styled.div`
  position: absolute;
  top: -25px;

  color: ${COLOR.purple};
  font-size: 17px;
  line-height: 3;
`;
