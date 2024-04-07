import Image from "next/image";
import { FiClock, FiTag } from "react-icons/fi";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const data = {
  header: {
    title: "DrawIO",
    publishDate: "2023/02 ~ 2023/03",
    tags: "Design / Frontend ",
  },
  imgs: [
    {
      src: "/images/DrawIO/0.gif",
      caption: "다이어그램 선택 / 이동 / 겹침처리 / Port에서 라인 연결",
    },
    {
      src: "/images/DrawIO/1.gif",
      caption: "다이어그램 생성 / 색 변경 / 삭제",
    },
    {
      src: "/images/DrawIO/2.gif",
      caption: "더블 클릭시 다이어그램 내 텍스트 수정",
    },
    {
      src: "/images/DrawIO/3.gif",
      caption: "캔버스 영역 drag시 범위 안의 모든 다이어그램 선택",
    },
  ],
  info: {
    link: "https://ujunglim.github.io/MyDrawIO_React/",
    github: "https://github.com/ujunglim/MyDrawIO",
    intro: [
      "평소 흥미롭게 본 차트 라이브러리와 같은 이미지를 웹에서 구현하는 방식에 궁금증이 생겨 만들게 된 개인 프로젝트입니다.",
    ],
    techs: [
      "Canvas",
      "OOP",
      "MobX",
      "Javascript",
      "Typescript",
      "React",
      "Antd",
    ],
    works: [],
    blog: [],
  },
};

function DrawIO() {
  const [currI, setCurrI] = useState<number>(0);
  const imgArr = data.imgs;

  const handleMove = (type: "left" | "right") => {
    if (type === "left") setCurrI((prev) => prev - 1);
    else if (type === "right") setCurrI((prev) => prev + 1);
  };

  const openPage = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="container mx-auto">
      {/* Header */}
      <div>
        <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
          {data.header.title}
        </p>
        <div className="flex">
          <div className="flex items-center mr-10">
            <FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {data.header.publishDate}
            </span>
          </div>
          <div className="flex items-center">
            <FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {data.header.tags}
            </span>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="flex flex-col mt-3 px-10 items-center">
        <div className="flex mb-10 flex-col items-center">
          <div className="flex items-center mb-10 sm:mb-0">
            <button disabled={currI === 0} onClick={() => handleMove("left")}>
              <FaChevronLeft
                color={`${currI === 0 ? "#e5e5e5" : "#52A5FF"}`}
                size={40}
              />
            </button>
            <div className="flex flex-col items-center">
              <div className="flex items-center md:w-[700px] md:h-[500px]  relative overflow-hidden sm:w-[400px] sm:h-[300px] mx-10">
                <Image
                  src={imgArr[currI].src}
                  className="rounded-xl cursor-pointer shadow-lg sm:px-5 min-w-60 min-h-50"
                  alt={`img${currI}`}
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </div>
              <span>{imgArr[currI].caption}</span>
            </div>
            <button
              disabled={currI === imgArr.length - 1}
              onClick={() => handleMove("right")}
            >
              <FaChevronRight
                color={`${currI === imgArr.length - 1 ? "#e5e5e5" : "#52A5FF"}`}
                size={40}
              />
            </button>
          </div>
        </div>

        {/* cascadar 버튼 */}
        <div className="flex mb-10">
          {imgArr.map((_, i) => (
            <div
              key={i}
              style={{ background: `${i === currI ? "#52A5FF" : "#e5e5e5"}` }}
              className="w-3 h-3 rounded-full mx-1 cursor-pointer"
              onClick={() => setCurrI(i)}
            ></div>
          ))}
        </div>
      </div>

      {/* Info */}
      <div>
        {/* 링크, 깃헙 */}
        <button
          onClick={() => openPage(data.info.link)}
          className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition duration-200 mr-3 text-2xl"
        >
          <IoIosLink />
        </button>
        <button
          onClick={() => openPage(data.info.github)}
          className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition duration-200 text-2xl"
        >
          <FaGithub />
        </button>
        <div className="dark:text-ternary-light text-md text-gray-600">
          <div className="mb-5"></div>
          {/* 간단 소개 */}
          <div className="mb-5 flex">
            <div className="whitespace-nowrap font-general-regular font-semibold text-gray-400 dark:text-ternary-light mr-4">
              간단 소개
            </div>
            <div>
              로직 다이어그램을 그릴 수 있는 그래프 서비스입니다.
              <div> {data.info.intro.join(" ")}</div>
            </div>
          </div>
          {/* 사용 기술 */}
          <div className="mb-5 flex">
            <div className="whitespace-nowrap font-general-regular font-semibold text-gray-400 dark:text-ternary-light mr-4">
              사용 기술
            </div>
            <div>{data.info.techs.join(", ")}</div>
          </div>
          {/* 주요 작업 */}
          <div className="mb-5 flex">
            <div className="whitespace-nowrap font-general-regular font-semibold text-gray-400 dark:text-ternary-light mr-4">
              주요 작업
            </div>
            <div>
              {data.info.works.map((e, i) => (
                <p key={i}>✔️&nbsp;&nbsp;{e}</p>
              ))}
            </div>
          </div>
          {/* 작성한 글 */}
          <div className="mb-5 flex">
            <div className="whitespace-nowrap font-general-regular font-semibold text-gray-400 dark:text-ternary-light mr-4">
              작성한 글
            </div>
            <div>
              {data.info.blog.map((e) => {
                return (
                  <div key={e.text}>
                    <a href={e.url} target="_blank" className="link">
                      {e.text}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <br />
          <h1 className="text-lg font-bold">[aa]</h1>
          <p>aa</p>
        </div>
      </div>
    </div>
  );
}

export default DrawIO;
