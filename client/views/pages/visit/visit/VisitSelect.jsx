import React from "react";
import DetailSearch from "../../../component/DetailSearch.jsx";
import Button from "../../../component/Button.jsx";
import Table from "../../../component/Table.jsx";
import { useNavigate } from "react-router";
import ContentTitle from "../../../component/ContentTitle.jsx";
import SubTitle from "../../../component/SubTitle.jsx";

export default function VisitSelect() {
  const navigate = useNavigate();

  //게시판
  const thead = [
    "No",
    "방문날짜",
    "방문 보호사",
    "방문 대상자",
    "방문 사유",
    "방문 상세 사유",
  ];
  const key = [
    "No",
    "outing_period",
    "caregiver",
    "name",
    "reason",
    "reason_detail",
  ];
  const content = [
    {
      No: 1,
      outing_period: "2022.12.01",
      caregiver: "김철수",
      name: "김말복",
      reason: "정기내원",
      reason_detail: "하루동안 미복약으로 방문.",
    },
    {
      No: 2,
      outing_period: "2022.12.14",
      caregiver: "김양순",
      name: "홍길동",
      reason: "정기내원",
      reason_detail: "두통을 호소하셔서 병원 동행, 단순 두통으로 두통약 처방",
    },
  ];
  return (
    <main>
      <div className="content-wrap">
        <ContentTitle contentTitle={"방문 조회"} />
        <DetailSearch />
        <div className="board-wrap">
          <SubTitle
            className="margin-bottom"
            explanation={"대상자 클릭 시 상세페이지로 이동합니다."}
          />
          <div className="visit-table">
            <Table
              className={"visit-table"}
              head={thead}
              contents={content}
              contentKey={key}
              onClick={() => {
                navigate("/VisitSelectOne");
              }}
            />
          </div>
          <div className="btn-wrap flex-end">
            <Button
              className={"btn-small green-btn"}
              btnName={"등록"}
              onClick={() => {
                navigate("/VisitInsert");
              }}
            />
            <Button className={"btn-small green-btn"} btnName={"삭제"} />
          </div>
        </div>
      </div>
    </main>
  );
}
