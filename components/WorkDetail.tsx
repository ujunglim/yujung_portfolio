import React, { FC } from "react";

interface Prop {
  companyName: string;
  companyUrl?: string;
  date: string;
  position: string;
  work: string[];
}

const WorkDetail: FC<any> = ({ data }) => {
  return (
    <div className="w-[100%] px-[98px] mt-[80px] dark:text-ternary-light">
      <div className="flex items-end mb-5">
        {data.companyUrl ? (
          <a
            className="text-3xl font-bold mr-3 hover:bg-submain hover:bg-opacity-50"
            href={data?.companyUrl}
            target="_blank"
            style={{ borderBottom: "2px solid" }}
          >
            {data.companyName}
          </a>
        ) : (
          <h1 className="text-3xl font-bold mr-3">{data.companyName}</h1>
        )}
        <span>{data.date}</span>
      </div>
      {/* 직무 */}
      <div className="mb-10 flex">{data.position}</div>

      {data?.work?.map((e, i) => {
        return (
          <p key={i} className="mb-3 ml-5">
            ● {e}
          </p>
        );
      })}
    </div>
  );
};

export default WorkDetail;
