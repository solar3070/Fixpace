import { COLOR } from "@/constants";
import { correctTextState } from "@/recoil/atom";
import { StepType } from "@/types";
import styled from "@emotion/styled";
import Image from "next/image";
import { useSetRecoilState } from "recoil";

interface AccuracyProps {
  accuracy: number;
  changeStep: (step: StepType) => void;
}

function Accuracy({ accuracy, changeStep }: AccuracyProps) {
  const setCorrectTextState = useSetRecoilState(correctTextState);

  const handleClick = () => {
    changeStep(1);
    setCorrectTextState([]);
  };

  return (
    <StAccuracyWrapper>
      <StAccuracy>
        정확도 <span style={{ color: COLOR.purple }}>{accuracy}</span>%
      </StAccuracy>
      <StReplay onClick={handleClick}>
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

  width: 260px;
  height: 80px;

  padding: 20px;

  border: 2px solid ${COLOR.dark100};
  border-radius: 10px;
`;

const StAccuracy = styled.p`
  padding-top: 10px;

  color: ${COLOR.white};
  font-size: 30px;
`;

const StReplay = styled.button`
  width: 50px;
  height: 50px;

  border: none;
  border-radius: 10px;

  background-color: ${COLOR.dark100};
  cursor: pointer;
`;
