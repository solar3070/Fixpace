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
      <StReplayWrapper onClick={() => changeStep(1)}>
        <StReplay>
          <Image src="/icons/replay.svg" alt="다시하기" fill />
        </StReplay>
        {/* <Image src="/icons/replay.svg" alt="다시하기" width={19} height={25} /> */}
      </StReplayWrapper>
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

  @media (max-width: 750px) {
    height: 70px;
    padding: 17px;
  }

  @media (max-width: 500px) {
    height: 50px;
    padding: 13px;
    border-radius: 8px;
  }
`;

const StAccuracy = styled.p`
  padding: 10px 10px 0px 0;

  color: ${COLOR.white};
  font-size: 30px;

  @media (max-width: 750px) {
    padding: 7px 10px 0px 0;
    font-size: 25px;
  }

  @media (max-width: 500px) {
    padding: 4px 7px 0px 0;
    font-size: 18px;
  }
`;

const StReplayWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 45px;
  height: 45px;

  border: none;
  border-radius: 10px;

  background-color: ${COLOR.dark100};
  cursor: pointer;

  @media (max-width: 750px) {
    width: 35px;
    height: 35px;
  }

  @media (max-width: 500px) {
    width: 28px;
    height: 28px;
    border-radius: 8px;
  }
`;

const StReplay = styled.div`
  position: relative;

  width: 19px;
  height: 25px;

  @media (max-width: 750px) {
    width: 17px;
    height: 23px;
  }

  @media (max-width: 500px) {
    width: 14px;
    height: 18px;
  }
`;
