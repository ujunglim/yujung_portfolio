import { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";

function useScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollToTop);
    return function cleanup() {
      window.removeEventListener("scroll", scrollToTop);
    };
  }, []);

  const scrollToTop = () => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false);
    }
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", scrollToTop);
  }

  return (
    <button className="bg-main rounded-full fixed bottom-7 right-10 transition-all ease-in-out duration-300">
      <FiChevronUp
        className="text-primary-light bg-red-300"
        style={{ display: showScroll ? "flex" : "none" }}
        onClick={backToTop}
        size={50}
      />
    </button>
  );
}

export default useScrollToTop;
