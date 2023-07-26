import Accuracy from "@/components/Accuracy";
import Correct from "@/components/Correct";
import { COLOR } from "@/constants";
import { correctTextState } from "@/recoil/atom";
import { StepType } from "@/types";
import { calcAccuracy, checkUserInput } from "@/utils";
import styled from "@emotion/styled";
import ConfettiExplosion, { ConfettiProps } from "react-confetti-explosion";
import { useRecoilValue } from "recoil";

interface ResultProps {
  userInputList: string[];
  changeStep: (step: StepType) => void;
}

function Result({ userInputList, changeStep }: ResultProps) {
  let accuracySum = 0;
  const correctList = useRecoilValue(correctTextState);

  const largeProps: ConfettiProps = {
    force: 0.8,
    duration: 3000,
    particleCount: 200,
    width: 1300,
    colors: [COLOR.purple, COLOR.white, COLOR.dark200],
  };

  return (
    <>
      <StParticle>
        <ConfettiExplosion {...largeProps} />
      </StParticle>
      <StTextWrapper>
        {userInputList.map((userInput, index) => {
          const result = checkUserInput(userInput, correctList[index]);
          accuracySum += calcAccuracy(userInput, correctList[index]);
          return <Correct key={index} result={result} />;
        })}
      </StTextWrapper>
      <StAccuracy>
        <Accuracy accuracy={Math.round(accuracySum / correctList.length)} changeStep={changeStep} />
      </StAccuracy>
    </>
  );
}

export default Result;

const StParticle = styled.div`
  display: flex;
  justify-content: center;
`;

const StTextWrapper = styled.div`
  width: 100%;

  margin-bottom: 30px;
  padding: 10px;
  border-radius: 10px;

  background-color: ${COLOR.dark200};
`;

const StAccuracy = styled.div`
  display: flex;
  justify-content: end;
`;
