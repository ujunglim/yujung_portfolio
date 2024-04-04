import Image from "next/image";
import { FiClock, FiTag } from "react-icons/fi";
import { projectsData } from "../../data/projectsData";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export async function getServerSideProps({ query }: any) {
  const { id } = query;
  return {
    props: {
      project: projectsData.filter((project) => project.id === parseInt(id))[0],
    },
  };
}

function ProjectSingle(props: any) {
  const [currI, setCurrI] = useState<number>(0);
  const imgArr = props.project.ProjectImages;

  const handleMove = (type: "left" | "right") => {
    if (type === "left") setCurrI((prev) => prev - 1);
    else if (type === "right") setCurrI((prev) => prev + 1);
  };
  console.log(currI, "++");

  return (
    <div className="container mx-auto">
      {/* Header */}
      <div>
        <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
          {props.project.ProjectHeader.title}
        </p>
        <div className="flex">
          <div className="flex items-center mr-10">
            <FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {props.project.ProjectHeader.publishDate}
            </span>
          </div>
          <div className="flex items-center">
            <FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {props.project.ProjectHeader.tags}
            </span>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="flex flex-col mt-12 p-10 items-center">
        <div className="flex mb-10 flex-col items-center">
          <div className="flex items-center mb-10 sm:mb-0">
            <button disabled={currI === 0} onClick={() => handleMove("left")}>
              <FaChevronLeft
                color={`${currI === 0 ? "lightgray" : "#6366F1"}`}
                size={40}
              />
            </button>
            <div className=" md:w-[700px] md:h-[500px]  relative overflow-hidden sm:w-[400px] sm:h-[300px] mx-10">
              <Image
                src={imgArr[currI].img}
                className="rounded-xl cursor-pointer shadow-lg sm:px-5 min-w-60 min-h-50"
                alt={imgArr[currI].title}
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
            <button
              disabled={currI === imgArr.length - 1}
              onClick={() => handleMove("right")}
            >
              <FaChevronRight
                color={`${currI === imgArr.length - 1 ? "lightgray" : "black"}`}
                size={40}
              />
            </button>
          </div>
        </div>

        {/* cascadar 버튼 */}
        <div className="flex mb-10">
          {imgArr.map((ele, i) => (
            <div
              key={i}
              style={{ background: `${i === currI ? "black" : "pink"}` }}
              className="w-2 h-2 rounded-full mx-2 cursor-pointer"
              onClick={() => setCurrI(i)}
            ></div>
          ))}
        </div>
        {imgArr[currI].subtitle.map((e: string, i: number) => (
          <p key={i}>{e}</p>
        ))}
      </div>

      {/* Info */}
      <div className="block sm:flex gap-0 sm:gap-10 mt-14">
        <div className="w-full sm:w-1/3 text-left">
          {/* Tech*/}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {props.project.ProjectInfo.Technologies[0].title}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {props.project.ProjectInfo.Technologies[0].techs.join(", ")}
            </p>
          </div>

          {/* Introduce */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
              {props.project.ProjectInfo.ClientHeading}
            </p>
            <ul className="leading-loose">
              {props.project.ProjectInfo.Introduce.map((info) => {
                return (
                  <li
                    className="font-general-regular text-ternary-dark dark:text-ternary-light"
                    key={info.id}
                  >
                    <span>{info.title}: </span>
                    <a
                      href="#"
                      className={
                        info.title === "Website" || info.title === "Phone"
                          ? "hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
                          : ""
                      }
                      aria-label="Project Website and Phone"
                    >
                      {info.details}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Single project social sharing */}
          <div>
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {props.project.ProjectInfo.SocialSharingHeading}
            </p>
          </div>
        </div>

        {/*  Single project right section details */}
        <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          {props.project.ProjectInfo.ProjectDetails.map((details) => {
            return (
              <>
                <p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
                  {details.title}
                </p>

                <p
                  key={details.id}
                  className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
                >
                  {details.details.join(" ")}
                </p>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectSingle;
