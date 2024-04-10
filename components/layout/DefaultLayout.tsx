import { ReactNode } from "react";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import AppBanner from "../AppBanner";
import AboutMe from "../AboutMe";
interface MyComponentProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center">
      <AppHeader />
      <AppBanner />
      <div className="mt-[100px]">{children}</div>
      <AboutMe />
      <AppFooter />
    </div>
  );
};

export default DefaultLayout;
