import { v4 as uuidv4 } from "uuid";

export const projectsData = [
  {
    id: 1,
    title: "TubePicker",
    url: "https://ujung.link/",
    subtitle: "원하는 채널만 골라보는 서비스",
    img: "/images/project1/0.png",
    ProjectHeader: {
      title: "TubePicker",
      publishDate: "2024.02.13",
      tags: "Design / Frontend / Backend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        subtitle: [
          "사용자가 좋아한 영상들을 최신순으로 보여줍니다.",
          "영상을 클릭하면 모달창에서 영상을 시청 할 수 있습니다.",
        ],
        img: "/images/project1/1.gif",
      },
      {
        id: uuidv4(),
        subtitle: [
          "사용자가 생성한 폴더 리스트, 구독채널 리스트를 데이터베이스에서 읽어옵니다.",
          "원하는 채널을 선택/검색하여 폴더를 생성할 수 있습니다.",
        ],
        img: "/images/project1/2.gif",
      },
      {
        id: uuidv4(),
        subtitle: ["사용자는 폴더를 수정/삭제 할 수 있습니다."],
        img: "/images/project1/3.gif",
      },
    ],
    ProjectInfo: {
      ClientHeading: "Introduce.",
      Introduce: [
        {
          id: uuidv4(),
          title: "기간",
          details: "2023/12/24 ~ 2024/02/13",
        },
        {
          id: uuidv4(),
          title: "기여도",
          details: "100%",
        },
        {
          id: uuidv4(),
          title: "링크",
          details: "https://ujung.link",
        },
      ],
      Technologies: [
        {
          title: "Tech",
          techs: [
            "React",
            "Typescript",
            "Express",
            "AWS EC2",
            "Google OAuth2.0",
            "mySQL",
            "Youtube API",
            "node.js",
          ],
        },
      ],
      ProjectDetails: [
        {
          id: uuidv4(),
          title: "소개",
          details: [
            "사용자가 원하는 유튜브 채널을 그룹핑하여 볼 수 있는 서비스 입니다.",
            "유튜브의 추천영상기능 때문에 발생하는 시간낭비를 줄이고, 제가 관심있는 채널만 모아 보고 싶어 만들게 됐습니다.",
          ],
        },
        {
          id: uuidv4(),
          title: "주요기능",

          details: [
            "✅ 구독하는 채널 리스트에서 관심사별로 채널들을 선택해 폴더를 생성할 수 있습니다.",
            "✅ 생성한 폴더를 클릭하면 선택된 채널의 영상을 최신순으로 볼 수 있습니다.",
            "✅ 폴더의 이름과 선택한 채널을 수정할 수 있습니다.",
            "✅ 폴더를 삭제할 수 있습니다.",
            "✅ 유튜브에서 좋아요한 영상을 볼 수 있습니다.",
            "✅ 구독채널 리스트에서 채널제목을 검색할 수 있습니다.",
          ],
        },
      ],
    },
  },
  {
    id: 1,
    title: "TubePicker",
    url: "https://ujung.link/",
    subtitle: "원하는 채널만 골라보는 서비스",
    img: "/images/project1/0.png",
    ProjectHeader: {
      title: "TubePicker",
      publishDate: "2024.02.13",
      tags: "Design / Frontend / Backend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        subtitle: [
          "사용자가 좋아한 영상들을 최신순으로 보여줍니다.",
          "영상을 클릭하면 모달창에서 영상을 시청 할 수 있습니다.",
        ],
        img: "/images/project1/1.gif",
      },
      {
        id: uuidv4(),
        subtitle: [
          "사용자가 생성한 폴더 리스트, 구독채널 리스트를 데이터베이스에서 읽어옵니다.",
          "원하는 채널을 선택/검색하여 폴더를 생성할 수 있습니다.",
        ],
        img: "/images/project1/2.gif",
      },
      {
        id: uuidv4(),
        subtitle: ["사용자는 폴더를 수정/삭제 할 수 있습니다."],
        img: "/images/project1/3.gif",
      },
    ],
    ProjectInfo: {
      ClientHeading: "Introduce.",
      Introduce: [
        {
          id: uuidv4(),
          title: "기간",
          details: "2023/12/24 ~ 2024/02/13",
        },
        {
          id: uuidv4(),
          title: "기여도",
          details: "100%",
        },
        {
          id: uuidv4(),
          title: "링크",
          details: "https://ujung.link",
        },
      ],
      Technologies: [
        {
          title: "Tech",
          techs: [
            "React",
            "Typescript",
            "Express",
            "AWS EC2",
            "Google OAuth2.0",
            "mySQL",
            "Youtube API",
            "node.js",
          ],
        },
      ],
      ProjectDetails: [
        {
          id: uuidv4(),
          title: "소개",
          details: [
            "사용자가 원하는 유튜브 채널을 그룹핑하여 볼 수 있는 서비스 입니다.",
            "유튜브의 추천영상기능 때문에 발생하는 시간낭비를 줄이고, 제가 관심있는 채널만 모아 보고 싶어 만들게 됐습니다.",
          ],
        },
        {
          id: uuidv4(),
          title: "주요기능",

          details: [
            "✅ 구독하는 채널 리스트에서 관심사별로 채널들을 선택해 폴더를 생성할 수 있습니다.",
            "✅ 생성한 폴더를 클릭하면 선택된 채널의 영상을 최신순으로 볼 수 있습니다.",
            "✅ 폴더의 이름과 선택한 채널을 수정할 수 있습니다.",
            "✅ 폴더를 삭제할 수 있습니다.",
            "✅ 유튜브에서 좋아요한 영상을 볼 수 있습니다.",
            "✅ 구독채널 리스트에서 채널제목을 검색할 수 있습니다.",
          ],
        },
      ],
    },
  },
  {
    id: 1,
    title: "TubePicker",
    url: "https://ujung.link/",
    subtitle: "원하는 채널만 골라보는 서비스",
    img: "/images/project1/0.png",
    ProjectHeader: {
      title: "TubePicker",
      publishDate: "2024.02.13",
      tags: "Design / Frontend / Backend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        subtitle: [
          "사용자가 좋아한 영상들을 최신순으로 보여줍니다.",
          "영상을 클릭하면 모달창에서 영상을 시청 할 수 있습니다.",
        ],
        img: "/images/project1/1.gif",
      },
      {
        id: uuidv4(),
        subtitle: [
          "사용자가 생성한 폴더 리스트, 구독채널 리스트를 데이터베이스에서 읽어옵니다.",
          "원하는 채널을 선택/검색하여 폴더를 생성할 수 있습니다.",
        ],
        img: "/images/project1/2.gif",
      },
      {
        id: uuidv4(),
        subtitle: ["사용자는 폴더를 수정/삭제 할 수 있습니다."],
        img: "/images/project1/3.gif",
      },
    ],
    ProjectInfo: {
      ClientHeading: "Introduce.",
      Introduce: [
        {
          id: uuidv4(),
          title: "기간",
          details: "2023/12/24 ~ 2024/02/13",
        },
        {
          id: uuidv4(),
          title: "기여도",
          details: "100%",
        },
        {
          id: uuidv4(),
          title: "링크",
          details: "https://ujung.link",
        },
      ],
      Technologies: [
        {
          title: "Tech",
          techs: [
            "React",
            "Typescript",
            "Express",
            "AWS EC2",
            "Google OAuth2.0",
            "mySQL",
            "Youtube API",
            "node.js",
          ],
        },
      ],
      ProjectDetails: [
        {
          id: uuidv4(),
          title: "소개",
          details: [
            "사용자가 원하는 유튜브 채널을 그룹핑하여 볼 수 있는 서비스 입니다.",
            "유튜브의 추천영상기능 때문에 발생하는 시간낭비를 줄이고, 제가 관심있는 채널만 모아 보고 싶어 만들게 됐습니다.",
          ],
        },
        {
          id: uuidv4(),
          title: "주요기능",

          details: [
            "✅ 구독하는 채널 리스트에서 관심사별로 채널들을 선택해 폴더를 생성할 수 있습니다.",
            "✅ 생성한 폴더를 클릭하면 선택된 채널의 영상을 최신순으로 볼 수 있습니다.",
            "✅ 폴더의 이름과 선택한 채널을 수정할 수 있습니다.",
            "✅ 폴더를 삭제할 수 있습니다.",
            "✅ 유튜브에서 좋아요한 영상을 볼 수 있습니다.",
            "✅ 구독채널 리스트에서 채널제목을 검색할 수 있습니다.",
          ],
        },
      ],
    },
  },
  {
    id: 1,
    title: "TubePicker",
    url: "https://ujung.link/",
    subtitle: "원하는 채널만 골라보는 서비스",
    img: "/images/project1/0.png",
    ProjectHeader: {
      title: "TubePicker",
      publishDate: "2024.02.13",
      tags: "Design / Frontend / Backend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        subtitle: [
          "사용자가 좋아한 영상들을 최신순으로 보여줍니다.",
          "영상을 클릭하면 모달창에서 영상을 시청 할 수 있습니다.",
        ],
        img: "/images/project1/1.gif",
      },
      {
        id: uuidv4(),
        subtitle: [
          "사용자가 생성한 폴더 리스트, 구독채널 리스트를 데이터베이스에서 읽어옵니다.",
          "원하는 채널을 선택/검색하여 폴더를 생성할 수 있습니다.",
        ],
        img: "/images/project1/2.gif",
      },
      {
        id: uuidv4(),
        subtitle: ["사용자는 폴더를 수정/삭제 할 수 있습니다."],
        img: "/images/project1/3.gif",
      },
    ],
    ProjectInfo: {
      ClientHeading: "Introduce.",
      Introduce: [
        {
          id: uuidv4(),
          title: "기간",
          details: "2023/12/24 ~ 2024/02/13",
        },
        {
          id: uuidv4(),
          title: "기여도",
          details: "100%",
        },
        {
          id: uuidv4(),
          title: "링크",
          details: "https://ujung.link",
        },
      ],
      Technologies: [
        {
          title: "Tech",
          techs: [
            "React",
            "Typescript",
            "Express",
            "AWS EC2",
            "Google OAuth2.0",
            "mySQL",
            "Youtube API",
            "node.js",
          ],
        },
      ],
      ProjectDetails: [
        {
          id: uuidv4(),
          title: "소개",
          details: [
            "사용자가 원하는 유튜브 채널을 그룹핑하여 볼 수 있는 서비스 입니다.",
            "유튜브의 추천영상기능 때문에 발생하는 시간낭비를 줄이고, 제가 관심있는 채널만 모아 보고 싶어 만들게 됐습니다.",
          ],
        },
        {
          id: uuidv4(),
          title: "주요기능",

          details: [
            "✅ 구독하는 채널 리스트에서 관심사별로 채널들을 선택해 폴더를 생성할 수 있습니다.",
            "✅ 생성한 폴더를 클릭하면 선택된 채널의 영상을 최신순으로 볼 수 있습니다.",
            "✅ 폴더의 이름과 선택한 채널을 수정할 수 있습니다.",
            "✅ 폴더를 삭제할 수 있습니다.",
            "✅ 유튜브에서 좋아요한 영상을 볼 수 있습니다.",
            "✅ 구독채널 리스트에서 채널제목을 검색할 수 있습니다.",
          ],
        },
      ],
    },
  },
  {
    id: 1,
    title: "TubePicker",
    url: "https://ujung.link/",
    subtitle: "원하는 채널만 골라보는 서비스",
    img: "/images/project1/0.png",
    ProjectHeader: {
      title: "TubePicker",
      publishDate: "2024.02.13",
      tags: "Design / Frontend / Backend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        subtitle: [
          "사용자가 좋아한 영상들을 최신순으로 보여줍니다.",
          "영상을 클릭하면 모달창에서 영상을 시청 할 수 있습니다.",
        ],
        img: "/images/project1/1.gif",
      },
      {
        id: uuidv4(),
        subtitle: [
          "사용자가 생성한 폴더 리스트, 구독채널 리스트를 데이터베이스에서 읽어옵니다.",
          "원하는 채널을 선택/검색하여 폴더를 생성할 수 있습니다.",
        ],
        img: "/images/project1/2.gif",
      },
      {
        id: uuidv4(),
        subtitle: ["사용자는 폴더를 수정/삭제 할 수 있습니다."],
        img: "/images/project1/3.gif",
      },
    ],
    ProjectInfo: {
      ClientHeading: "Introduce.",
      Introduce: [
        {
          id: uuidv4(),
          title: "기간",
          details: "2023/12/24 ~ 2024/02/13",
        },
        {
          id: uuidv4(),
          title: "기여도",
          details: "100%",
        },
        {
          id: uuidv4(),
          title: "링크",
          details: "https://ujung.link",
        },
      ],
      Technologies: [
        {
          title: "Tech",
          techs: [
            "React",
            "Typescript",
            "Express",
            "AWS EC2",
            "Google OAuth2.0",
            "mySQL",
            "Youtube API",
            "node.js",
          ],
        },
      ],
      ProjectDetails: [
        {
          id: uuidv4(),
          title: "소개",
          details: [
            "사용자가 원하는 유튜브 채널을 그룹핑하여 볼 수 있는 서비스 입니다.",
            "유튜브의 추천영상기능 때문에 발생하는 시간낭비를 줄이고, 제가 관심있는 채널만 모아 보고 싶어 만들게 됐습니다.",
          ],
        },
        {
          id: uuidv4(),
          title: "주요기능",

          details: [
            "✅ 구독하는 채널 리스트에서 관심사별로 채널들을 선택해 폴더를 생성할 수 있습니다.",
            "✅ 생성한 폴더를 클릭하면 선택된 채널의 영상을 최신순으로 볼 수 있습니다.",
            "✅ 폴더의 이름과 선택한 채널을 수정할 수 있습니다.",
            "✅ 폴더를 삭제할 수 있습니다.",
            "✅ 유튜브에서 좋아요한 영상을 볼 수 있습니다.",
            "✅ 구독채널 리스트에서 채널제목을 검색할 수 있습니다.",
          ],
        },
      ],
    },
  },
  {
    id: 1,
    title: "TubePicker",
    url: "https://ujung.link/",
    subtitle: "원하는 채널만 골라보는 서비스",
    img: "/images/project1/0.png",
    ProjectHeader: {
      title: "TubePicker",
      publishDate: "2024.02.13",
      tags: "Design / Frontend / Backend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        subtitle: [
          "사용자가 좋아한 영상들을 최신순으로 보여줍니다.",
          "영상을 클릭하면 모달창에서 영상을 시청 할 수 있습니다.",
        ],
        img: "/images/project1/1.gif",
      },
      {
        id: uuidv4(),
        subtitle: [
          "사용자가 생성한 폴더 리스트, 구독채널 리스트를 데이터베이스에서 읽어옵니다.",
          "원하는 채널을 선택/검색하여 폴더를 생성할 수 있습니다.",
        ],
        img: "/images/project1/2.gif",
      },
      {
        id: uuidv4(),
        subtitle: ["사용자는 폴더를 수정/삭제 할 수 있습니다."],
        img: "/images/project1/3.gif",
      },
    ],
    ProjectInfo: {
      ClientHeading: "Introduce.",
      Introduce: [
        {
          id: uuidv4(),
          title: "기간",
          details: "2023/12/24 ~ 2024/02/13",
        },
        {
          id: uuidv4(),
          title: "기여도",
          details: "100%",
        },
        {
          id: uuidv4(),
          title: "링크",
          details: "https://ujung.link",
        },
      ],
      Technologies: [
        {
          title: "Tech",
          techs: [
            "React",
            "Typescript",
            "Express",
            "AWS EC2",
            "Google OAuth2.0",
            "mySQL",
            "Youtube API",
            "node.js",
          ],
        },
      ],
      ProjectDetails: [
        {
          id: uuidv4(),
          title: "소개",
          details: [
            "사용자가 원하는 유튜브 채널을 그룹핑하여 볼 수 있는 서비스 입니다.",
            "유튜브의 추천영상기능 때문에 발생하는 시간낭비를 줄이고, 제가 관심있는 채널만 모아 보고 싶어 만들게 됐습니다.",
          ],
        },
        {
          id: uuidv4(),
          title: "주요기능",

          details: [
            "✅ 구독하는 채널 리스트에서 관심사별로 채널들을 선택해 폴더를 생성할 수 있습니다.",
            "✅ 생성한 폴더를 클릭하면 선택된 채널의 영상을 최신순으로 볼 수 있습니다.",
            "✅ 폴더의 이름과 선택한 채널을 수정할 수 있습니다.",
            "✅ 폴더를 삭제할 수 있습니다.",
            "✅ 유튜브에서 좋아요한 영상을 볼 수 있습니다.",
            "✅ 구독채널 리스트에서 채널제목을 검색할 수 있습니다.",
          ],
        },
      ],
    },
  },
];
