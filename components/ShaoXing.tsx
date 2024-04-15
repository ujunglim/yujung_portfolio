import Image from "next/image";
import { FiClock, FiTag } from "react-icons/fi";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Gallery from "./Gallery";

const data = {
  header: {
    title: "ShaoXing",
    publishDate: "2022/07 ~ 2023/09 ",
    tags: "Frontend",
  },
  imgs: [
    { src: "/images/ShaoXing/0.png", caption: "메인 페이지" },
    {
      src: "/images/ShaoXing/1.png",
      caption: "상품별 인기 분석 / 신청 인기율 비교 페이지",
    },
    {
      src: "/images/ShaoXing/2.png",
      caption: "인기금융상품 / 우수기업 산업자본 분석  페이지",
    },
    {
      src: "/images/ShaoXing/3.png",
      caption: "기간별 산업체인 안정성 및 여론 분석 페이지",
    },
    {
      src: "/images/ShaoXing/4.png",
      caption: "지도상 구역별 산업체인 정보 표시 페이지",
    },
  ],
  info: {
    intro: ["중국 항저우시 구역별 산업 체인 분석 서비스입니다."],
    role: "프론트 90% (프론트 2명, 백엔드 3명)",
    techs: [
      "Baidu Map",
      "React",
      "Typescript",
      "RTK",
      "react-router",
      "restful api",
      "ECharts",
    ],
    works: [
      "전체 RESTful API 설계",
      "바이두 지도 API를 사용해 지도상에 구역별 산업의 수요와 위치, 실시간 서비스 상황을 보여주는 모듈을 개발",
      "사용자의 선택에 따라 산업체인의 비율을 계산/비교하는 핵심 기능을 개발",
      "확인 기간 입력 → 총 산업체인 중 비교대상 선택 → 서버로부터 받은 데이터로 계산 → 비교결과를 보여주는 플로우 개발",
      "각 단계별 유효성 검사 및 예외처리",
      "서버에러 담당 hook을 개발하여 서버에러를 핸들링",
      "도메인 별 에러 상태 및 에러 메시지 객체 관리",
    ],
  },
};

function ShaoXing() {
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
        <div className="dark:text-ternary-light text-md text-gray-600">
          <div className="mb-5"></div>
          {/* 간단 소개 */}
          <div className="mb-5 flex">
            <div className="whitespace-nowrap font-general-regular font-semibold text-gray-400 dark:text-ternary-light mr-4">
              간단 소개
            </div>
            <div> {data.info.intro.join(" ")}</div>
          </div>
          {/* 사용 기술 */}
          <div className="mb-5 flex">
            <div className="whitespace-nowrap font-general-regular font-semibold text-gray-400 dark:text-ternary-light mr-4">
              사용 기술
            </div>
            <div>{data.info.techs.join(", ")}</div>
          </div>
          {/* 기여도 */}
          <div className="mb-5 flex">
            <div className="whitespace-nowrap font-general-regular font-semibold text-gray-400 dark:text-ternary-light mr-4">
              기여도&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div>{data.info.role}</div>
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

export default ShaoXing;
