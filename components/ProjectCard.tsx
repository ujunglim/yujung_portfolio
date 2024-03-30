import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function ProjectCard({ data }) {
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
        as={"/projects/" + data.id}
        aria-label="Project"
        passHref
      >
        <div className="overflow-hidden mx-auto rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 dark:bg-ternary-dark">
          <div>
            <Image
              src={data.img}
              className="rounded-t-xl border-none  inset-0 w-full h-full object-cover"
              alt="Project"
              layout="responsive"
              width={100}
              height={90}
            />
          </div>
          <div className="text-center px-4 py-6">
            <p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
              {data.title}
            </p>
            <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {data.subtitle}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
