import { ReactNode } from "react";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
interface MyComponentProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center">
      <AppHeader />
      <div className="mt-[200px]">{children}</div>
      <AppFooter />
    </div>
  );
};

export default DefaultLayout;
