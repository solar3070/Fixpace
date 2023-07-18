import COLOR from "@/constants/colors";
import styled from "@emotion/styled";
import Image from "next/image";

function Header() {
  return (
    <StHeader>
      <Image src="/icons/fixpace.svg" alt="픽스페이스" priority width={320} height={80} />
      <Image src="/icons/logo.svg" alt="로고" width={90} height={90} />
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
  border-image: linear-gradient(90deg, ${COLOR.purpleOpacity}, ${COLOR.purple}, ${COLOR.purpleOpacity});
  border-image-slice: 1;
`;
