import { motion } from "framer-motion";
import DrawIO from "./DrawIO";
import FitHub from "./FitHub";
import TubePicker from "./TubePicker";
import Yuwitter from "./Yuwitter";
import CategoryTitle from "./CategoryTitle";

function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex flex-col items-center py-5 sm:py-10 mt-5 sm:mt-10"
    >
      <CategoryTitle text="PROJECT" />
      <TubePicker />
      <FitHub />
      <DrawIO />
      <Yuwitter />
    </motion.section>
  );
}

export default Projects;
