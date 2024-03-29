import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMoon, FiSun, FiX, FiMenu } from "react-icons/fi";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

function AppHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTheme, setTheme] = useThemeSwitcher();

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto"
    >
      {/* 헤더 */}
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
        <div className="flex justify-between items-center px-4 sm:px-0">
          {/* 로고 */}
          <div className="dark:text-ternary-light">
            <Link href="/">YuJung</Link>
          </div>

          {/* 작은 화면의 햄버거메뉴 */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none"
              aria-label="메뉴"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
              >
                {showMenu ? (
                  <FiX className="text-3xl" />
                ) : (
                  <FiMenu className="text-3xl" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* 작은 화면의 메뉴 */}
        <div
          className={
            showMenu
              ? "block m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none"
              : "hidden"
          }
        >
          <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2">
            <Link href="/projects" aria-label="Projects">
              Projects
            </Link>
          </div>
          <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
            <Link href="/about" aria-label="About Me">
              About Me
            </Link>
          </div>
          <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
            <Link href="/study" aria-label="Study">
              Study
            </Link>
          </div>
        </div>

        {/* 큰 화면에서 메뉴 */}
        <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
          <div
            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            aria-label="Projects"
          >
            <Link href="/projects">Projects</Link>
          </div>
          <div
            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            aria-label="About Me"
          >
            <Link href="/about">About Me</Link>
          </div>

          <div
            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            aria-label="Study"
          >
            <Link href="/study">Study</Link>
          </div>
        </div>

        {/* 헤더 우측 theme switcher*/}
        <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
          <div
            onClick={() => setTheme(activeTheme)}
            aria-label="Theme Switcher"
            className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
          >
            {activeTheme === "dark" ? (
              <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
            ) : (
              <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default AppHeader;
