import React from "react";
import Button from "../../component/Button.jsx";
import Table from "../../component/Table.jsx";
import Modal from "../../component/Modal.jsx";
import { useNavigate } from "react-router";
import ContentTitle from "../../component/ContentTitle.jsx";

export default function EquipmentManagementSelectOne() {
  const navigate = useNavigate();
  //게시판
  const thead = [
    "No",
    "장비명",
    "시리얼 넘버",
    "사용자명",
    "사용자관리번호",
    "위치",
    "대여기간",
  ];
  const key = [
    "No",
    "equipment_name",
    "serialNumber",
    "name",
    "management_number",
    "address",
    "period_of_use",
  ];
  const content = [
    {
      No: 1,
      equipment_name: "스마트약상자",
      serialNumber: "ABCD-1",
      name: "김복남",
      management_number: 2022080101,
      address: "경상북도 군위군 삼국유사면",
      period_of_use: "2022.12.01 ~ 2023.11.30",
    },
    {
      No: 2,
      equipment_name: "스마트약상자",
      serialNumber: "ABCD-1",
      name: "홍길동",
      management_number: 2022080102,
      address: "경상북도 군위군 군위읍",
      period_of_use: "2020.05.01 ~ 2022.04.23",
    },
  ];
  return (
    <main>
      <div className="content-wrap">
      <ContentTitle contentTitle={"장비 상세 목록"} />
        <div className="board-wrap">
          <Table className="equipment-detail" head={thead} contents={content} contentKey={key} />
        </div>
      </div>
    </main>
  );
}
