import Accuracy from "@/components/Accuracy";
import Correct from "@/components/Correct";
import { correctTextState } from "@/recoil/atom";
import { StepType } from "@/types";
import { calcAccuracy } from "@/utils";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";

interface ResultProps {
  userInputList: string[];
  changeStep: (step: StepType) => void;
}

function Result({ userInputList, changeStep }: ResultProps) {
  const correctList = useRecoilValue(correctTextState);

  return (
    <>
      <Correct userInputList={userInputList} correctList={correctList} />
      <StAccuracy>
        <Accuracy accuracy={calcAccuracy(userInputList, correctList)} changeStep={changeStep} />
      </StAccuracy>
    </>
  );
}

export default Result;

const StAccuracy = styled.div`
  display: flex;
  justify-content: end;
`;
