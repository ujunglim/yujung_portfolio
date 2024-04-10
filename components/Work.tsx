import CategoryTitle from "./CategoryTitle";
import FengKong from "./FengKong";
import ShaoXing from "./ShaoXing";

function Work() {
  return (
    <section
      id="work"
      className="flex flex-col items-center py-5 sm:py-10 mt-5 sm:mt-10"
    >
      <CategoryTitle text="WORK" />
      <FengKong />
      <ShaoXing />
    </section>
  );
}

export default Work;
