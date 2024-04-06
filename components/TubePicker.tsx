import Image from "next/image";
import { FiClock, FiTag } from "react-icons/fi";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { projectsData } from "../data/projectsData";
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export async function getServerSideProps({ query }: any) {
  const { id } = query;
  return {
    data: {
      project: projectsData.filter((project) => project.id === parseInt(id))[0],
    },
  };
}

const data = {
  img: "/images/project1/0.png",
  header: {
    title: "TubePicker",
    publishDate: "2023/12/24 ~ 2024/02/13",
    tags: "Design / Frontend / Backend",
  },
  imgs: [
    "/images/project1/0.png",
    "/images/project1/1.gif",
    "/images/project1/2.gif",
    "/images/project1/3.gif",
  ],
  info: {
    link: "https://ujung.link",
    github: "https://github.com/ujunglim/TubePicker",
    intro: [
      "사용자가 원하는 유튜브 채널을 그룹핑하여 볼 수 있는 서비스입니다.",
      "유튜브의 추천영상기능 때문에 발생하는 시간낭비를 줄이고, 제가 관심있는 채널만 모아 보고 싶어 만들게 됐습니다.",
    ],
    techs: [
      "React",
      "Typescript",
      "Express",
      "AWS EC2",
      "Google OAuth2.0",
      "mySQL",
      "Youtube API",
      "JWT",
      "node.js",
      "SCSS",
      "axios",
    ],
    works: [
      "✔️  Google OAuth2.0 로그인 및 Route53 도메인 AWS EC2에 배포",
      "✔️  Axios의 interceptor를 이용해 모든 API 요청에 앞서 JWT Access Token과 Refresh Token의 유효성을 확인하고 서버 응답 값에 따라 분기 처리하도록 구현하여 코드 중복 제거",
      "✔️  사용자와 폴더 데이터를 MySQL에 저장 및 dBeaver로 관리",
      "✔️  YouTube API를 이용해 사용자의 구독채널, 좋아한 영상 리스트 등 출력",
      "✔️  채널제목 선택/검색하여 만든 폴더의 CRUD 구현",
      "✔️  반복적인 빌드/배포 작업을 자동화하기 위해 Batch, shell 스크립트 작성",
      "✔️  사용자 경험 향상을 위해 Redux-persist를 사용해 이전 상태를 local storage에 저장",
    ],
    blog: [
      {
        text: "React, Express로 만든 프로젝트를 AWS EC2로 배포하는 과정에서 겪은 문제, 해결",
        url: "https://ujunglim.tistory.com/entry/AWS-EC2-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0-with-React-Express",
      },
      {
        text: "Route53, Let's Encrypt를 통해 EC2 인스턴스에 https 지원하기",
        url: "https://ujunglim.tistory.com/entry/dbeaver%EC%97%90%EC%84%9C-%EC%9B%90%EA%B2%A9mysql%EC%97%90-%EC%A0%91%EA%B7%BC%ED%95%98%EA%B8%B0",
      },
      {
        text: "Dbeaver와  EC2인스턴스 연결하기",
        url: "https://ujunglim.tistory.com/entry/dbeaver%EC%97%90%EC%84%9C-%EC%9B%90%EA%B2%A9mysql%EC%97%90-%EC%A0%91%EA%B7%BC%ED%95%98%EA%B8%B0",
      },
    ],
  },
};

function TubePicker() {
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
      <div className="flex flex-col mt-12 p-10 items-center">
        <div className="flex mb-10 flex-col items-center">
          <div className="flex items-center mb-10 sm:mb-0">
            <button disabled={currI === 0} onClick={() => handleMove("left")}>
              <FaChevronLeft
                color={`${currI === 0 ? "#e5e5e5" : "#7CB0E8"}`}
                size={40}
              />
            </button>
            <div className=" md:w-[700px] md:h-[500px]  relative overflow-hidden sm:w-[400px] sm:h-[300px] mx-10">
              <Image
                src={imgArr[currI]}
                className="rounded-xl cursor-pointer shadow-lg sm:px-5 min-w-60 min-h-50"
                alt={`img${currI}`}
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
                color={`${currI === imgArr.length - 1 ? "#e5e5e5" : "#7CB0E8"}`}
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
              style={{ background: `${i === currI ? "#7CB0E8" : "#e5e5e5"}` }}
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
          onClick={() => openPage("https://ujung.link")}
          className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition duration-200 mr-3 text-2xl"
        >
          <IoIosLink />
        </button>
        <button
          onClick={() => openPage("https://github.com/ujunglim/TubePicker")}
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
              &quot;원하는 채널만 골라보자!&quot;
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
                <p key={i}>{e}</p>
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
                    <a
                      href={e.url}
                      target="_blank"
                      className="text-blue-400 hover:underline transition duration-200"
                    >
                      {e.text}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <br />

          <h1 className="text-lg font-bold">
            [토큰 유효성 검사를 위한 Interceptor 기능을 활용해 코드 중복 제거]
          </h1>
          <br />
          <p>
            안전한 정보전송을 위해 정보를 찾다가 JWT의 Access 토큰과 Refresh
            토큰을 알게 되었습니다. 모든 API요청에 앞서 인증 토큰과 리프레시
            토큰의 유효성 인증이 통과해야만 사용할 수 있고, 안 되면 다시 로그인
            페이지로 돌아가는 기능을 구현하고 싶었습니다.
          </p>
          <br />
          <p>
            만약 기존 모든 API에 유효성을 검증하는 API를 호출하는 코드를 추가할
            경우, 코드의 중복성이 크게 증가하며, 확장성에도 문제가 생길 것으로
            판단되었습니다. 이 문제를 해결하기 위해 사용하고 있던 HTTP
            라이브러리인 Axios의 문서를 조사했고, Axios의 Interceptor라는 기능을
            발견할 수 있었습니다
          </p>
          <br />

          <p>
            API 요청 전후로 특정 로직을 삽입할 수 있는 Interceptor에는 두 가지
            적용 방식이 있었습니다. 첫 번째 방식은 특정 Axios 인스턴스에만
            적용되는 방식으로, 유연성을 제공하며 다른 인스턴스에는 영향을 미치지
            않았습니다. 반면, 두 번째 방식인 axios config에 interceptor를
            추가하는 방식은 모든 API 호출에 동일한 로직을 적용할 수 있지만, 특정
            요청에 대한 로직을 변경하려면 매번 추가적인 코드 수정이
            필요했습니다.
          </p>
          <br />

          <p>
            프로젝트의 확장성과 유연성을 고려하여, 최종적으로 특정 Axios
            인스턴스에만 Interceptor를 적용하는 방식을 선택해서 구현했습니다
          </p>
          <p>
            결과적으로, Axios의 Interceptor를 통해 인증 토큰과 리프레시 토큰의
            유효성을 체크하는 로직을 구현하면서, 코드의 중복을 크게 줄일 수
            있었습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TubePicker;