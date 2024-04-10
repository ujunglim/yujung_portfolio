import Image from "next/image";
import { FiClock, FiTag } from "react-icons/fi";
import Gallery from "./Gallery";

const data = {
  header: {
    title: "FengKong",
    publishDate: "2023/02 ~ 2023/05",
    tags: "Frontend",
  },
  imgs: [
    {
      src: "/images/FengKong/0.png",
      caption: "메인 페이지",
    },
    {
      src: "/images/FengKong/1.png",
      caption: "로그인 페이지",
    },
    {
      src: "/images/FengKong/2.png",
      caption: "리스크 경고 리스트 페이지",
    },
    {
      src: "/images/FengKong/3.png",
      caption: "고객 신용 점수 계산",
    },
    {
      src: "/images/FengKong/4.png",
      caption: "점수 분포도 차트",
    },
  ],
  info: {
    role: "프론트 30% (프론트 3명, 백엔드 5명)",
    techs: [
      "React",
      "Typescript",
      "RTK",
      "react-router",
      "ECharts",
      "moment.js",
    ],
    works: [
      "고객의 자본, 대출, 현황 등의 데이터를 분석하고 바이두 자체 클라우드 스토리지, AI분석 시스템과 연동하여 로그인, 고객 신용 평가 보고서, 리스크 경고 등의 12개의 페이지를 개발",
      "리스크 상태 (통지, 경고, 중대) 알림/업데이트 구현",
      "Echarts 기반으로 커스텀한 차트와 표를 만들어 기간별 자본, 대출, 현황 등의 데이터 시각화",
      "고객의 신용을 평가하는 공식의 로직 및 컴포넌트 구현",
      "도메인 별 restful API 설계, 점진적인 리팩토링",
    ],
  },
};

function FengKong() {
  return (
    <div className="container mx-auto">
      {/* Header */}
      <div>
        <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-7 sm:mt-10 mb-7">
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
            <div>
              <a
                href="https://www.spdb.com.cn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="link">Pufa은행(浦发银行)</span>
              </a>
              고객 금융 데이터 분석 서비스입니다.
            </div>
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

export default FengKong;
