import FengKong from "./FengKong";
import ShaoXing from "./ShaoXing";

function Work() {
  return (
    <section className="flex flex-col items-center py-5 sm:py-10 mt-5 sm:mt-10">
      <p className="font-general-medium text-2xl sm:text-4xl text-ternary-dark dark:text-ternary-light mb-4 ">
        Work
      </p>
      <FengKong />
      <ShaoXing />
    </section>
  );
}

export default Work;
