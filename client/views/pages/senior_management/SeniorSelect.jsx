import React from "react";
import Table from "../../component/Table.jsx";
import Button from "../../component/Button.jsx";
import { useNavigate } from "react-router";
import DetailSearch from "./../../component/DetailSearch.jsx";
import ContentTitle from "../../component/ContentTitle.jsx";
import SubTitle from "../../component/SubTitle.jsx";

export default function SeniorSelect() {
  const navigate = useNavigate();

  //게시판
  const thead = [
    <input type="checkbox" />,
    "No",
    "사용자관리번호",
    "요양 등급",
    "이름",
    "생년월일",
    "연락처",
    "주소",
    "기저질환",
  ];
  const key = [
    "",
    "No",
    "management_number",
    "level_of_care",
    "name",
    "birth",
    "phone",
    "address",
    "underlying_disease",
  ];
  const content = [
    {
      "": <input type="checkbox" />,
      No: 1,
      management_number: 2022080101,
      level_of_care: "1등급",
      name: "김복남",
      birth: "1948.11.15",
      phone: "010-1234-5678",
      address: "경상북도 군위군 삼국유사면",
      underlying_disease: "고혈압",
    },
    {
      "": <input type="checkbox" />,
      No: 2,
      management_number: 2022080102,
      level_of_care: "2등급",
      name: "홍길동",
      birth: "1948.05.18",
      phone: "010-3333-4444",
      address: "경상북도 군위군 군위읍",
      underlying_disease: "폐렴",
    },
  ];

  //select option 동적 생성
  // const optionList = () => {
  //   let year = [];
  //   let month = [];
  //   let days = [];
  //   let currentDate = new Date();
  //   let currentYear = currentDate.getFullYear();

  //   for (let i = 1910; i < currentYear.length; i++) {
  //     year.push(i);
  //   }

  //   for (let j = 1; i < 13; j++) {
  //     month.push(j);
  //   }

  //   for (let k = 1; i < 32; k++) {
  //     days.push(k);
  //   }
  //   return year, month, days;
  // };

  // React.useEffect(() => {
  //   optionList();
  // }, []);

  return (
    <main>
      <div className="content-wrap">
        <ContentTitle contentTitle={"시니어 조회"} />
        <div>
          <DetailSearch />
          <div className="board-wrap">
            <SubTitle className="margin-bottom" explanation={"대상자 클릭 시 상세페이지로 이동합니다."} />
            <Table
              className={"senior-table"}
              head={thead}
              contents={content}
              contentKey={key}
              onClick={() => {
                navigate("/SeniorSelectOne");
              }}
            />
            <div className="btn-wrap flex-end">
              <Button
                className={"btn-small green-btn"}
                btnName={"등록"}
                onClick={() => {
                  navigate("/SeniorInsert");
                }}
              />
              <Button className={"btn-small green-btn"} btnName={"삭제"} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
