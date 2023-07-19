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
`;

const StContent = styled.section`
  width: 55%;
  min-width: 720px;
  padding: 30px;

  border: 2px solid ${COLOR.dark100};
  border-radius: 20px;

  background-color: ${COLOR.dark300};
`;
