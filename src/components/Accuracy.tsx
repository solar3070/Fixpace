import { COLOR } from "@/constants";
import styled from "@emotion/styled";

interface AccuracyProps {
  accuracy: number;
}

function Accuracy({ accuracy }: AccuracyProps) {
  return (
    <StAccuracy>
      <StText>
        정확도 <span style={{ color: COLOR.purple }}>{accuracy}</span>%
      </StText>
      <StButton></StButton>
    </StAccuracy>
  );
}

export default Accuracy;

const StAccuracy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 260px;
  height: 80px;

  padding: 20px;

  border: 2px solid ${COLOR.dark100};
  border-radius: 10px;
`;

const StText = styled.p`
  padding-top: 10px;

  color: ${COLOR.white};
  font-size: 30px;
`;

const StButton = styled.button`
  width: 50px;
  height: 50px;

  border: none;
  border-radius: 10px;

  background-color: ${COLOR.dark100};
`;
