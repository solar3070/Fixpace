import { COLOR } from "@/constants";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

function Custom404() {
  return (
    <StPageWrapper>
      <Image src="/icons/logo.svg" alt="로고" width={90} height={90} />
      <StInfo>요청하신 페이지를 찾을 수 없습니다.</StInfo>
      <Link href="/">
        <StBack>돌아가기</StBack>
      </Link>
    </StPageWrapper>
  );
}

export default Custom404;

const StPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  font-family: "Tenada";
`;

const StInfo = styled.p`
  padding-bottom: 30px;
  font-size: 23px;
  color: ${COLOR.white};
`;

const StBack = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;

  font-size: 18px;
  color: ${COLOR.purple};
  text-decoration: underline;
`;
