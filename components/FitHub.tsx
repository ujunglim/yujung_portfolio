import Image from "next/image";
import { FiClock, FiTag } from "react-icons/fi";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import LinkGroup from "./LinkGroup";
import Gallery from "./Gallery";

const data = {
  header: {
    title: "FitHub",
    publishDate: "2024/02/27 ~ 현재",
    tags: "Design / Frontend",
  },
  imgs: [{ src: "/images/FitHub/0.png", caption: "메인 페이지" }],
  info: {
    link: "https://fithub-front-z7s1.vercel.app/",
    github: "https://github.com/team-Fithub/fithub-front",
    intro: [
      "헬스 커뮤니티 플랫폼으로, 회원과 트레이너가 정보를 공유하고 소통할 수 있는 공간을 제공합니다.",
      "유튜브의 추천영상기능 때문에 발생하는 시간낭비를 줄이고, 제가 관심있는 채널만 모아 보고 싶어 만들게 됐습니다.",
    ],
    techs: ["React", "Typescript", "RTK", "TailwindCSS", "axios", "Figma"],
    works: [
      "react-daum-postcode, 카카오 지도사용 트레이너 주소 찾기",
      "트레이너 인증하기",
      "트레이너 자격증, 경력 CRUD",
      "트레이닝 예약 취소, 트레이닝 리뷰 조회, 작성, 수정",
      "컴포넌트: 별점 평가, Modal, DropDown",
      "반복적인 빌드/배포 작업을 자동화하기 위해 Batch, shell 스크립트 작성",
      "react hook form을 이용한 트레이닝 생성 폼 개발",
    ],
  },
};

function FitHub() {
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

export default FitHub;
