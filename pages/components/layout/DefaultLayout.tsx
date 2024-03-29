import { ReactNode } from "react";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
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
