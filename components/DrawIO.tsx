import Image from "next/image";
import { FiClock, FiTag } from "react-icons/fi";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import LinkGroup from "./LinkGroup";
import Gallery from "./Gallery";

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
          <br />
          <h1 className="text-lg font-bold">[React 너 이래서 필요하구나]</h1>
          <br />
          <p>
            초기에 바닐라JS로 데모버전을 만드는 과정에서 데이터가 변경될 때마다
            수동적으로 view를 업데이트 해줘야했습니다. 그래서 init,
            updateView함수를 남발하였고, 오류가 생기면 어디에서 생긴건지
            파악하기 힘들었습니다.
          </p>
          <br />
          <p>
            이 과정에서 useEffect, useState를 원리를 파악할 수 있었고, React는
            Data Driven 구조라서 데이터가 바뀌면 자동으로 리렌더링이 되고 상태
            관리 라이브러리를 통해 데이터를 관리하기 매우 편리한 프레임워크라는
            것을 느꼈습니다.
          </p>
          <br />
          <h1 className="text-lg font-bold">[typescript 사용]</h1>
          <br />
          <p>
            객체는 점차 많아지지만 type checking이 되지 않아 사소한 실수와
            런타임 에러가 빈번하게 일어나서 중반에 typescript을 도입했습니다.
          </p>
          <p>
            기존의 Javascript를 Typescript로 변환하는 과정에서 꽤 많은 시간을
            소비했지만 그 후 개발에 안정성이 증가하였고 컴파일링 단계에서 에러를
            1차적으로 걸러주기 때문에 에러를 처리하는 속도가 빨라졌습니다.
          </p>
          <br />
          <h1 className="text-lg font-bold">[Redux대신 Mobx을 사용한 이유]</h1>
          <br />
          <p>객체 지향적 프로젝트라서 MobX가 더욱 자연스럽다고 생각했습니다.</p>
          <p>
            Mobx는 리덕스의 보일러플레이트 필요없이 makeObservable ,
            observable로 클래스의 속성에 대한 직관적인 관찰, 반응이 가능하다는
            점이 Redux보다 객체 지향적입니다.
          </p>
          <p>
            또한 Mobx는 양방향 플로우로 데이터가 변경되면 자동으로 업데이트 되어
            복잡한 다이어그램의 데이터 흐름과 변경을 관리하기 편리하다고
            생각했습니다.
          </p>
          <br />

          <h1 className="text-lg font-bold">[디자인 패턴 이해]</h1>
          <br />
          <p>싱글톤과 전략패턴에 대해 이해할 수 있었습니다.</p>
          <p>
            최상단의 DrawController 클래스를 싱글톤으로 만들어 하위 클래스들을
            컨트롤 했습니다. 전역적으로 싱글톤 인스턴스에 접근가능하여 여러
            부분에서 동일한 인스턴스를 공유하며 데이터를 일관되게 유지 할 수
            있었습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DrawIO;
