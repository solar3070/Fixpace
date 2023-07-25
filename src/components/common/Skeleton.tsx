import { COLOR } from "@/constants";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

function Skeleton() {
  const [message, setMessage] = useState("");
  const lineList = ["75%", "85%", "65%", "75%"];

  useEffect(() => {
    setTimeout(() => {
      setMessage("문장을 불러오는데 시간이 소요되니 잠시만 기다려주세요...");
    }, 3000);
  }, []);

  return (
    <StWrapper>
      <StSkeleton>
        {lineList.map((width, index) => (
          <StLine key={index} width={width} />
        ))}
      </StSkeleton>
      {message && <StMessage>{message}</StMessage>}
    </StWrapper>
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

const StWrapper = styled.div`
  position: relative;
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

const StMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${COLOR.gray100};
  white-space: nowrap;
`;
