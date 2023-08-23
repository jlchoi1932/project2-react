import React from "react";
import { useNavigate } from "react-router";
import DetailSearch from "../../../component/DetailSearch.jsx";
import Table from "../../../component/Table.jsx";
import ContentTitle from "../../../component/ContentTitle.jsx";
import SubTitle from "../../../component/SubTitle.jsx";

export default function MedicineCareSelect() {
  const navigate = useNavigate();

  //게시판
  const thead = ["No", "이름", "생년월일", "연락처", "주소", "최근 복약률",];
  const key = ["No", "name", "birth", "phone", "address", "average"];
  const content = [
    {
      No: 1,
      name: "김복남",
      birth: "1948.11.15",
      phone: "010-1234-5678",
      address: "경상북도 군위군 삼국유사면",
      average: "0%",
    },
    {
      No: 2,
      name: "홍길동",
      birth: "1948.08.02",
      phone: "010-1234-3333",
      address: "경상북도 군위군 군위읍",
      average: "80%",
    },
  ];

  return (
    <main>
      <div className="content-wrap">
      <ContentTitle contentTitle={"복약 조회"} />
        <div>
          <DetailSearch />
          <div className="board-wrap">
          <SubTitle explanation={"대상자 클릭 시 상세페이지로 이동합니다."} className="margin-bottom"/>
            <Table
            className={"medicine-table"}
              head={thead}
              contents={content}
              contentKey={key}
              onClick={() => {
                navigate("/MedicineCareSelectOne");
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
