import { COLOR } from "@/constants";
import { StepType } from "@/types";
import styled from "@emotion/styled";
import Image from "next/image";

interface AccuracyProps {
  accuracy: number;
  changeStep: (step: StepType) => void;
}

function Accuracy({ accuracy, changeStep }: AccuracyProps) {
  return (
    <StAccuracyWrapper>
      <StAccuracy>
        정확도 <span style={{ color: COLOR.purple }}>{accuracy}</span>%
      </StAccuracy>
      <StReplay onClick={() => changeStep(1)}>
        <Image src="/icons/replay.svg" alt="다시하기" width={19} height={25} />
      </StReplay>
    </StAccuracyWrapper>
  );
}

export default Accuracy;

const StAccuracyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: fit-content;
  height: 80px;

  padding: 20px;

  border: 2px solid ${COLOR.dark100};
  border-radius: 10px;
`;

const StAccuracy = styled.p`
  padding: 10px 10px 0px 0;

  color: ${COLOR.white};
  font-size: 30px;
`;

const StReplay = styled.button`
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
