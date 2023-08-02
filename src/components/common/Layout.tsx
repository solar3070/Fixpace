import Header from "@/components/common/Header";
import { COLOR } from "@/constants";
import styled from "@emotion/styled";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <StLayout>
      <StContent>
        <Header />
        {children}
      </StContent>
    </StLayout>
  );
}

export default Layout;

const StLayout = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  padding: 30px;

  @media (max-width: 500px) {
    align-items: start;
    padding: 10px;
  }
`;

const StContent = styled.section`
  width: 55%;
  min-width: 720px;
  padding: 30px;

  border: 2px solid ${COLOR.dark100};
  border-radius: 20px;

  background-color: ${COLOR.dark300};

  @media (max-width: 750px) {
    min-width: auto;
    width: 600px;
  }

  @media (max-width: 500px) {
    width: 100%;
    padding: 20px;

    border-radius: 15px;
  }
`;
