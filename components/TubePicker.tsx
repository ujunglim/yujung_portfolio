import Image from "next/image";
import { FiClock, FiTag } from "react-icons/fi";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import LinkGroup from "./LinkGroup";
import Gallery from "./Gallery";
import CustomAccordion from "./CustomAccordion";

const data = {
  header: {
    title: "TubePicker",
    publishDate: "2023/12/24 ~ 2024/02/13",
    tags: "Design / Frontend / Backend",
  },
  imgs: [
    { src: "/images/TubePicker/0.gif", caption: "로그인 / 메인페이지" },
    {
      src: "/images/TubePicker/1.gif",
      caption: "영상 보기 / 리스트 무한 스크롤",
    },
    { src: "/images/TubePicker/2.gif", caption: "폴더 생성" },
    { src: "/images/TubePicker/3.gif", caption: "폴더 수정" },
  ],
  info: {
    link: "https://ujung.link",
    github: "https://github.com/ujunglim/TubePicker",
    youtube: "https://www.youtube.com/watch?v=yKzTSRPNPns&t=10s",
    intro: [
      "사용자가 원하는 유튜브 채널을 그룹핑하여 볼 수 있는 서비스입니다.",
      "유튜브의 추천영상기능 때문에 발생하는 시간낭비를 줄이고, 제가 관심있는 채널만 모아 보고 싶어 만들게 됐습니다.",
    ],
    techs: [
      "React",
      "Typescript",
      "RTK",
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
      "React, Redux, Typescript, Axios, SCSS로 클라이언트를 제작",
      "사용자 경험을 향상시키기 위해 페이지를 다시 로드할 때 Redux-persist를 사용해 이전 상태를 local storage에 저장",
      "Axios의 interceptor를 이용해 모든 API 요청에 앞서 JWT Access Token과 Refresh Token의 유효성을 확인하고 서버 응답 값에 따라 분기 처리하도록 구현하여 코드 중복 제거",
      "사용자와 폴더 데이터를 MySQL에 저장 및 dBeaver로 관리",
      "YouTube API를 이용해 사용자의 구독채널, 좋아한 영상 리스트 등 출력",
      "채널제목 선택/검색하여 만든 폴더의 CRUD 구현",
      "반복적인 CI/CD 작업을 자동화하기 위해 Batch, shell 스크립트 작성",
      "사용자 경험 향상을 위해 Redux-persist를 사용해 이전 상태를 local storage에 저장",
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
        text: "Dbeaver와 EC2인스턴스 연결하기",
        url: "https://ujunglim.tistory.com/entry/dbeaver%EC%97%90%EC%84%9C-%EC%9B%90%EA%B2%A9mysql%EC%97%90-%EC%A0%91%EA%B7%BC%ED%95%98%EA%B8%B0",
      },
    ],
  },
};

function TubePicker() {
  return (
    <div className="container mx-auto">
      {/* Header */}
      <div>
        <p className="font-general-medium text-left text-2xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-10 sm:mt-20 mb-7">
          {data.header.title}
        </p>
        <div className="flex sm:flex-row flex-col">
          <div className="flex items-center sm:mr-10 mr-3">
            <FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {data.header.publishDate}
            </span>
          </div>
          <div className="flex items-center mt-3 sm:mt-0">
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
          youtube={data.info.youtube}
        />

        <div className="dark:text-ternary-light text-md text-gray-600">
          <div className="mb-5"></div>
          {/* 간단 소개 */}
          <div className="mb-5 flex flex-col sm:flex-row">
            <div className="whitespace-nowrap font-general-regular font-semibold text-gray-400 dark:text-ternary-light mr-4">
              간단 소개
            </div>
            <div>
              &quot;원하는 채널만 골라보자!&quot;
              <div> {data.info.intro.join(" ")}</div>
            </div>
          </div>
          {/* 사용 기술 */}
          <div className="mb-5 flex flex-col sm:flex-row">
            <div className="whitespace-nowrap font-general-regular font-semibold text-gray-400 dark:text-ternary-light mr-4">
              사용 기술
            </div>
            <div>{data.info.techs.join(", ")}</div>
          </div>
          {/* 주요 작업 */}
          <div className="mb-5 flex flex-col sm:flex-row">
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
          <div className="mb-5 flex flex-col sm:flex-row">
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

          <CustomAccordion
            title="토큰 유효성 검사를 위한 Interceptor 기능을 활용해 코드 중복 제거"
            content={
              <>
                <p>
                  안전한 정보전송을 위해 정보를 찾다가 JWT의 Access 토큰과
                  Refresh 토큰을 알게 되었습니다. 모든 API요청에 앞서 인증
                  토큰과 리프레시 토큰의 유효성 인증이 통과해야만 사용할 수
                  있고, 안 되면 다시 로그인 페이지로 돌아가는 기능을 구현하고
                  싶었습니다.
                </p>
                <br />
                <p>
                  만약 기존 모든 API에 유효성을 검증하는 API를 호출하는 코드를
                  추가할 경우, 코드의 중복성이 크게 증가하며, 확장성에도 문제가
                  생길 것으로 판단되었습니다. 이 문제를 해결하기 위해 사용하고
                  있던 HTTP 라이브러리인 Axios의 문서를 조사했고, Axios의
                  Interceptor라는 기능을 발견할 수 있었습니다
                </p>
                <br />
                <p>
                  API 요청 전후로 특정 로직을 삽입할 수 있는 Interceptor에는 두
                  가지 적용 방식이 있었습니다. 첫 번째 방식은 특정 Axios
                  인스턴스에만 적용되는 방식으로, 유연성을 제공하며 다른
                  인스턴스에는 영향을 미치지 않았습니다. 반면, 두 번째 방식인
                  axios config에 interceptor를 추가하는 방식은 모든 API 호출에
                  동일한 로직을 적용할 수 있지만, 특정 요청에 대한 로직을
                  변경하려면 매번 추가적인 코드 수정이 필요했습니다.
                </p>
                <br />
                <p>
                  프로젝트의 확장성과 유연성을 고려하여, 최종적으로 특정 Axios
                  인스턴스에만 Interceptor를 적용하는 방식을 선택해서
                  구현했습니다. 결과적으로, Axios의 Interceptor를 통해 인증
                  토큰과 리프레시 토큰의 유효성을 체크하는 로직을 구현하면서,
                  코드의 중복을 크게 줄일 수 있었습니다.
                </p>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default TubePicker;
