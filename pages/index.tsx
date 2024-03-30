import AppBanner from "../components/AppBanner";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="container mx-auto">
      <AppBanner />
      <Projects />
    </div>
  );
}
