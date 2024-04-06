import { motion } from "framer-motion";
import { FiArrowDownCircle } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { SiTistory } from "react-icons/si";

const socialLinks = [
  {
    id: 1,
    icon: <FiGithub />,
    url: "https://github.com/ujunglim",
  },
  {
    id: 2,
    icon: <SiTistory />,
    url: "https://ujunglim.tistory.com/",
  },
];

function AppBanner() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex flex-col sm:justify-between items-center sm:flex-row mt-5 md:mt-2"
    >
      <div className="w-full md:w-1/3 text-left">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
        >
          안녕하세요 임유정입니다.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
        >
          프론트엔드 개발자
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.3,
          }}
          className="flex justify-center sm:block"
        >
          <div className="flex mt-12 mb-6">
            <a
              download="임유정 이력서.pdf"
              href="/files/임유정_이력서.pdf"
              className="font-general-medium flex justify-center items-center w-20 sm:w-36  sm:mb-0 text-lg border  dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-main text-gray-500 hover:text-white duration-100"
              aria-label="Resume"
            >
              <FiArrowDownCircle className="ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-50"></FiArrowDownCircle>
              <span className="text-sm sm:text-lg duration-50">이력서</span>
            </a>
            <div className="font-general-regular flex flex-col justify-center items-center ">
              <ul className="flex">
                {socialLinks.map((link) => (
                  <a
                    href={link.url}
                    target="__blank"
                    key={link.id}
                    className="text-gray-400 hover:text-main cursor-pointer rounded-lg p-4 duration-100"
                  >
                    <i className="text-xl sm:text-2xl md:text-3xl">
                      {link.icon}
                    </i>
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
      >
        {/* <img
          layout="responsive"
          src={
            activeTheme === "dark"
              ? "/images/developer.svg"
              : "/images/developer-dark.svg"
          }
          alt="Developer"
        /> */}
      </motion.div>
    </motion.section>
  );
}

export default AppBanner;
