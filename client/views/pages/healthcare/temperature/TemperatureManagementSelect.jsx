import React from "react";
import Table from "../../../component/Table.jsx";
import DetailSearch from "../../../component/DetailSearch.jsx";
import ContentTitle from "../../../component/ContentTitle.jsx";
import SubTitle from "../../../component/SubTitle.jsx";
import { useNavigate } from 'react-router';

export default function TemperatureManagementSelect() {
  const navigate = useNavigate();
    //게시판
    const thead = ["No", "이름", "생년월일", "연락처", "주소", "최근 온도",];
    const key = ["No", "name", "birth", "phone", "address", "temp",];
    const content = [
      {
        No: 1,
        name: "김복남",
        birth: "1948.11.15",
        phone: "010-1234-5678",
        address: "경상북도 군위군 삼국유사면",
        temp: "18°C",
      },
      {
        No: 2,
        name: "홍길동",
        birth: "1945.05.08",
        phone: "010-1234-5678",
        address: "경상북도 군위군 군위읍",
        temp: "10°C",
      },
    ];
  return (
    <main>
      <div className="content-wrap">
      <ContentTitle contentTitle={"댁내 온도 조회"} />
          <DetailSearch />
          <div className="board-wrap">  
          <SubTitle className="margin-bottom" explanation={"대상자 클릭 시 최근 일주일 댁내 온도를 확인할 수 있습니다."}/>
          <Table
          className={"temperature-table"}
            head={thead}
            contents={content}
            contentKey={key}
            onClick={()=>{navigate('/TemperatureManagementSelectOne')}}
          />
        </div>
      </div>
    </main>
  );
}
