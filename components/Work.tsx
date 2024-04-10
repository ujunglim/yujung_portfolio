import { AccordionDetails, AccordionSummary } from "@mui/material";
import CategoryTitle from "./CategoryTitle";
import FengKong from "./FengKong";
import ShaoXing from "./ShaoXing";
import WorkDetail from "./WorkDetail";
import Accordion from "@mui/material/Accordion";
import { MdOutlineExpandMore } from "react-icons/md";

function Work() {
  return (
    <section
      id="work"
      className="flex flex-col items-center py-5 sm:py-10 mt-5 sm:mt-10 sm:mb-10 mb-5"
    >
      <CategoryTitle text="WORK" />
      <WorkDetail
        data={{
          companyName: "Baidu 바이두",
          companyUrl: "https://cloud.baidu.com/",
          date: "2021.09 - 2023.06",
          position: "프론트엔드 개발자 (금융 클라우드 R&D 팀)",
        }}
      />
      <div className="w-[85%]">
        <Accordion>
          <AccordionSummary expandIcon={<MdOutlineExpandMore size={30} />}>
            고객신용 분석 관리 서비스
          </AccordionSummary>
          <AccordionDetails>
            <FengKong />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<MdOutlineExpandMore size={30} />}>
            산업체인 분석 서비스
          </AccordionSummary>
          <AccordionDetails>
            <ShaoXing />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<MdOutlineExpandMore size={30} />}>
            사내 UI 보일러 템플릿 개발
          </AccordionSummary>
          <AccordionDetails>
            <p>
              ● FengKong과 Admin 백오피스 개발 생산성을 위해 자주 사용되는
              UI컴포넌트들을 Storybook을 사용하여 사내 UI보일러 템플릿 개발,
              유지보수했습니다.
            </p>
            <p>
              ● Button, Modal, Card, 스크롤 가능한 Popover, Ellipsis(줄임말)
              Popover, 커스텀 Date Range Picker
            </p>
            <p>
              ● 입력과 표 출력 기능을 가진 커스터마이징 가능한 Input group +
              table 컴포넌트
            </p>
          </AccordionDetails>
        </Accordion>
      </div>

      <WorkDetail
        data={{
          companyName: "Banana Interactive",
          date: "2019.08 - 2021.07",
          position: "게임 개발자 (H5 Game Development)",
          work: [
            "스타트업에서 모바일, 웹에서 플레이 가능한 9개의 페이스북 H5 웹 게임을 개발했습니다.",
            "태국, 동남아 6.1K 유저를 보유한 3D 농구 게임 개발",
          ],
        }}
      />
    </section>
  );
}

export default Work;
