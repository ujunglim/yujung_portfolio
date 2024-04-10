import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMoon, FiSun, FiX, FiMenu } from "react-icons/fi";
// import useThemeSwitcher from "../../hooks/useThemeSwitcher";

function AppHeader() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [currTheme, setCurrTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(currTheme);
    if (currTheme === "light") root.classList.add("dark");
    if (currTheme === "dark") root.classList.add("light");
  }, [currTheme]);

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  function moveTo(
    type: "projects" | "work" | "aboutMe",
    isSmall: boolean = false
  ) {
    const headerH = isSmall ? 242 : 112;
    if (!document) return;
    const targetElement: HTMLElement | null = document.getElementById(type);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - headerH,
        behavior: "smooth",
      });
    }
  }

  return (
    <motion.nav
      id="nav"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="z-10 fixed w-[100%] flex justify-center bg-white dark:bg-primary-dark transition duration-300"
    >
      {/* 헤더 */}
      <div className="max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6 w-[100%]">
        <div className="flex justify-between items-center px-4 sm:px-0">
          {/* 로고 */}
          <Link href={"/"} className="flex items-center">
            <img src="/logo.png" alt="logo" className="mr-3" />
            <div className="dark:text-ternary-light text-2xl font-bold text-ternary-dark">
              YuJung
            </div>
          </Link>
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
          className={`${
            showMenu
              ? "block m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none"
              : "hidden"
          }
          `}
        >
          <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-white  sm:mx-4 mb-2 sm:py-2">
            <button onClick={() => moveTo("projects", true)}>Projects</button>
          </div>
          <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-white  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
            <button onClick={() => moveTo("work", true)}>Work</button>
          </div>
          <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-white  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
            <button onClick={() => moveTo("aboutMe", true)}>About Me</button>
          </div>
        </div>

        {/* 큰 화면에서 메뉴 */}
        <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
          <div
            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-white  sm:mx-4 mb-2 sm:py-2"
            aria-label="Projects"
          >
            <button onClick={() => moveTo("projects")}>Project</button>
          </div>
          <div
            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-white  sm:mx-4 mb-2 sm:py-2"
            aria-label="Work"
          >
            <button onClick={() => moveTo("work")}>Work</button>
          </div>

          <div
            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-white  sm:mx-4 mb-2 sm:py-2"
            aria-label="About Me"
          >
            <button onClick={() => moveTo("aboutMe")}>About Me</button>
          </div>
        </div>

        {/* 헤더 우측 theme switcher*/}
        {isClient && (
          <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
            <div
              onClick={() => {
                if (currTheme === "light") {
                  setCurrTheme("dark");
                } else {
                  setCurrTheme("light");
                }
              }}
              aria-label="Theme Switcher"
              className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
            >
              {currTheme === "dark" ? (
                <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
              ) : (
                <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
              )}
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
}

export default AppHeader;
