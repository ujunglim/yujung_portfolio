import React, { FC } from "react";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { IoKey } from "react-icons/io5";

interface Props {
  github?: string;
  website?: string;
  login?: string[];
  youtube?: string;
}

const LinkGroup: FC<Props> = ({ github, website, login, youtube }) => {
  const openPage = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex items-center">
      {github && (
        <button
          onClick={() => openPage(github)}
          className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition duration-200 text-2xl"
        >
          <FaGithub />
        </button>
      )}
      {website && (
        <button
          onClick={() => openPage(website)}
          className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition duration-200 mx-3 text-2xl"
        >
          <IoIosLink />
        </button>
      )}
      {login && (
        <div className="text-gray-300 flex items-center">
          <IoKey style={{ marginRight: "10px" }} />
          {`아이디: ${login[0]} 비번: ${login[1]}`}
        </div>
      )}
      {youtube && (
        <button
          onClick={() => openPage(youtube)}
          className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition duration-200 text-2xl"
        >
          <FaYoutube />
        </button>
      )}
    </div>
  );
};

export default LinkGroup;
