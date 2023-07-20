import { COLOR } from "@/constants";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

function Skeleton() {
  const lineList = ["75%", "85%", "65%", "75%"];

  return (
    <StSkeleton>
      {lineList.map((width, index) => (
        <StLine key={index} width={width} />
      ))}
    </StSkeleton>
  );
}

export default Skeleton;

const loading = keyframes`
  0% {
    background-color: ${COLOR.dark100Opacity};
  }
  50% {
    background-color: ${COLOR.purpleOpacity};
  }
  100% {
    background-color: ${COLOR.dark100Opacity};
  }
`;

const StSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  margin-bottom: 30px;
  padding: 10px;
  border-radius: 10px;

  background-color: ${COLOR.dark200};
`;

const StLine = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  height: 30px;

  border-radius: 5px;
  background-color: ${COLOR.dark100};

  animation: ${loading} 1.8s infinite;
`;
