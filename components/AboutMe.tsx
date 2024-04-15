import { motion } from "framer-motion";
import React from "react";
import CategoryTitle from "./CategoryTitle";

const AboutMe = () => {
  return (
    <motion.section
      id="aboutMe"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="w-[100%] flex flex-col items-center py-5 sm:py-10 mt-15 sm:mt-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/aboutme.jpg')",
        backgroundRepeat: "no-repeat",
      }}
    >
      <CategoryTitle text="ABOUT ME" isWhite />
      <div className="w-[60%] container mx-auto font-general-medium text-left text-primary-dark mt-14 sm:mt-20 mb-7 bg-white bg-opacity-80 rounded-lg p-7">
        <p>
          나, 그리고 우리가 겪고 있는 불편함을 해결하여 좀 더 편리한 세상을
          만들기 위해 개발자가 되었습니다. 사람들에게 진정한 가치와 감동을
          제공하는, 사용자가 만족하는 제품을 만들어 나가고 싶습니다.
        </p>
        <br />
        <p>
          중국 상하이에서 졸업 후 게임 개발자로 일을 시작할 때 Frontend 라는
          말이 제게는 생소하게 느껴졌습니다. 하지만 회사의 홈페이지를 만들면서
          머릿속에서 상상하는 것을 화면에 마음껏 보여주는 것에 매료됐습니다.
          무엇보다도{" "}
          <b>누구나 쉽게 접근할 수 있고 사용자와 인터렉티브한 다채로운 화면</b>
          을 만들 수 있다는 것이 저에게 가장 큰 매력으로 다가왔습니다. 그 후
          저는 독학으로 JS와 HTML, CSS를 배워 토이 프로젝트를 만들며 기초를 쌓고
          React, Redux와 다양한 라이브러리를 익혀 바이두에서 프론트엔드 개발자로
          근무했습니다.
        </p>
        <br />
        <p>
          그 곳에서 Typescript로 실질적 서비스의 기능을 개발하면서 대규모
          프로젝트에서 구조화된 아키텍쳐의 중요성과 코드 리뷰를 통해
          리팩토링하는 법을 익혔습니다. 그 과정에서 <b>일관성 있는 코드</b>{" "}
          작성을 매우 선호하게 되었고, 재사용할 수 있는 코드와{" "}
          <b>확장성있는 컴포넌트</b>를 개발하여 동료들과 공유하는 것을 즐기게
          됐습니다. 특히 제가 개발한 입력과 표 출력 기능을 가진 커스터마이징
          가능한 Input group + table 컴포넌트가 도메인에서 자주 사용되어 사내
          라이브러리에 추가 될 때 큰 뿌듯함을 느꼈습니다.
        </p>
        <br />

        <p>
          저는 이렇듯 작고 사소하더라도 개선할 수 있는 부분을 주도적으로 찾아서
          해결합니다. <b>사용자 경험</b>을 개선하기 위해 이미 개발한 서비스를
          갈아엎어야 하는 과정을 개의치 않고 다시 돌아가 문제를 해결하고, 결국
          큰 성취감과 만족감을 얻습니다. 이를 통해 개발하는 데 그치지 않고&nbsp;
          <b>
            스스로 문제를 정의하고 해결하는 과정에서 성장하고 있으며, 이 과정이
            반복되면 결국 좋은 서비스 품질로 이어진다고 믿습니다.
          </b>
        </p>
        <br />

        <p>
          저에게 가장 큰 동기부여는 <b>열정적인 팀워크와 소속감</b>입니다.
          지금까지 매 성장 순간마다 저는 스터디, 친구들과 함께했기 때문입니다.
          그래서 저는 함께 일하는 동료와의 관계를 중요하게 생각하고, 협력적인
          커뮤니케이션에 가치를 두는 팀에서 함께 성장하고 싶습니다. 프로젝트에
          참여하는 모든 팀원들과 적극적으로 소통해 혼자가 아닌{" "}
          <b>같이 성장 하는</b> 개발자, 또한 클라이언트와 사용자가 120% 만족할
          결과물을 제작하며 회사에 <b>신뢰 있는</b> 개발자가 되겠습니다.
        </p>
        <br />
        <p>
          색다른 저의 배경과 경험을 바탕으로 저는 앞으로 다양한 시각과 문화를
          녹여내 창의적인 서비스를 만들어 나가고 싶습니다. 불편함을 해결할 뿐만
          아니라 세상에게 가치와 기쁨을 전달하기 위해 뜨겁게 성장하겠습니다.
          저의 자기소개를 읽어주셔서 감사합니다.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutMe;
