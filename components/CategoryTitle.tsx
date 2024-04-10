import { motion } from "framer-motion";
import React from "react";

const CategoryTitle = ({
  text,
  isWhite = false,
}: {
  text: string;
  isWhite?: boolean;
}) => {
  return (
    <>
      <motion.p
        className={`font-bold font-general-medium text-3xl sm:text-5xl mb-4 ${
          isWhite ? "text-white" : "text-main"
        }`}
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
        className={`sm:w-[250px] h-2  w-[150px] ${
          isWhite ? "bg-white" : "bg-main"
        }`}
      />
    </>
  );
};

export default CategoryTitle;
