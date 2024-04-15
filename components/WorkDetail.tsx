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
    <div className="w-[100%] sm:px-[98px] px-4 mt-[80px] dark:text-ternary-light">
      <div className="flex sm:items-end mb-5 flex-col sm:flex-row">
        {data.companyUrl ? (
          <a
            className="sm:text-3xl text-2xl font-bold mr-3 hover:bg-submain hover:bg-opacity-50"
            href={data?.companyUrl}
            target="_blank"
            style={{ borderBottom: "2px solid" }}
          >
            {data.companyName}
          </a>
        ) : (
          <h1 className="sm:text-3xl text-2xl font-bold mr-3">
            {data.companyName}
          </h1>
        )}
        <span className="sm:mt-0 mt-2">{data.date}</span>
      </div>
      {/* 직무 */}
      <div className="mb-10 flex">{data.position}</div>

      {data?.work?.map((e: string, i: number) => {
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
