import ProjectSingle from "./ProjectSingle";
import { projectsData } from "../data/projectsData";

function Projects() {
  return (
    <section className="flex flex-col items-center py-5 sm:py-10 mt-5 sm:mt-10">
      <p className="font-general-medium text-2xl sm:text-4xl text-ternary-dark dark:text-ternary-light mb-4 ">
        Projects
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-5">
        {projectsData.map((props, i) => {
          return <ProjectSingle key={i} {...props} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
