import AppBanner from "../components/AppBanner";
import Projects from "../components/Projects";
import Work from "../components/Work";

export default function Home() {
  return (
    <div className="container mx-auto">
      <AppBanner />
      <Projects />
      <Work />
    </div>
  );
}
