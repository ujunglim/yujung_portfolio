import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Gallery = ({ imgs }: any) => {
  const [currI, setCurrI] = useState<number>(0);

  const handleMove = (type: "left" | "right") => {
    if (type === "left") setCurrI((prev) => prev - 1);
    else if (type === "right") setCurrI((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col mt-6 px-10 items-center">
      <div className="flex mb-10 flex-col items-center">
        <div className="flex items-center mb-10 sm:mb-0">
          <button disabled={currI === 0} onClick={() => handleMove("left")}>
            <FaChevronLeft
              color={`${currI === 0 ? "#e5e5e5" : "#52A5FF"}`}
              size={40}
            />
          </button>
          <div className="flex items-center md:w-[700px] md:h-[500px] overflow-hidden sm:w-[400px] sm:h-[300px] mx-10">
            <Image
              src={imgs[currI]?.src}
              className="rounded-xl cursor-pointer shadow-lg sm:px-5 min-w-60 min-h-50"
              alt={`img${currI}`}
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          <button
            disabled={currI === imgs.length - 1}
            onClick={() => handleMove("right")}
          >
            <FaChevronRight
              color={`${currI === imgs.length - 1 ? "#e5e5e5" : "#52A5FF"}`}
              size={40}
            />
          </button>
        </div>
        <span className="mt-5">{imgs[currI]?.caption}</span>
      </div>

      {/* cascadar 버튼 */}
      <div className="flex mb-10">
        {imgs.map((_: any, i: number) => (
          <div
            key={i}
            style={{ background: `${i === currI ? "#52A5FF" : "#e5e5e5"}` }}
            className="w-3 h-3 rounded-full mx-1 cursor-pointer"
            onClick={() => setCurrI(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
