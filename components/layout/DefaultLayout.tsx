import { ReactNode } from "react";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
interface MyComponentProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <>
      <AppHeader />
      <div>{children}</div>
      <AppFooter />
    </>
  );
};

export default DefaultLayout;
