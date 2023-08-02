import { COLOR } from "@/constants";
import styled from "@emotion/styled";
import Image from "next/image";

function Header() {
  return (
    <StHeader>
      <StTextLogo>
        <Image src="/icons/fixpace.svg" alt="픽스페이스" priority fill />
      </StTextLogo>
      <StLogo>
        <Image src="/icons/logo.svg" alt="로고" fill />
      </StLogo>
    </StHeader>
  );
}

export default Header;

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 30px;
  padding-bottom: 5px;
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(90deg, ${COLOR.purpleOpacity100}, ${COLOR.purple}, ${COLOR.purpleOpacity100});
  border-image-slice: 1;

  @media (max-width: 500px) {
    margin-bottom: 15px;
  }
`;

const StTextLogo = styled.div`
  position: relative;
  object-fit: contain;

  width: 300px;
  height: 80px;

  @media (max-width: 750px) {
    width: 260px;
    height: 80px;
  }

  @media (max-width: 500px) {
    width: 190px;
    height: 60px;
  }
`;

const StLogo = styled.div`
  position: relative;
  object-fit: contain;

  width: 90px;
  height: 90px;

  @media (max-width: 750px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 500px) {
    width: 50px;
    height: 50px;
  }
`;
