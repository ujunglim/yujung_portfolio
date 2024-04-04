import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Prop {
  id: number;
  title: string;
  subtitle: string;
  img: string;
  url: string;
  ProjectInfo: any;
  ProjectHeader: any;
  projectImages: any;
}

function ProjectSingle(props: Prop) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link
        href="/projects/[id]"
        as={"/projects/" + props.id}
        aria-label="Single Project"
        passHref
      >
        <div className="overflow-hidden mx-auto rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 dark:bg-ternary-dark">
          <div>
            <Image
              src={props.img}
              className="rounded-t-xl border-none  inset-0 w-full h-full object-cover"
              alt="Project"
              layout="responsive"
              width={100}
              height={90}
            />
          </div>
          <div className="text-center px-4 py-6">
            <p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
              {props.title}
            </p>
            <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {props.subtitle}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProjectSingle;
