import { motion } from "framer-motion";
import React from "react";

const CategoryTitle = ({ text }: { text: string }) => {
  return (
    <>
      <motion.p
        className="font-bold font-general-medium text-3xl sm:text-5xl text-main mb-4 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.9,
          delay: 0.2,
        }}
      >
        {text}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.3,
        }}
        className="sm:w-[250px] h-2 bg-main w-[150px]"
      />
    </>
  );
};

export default CategoryTitle;
