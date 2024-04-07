import DrawIO from "./DrawIO";
import FengKong from "./FengKong";
import FitHub from "./FitHub";
import ShaoXing from "./ShaoXing";
import TubePicker from "./TubePicker";

function Projects() {
  return (
    <section className="flex flex-col items-center py-5 sm:py-10 mt-5 sm:mt-10">
      <p className="font-general-medium text-2xl sm:text-4xl text-ternary-dark dark:text-ternary-light mb-4 ">
        Projects
      </p>
      <TubePicker />
      <FitHub />
      <FengKong />
      <ShaoXing />
      <DrawIO />
    </section>
  );
}

export default Projects;
