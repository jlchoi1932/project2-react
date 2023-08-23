import React from "react";
import SidebarItem from "./SidebarItem.jsx";
import Button from "../component/Button.jsx";
import HouseIcon from "@mui/icons-material/House";
import PersonIcon from "@mui/icons-material/Person";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import DoorFrontIcon from "@mui/icons-material/DoorFront";
import SpeakerPhoneIcon from "@mui/icons-material/SpeakerPhone";
import SettingsIcon from "@mui/icons-material/Settings";
import Header from "../layout/Header.jsx";

export const items = [
  {
    title: "Home",
    path: "/",
    icon: <HouseIcon sx={{ fontSize: 20, color: "#ffffff", marginRight: 1 }} />,
  },
  {
    title: "시니어 관리",
    prefix: "/Senior",
    icon: (
      <PersonIcon sx={{ fontSize: 20, color: "#ffffff", marginRight: 1 }} />
    ),
    childrens: [
      {
        title: "노인 관리",
        path: "/SeniorSelect",
      },
    ],
  },
  {
    title: "건강 관리",
    prefix: "/Medicine",
    icon: (
      <Diversity1Icon sx={{ fontSize: 20, color: "#ffffff", marginRight: 1 }} />
    ),
    childrens: [
      {
        title: "복약 관리",
        path: "/MedicineCareSelect",
      },
      {
        title: "댁내 온도 관리",
        path: "/TemperatureManagementSelect",
      },
    ],
  },

  {
    title: "방문 관리",
    prefix: "/Visit",
    icon: (
      <DoorFrontIcon sx={{ fontSize: 20, color: "#ffffff", marginRight: 1 }} />
    ),
    childrens: [
      {
        title: "방문 관리",
        path: "/VisitSelect",
      },
    ],
  },
  {
    title: "장비 관리",
    prefix: "/Equipment",
    icon: (
      <SpeakerPhoneIcon
        sx={{ fontSize: 20, color: "#ffffff", marginRight: 1 }}
      />
    ),
    childrens: [
      {
        title: "장비 관리",
        path: "/EquipmentManagementSelect",
      },
    ],
  },
  {
    title: "설정",
    icon: (
      <SettingsIcon sx={{ fontSize: 20, color: "#ffffff", marginRight: 1 }} />
    ),
    childrens: [
      {
        title: "내정보 수정",
        path: "/MyInfoUpdate",
      },
      {
        title: "사용자 관리",
        path: "/UserAuthoriySelect",
      },
      {
        title: "권한 관리",
        path: "/AuthorityManagement",
      },
    ],
  },
];

export default function Sidebar({props}) {
  return (
    <nav className={props}>
      <h1 className="logo">시니어 케어 시스템</h1>
      <div className="flex-align-column" style={{ height: `calc(100% - 10%)` }}>
        <ul>
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </ul>
        <div className="info-wrap">
          <div className="bottom-section flex">
            <div className="info-id">관리자</div>
            <Button btnName={"로그아웃"} />
          </div>
        </div>
      </div>
    </nav>
  );
}
