import Image from "next/image";
import { FiClock, FiTag } from "react-icons/fi";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import LinkGroup from "./LinkGroup";
import Gallery from "./Gallery";

const data = {
  header: {
    title: "Yuwitter",
    publishDate: "2021/01 - 2021/03",
    tags: "Design / Frontend / BAAS",
  },
  imgs: [
    { src: "/images/Yuwitter/0.png", caption: "메인 페이지" },
    { src: "/images/Yuwitter/1.gif", caption: "게시글 작성" },
    { src: "/images/Yuwitter/2.gif", caption: "게시글 수정" },
    { src: "/images/Yuwitter/3.gif", caption: "댓글 / 좋아요" },
    {
      src: "/images/Yuwitter/4.gif",
      caption: "이메일로 회원 검색 후 친구요청 ",
    },
    { src: "/images/Yuwitter/5.gif", caption: "친구요청 수락 / 채팅" },
    { src: "/images/Yuwitter/6.gif", caption: "실시간 채팅" },
    { src: "/images/Yuwitter/7.gif", caption: "프로필 수정" },
  ],
  info: {
    link: "https://ujunglim.github.io/yuwitter/",
    github: "https://github.com/ujunglim/Yuwitter",
    intro: ["독학한 React를 익히기 위해 만든 트위터 클론 프로젝트입니다."],
    techs: [
      "React",
      "Javascript",
      "Firebase",
      "styled-components",
      "react-spring",
      "context API",
      "MUI",
    ],
    works: [
      "회원가입, 이메일/구글/깃헙 로그인 및 로그아웃",
      "이메일로 회원 검색, 친구 추가 요청 및 수락",
      "게시글 CRUD, 이미지 첨부",
      "댓글 CRUD, 좋아요",
      "사용자의 프로필 사진, 정보 수정",
      "친구와 채팅",
    ],
  },
};

function Yuwitter() {
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
        <LinkGroup
          github={data.info.github}
          website={data.info.link}
          login={["test@naver.com", "test@naver.com"]}
        />

        <div className="dark:text-ternary-light text-md text-gray-600">
          <div className="mb-5"></div>
          {/* 간단 소개 */}
          <div className="mb-5 flex">
            <div className="whitespace-nowrap font-general-regular font-semibold text-gray-400 dark:text-ternary-light mr-4">
              간단 소개
            </div>
            <div>{data.info.intro}</div>
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
        </div>
      </div>
    </div>
  );
}

export default Yuwitter;
