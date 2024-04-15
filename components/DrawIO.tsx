import Image from "next/image";
import { FiClock, FiTag } from "react-icons/fi";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import LinkGroup from "./LinkGroup";
import Gallery from "./Gallery";
import CustomAccordion from "./CustomAccordion";

const data = {
  header: {
    title: "DrawIO",
    publishDate: "2023/02 ~ 2023/03",
    tags: "Design / Frontend",
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
    works: [
      "Canvas, 바닐라JS 를 사용해 그래프 생성, 삭제, 라인 연결과 같은 기본 기능을 구현",
      "점, 선, 면, 직사각형 등 많아지는 객체들의 복잡한 로직을 체계적으로 관리하기 위해 클래스로 관련 데이터와 메소드를 OOP화",
      "OOP + React 구현 (Model과 Controller는 OOP / View는 React)",
      "Draw Controller로 View / Manager / Model을 컨트롤",
      "객체 지향적인 성향에 맞춰 MobX로 상태관리",
    ],
    blog: [
      {
        text: "개발기록",
        url: "https://www.notion.so/limew/Draw-IO-1039c15e08794d5e8205cd36a52e2a22",
      },
    ],
  },
};

function DrawIO() {
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
      <Gallery imgs={data.imgs} />

      {/* Info */}
      <div>
        {/* 링크, 깃헙 */}
        <LinkGroup github={data.info.github} website={data.info.link} />

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
        </div>
      </div>
    </div>
  );
}

export default DrawIO;
