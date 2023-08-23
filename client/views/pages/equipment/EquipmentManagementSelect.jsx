import React from "react";
import Button from "../../component/Button.jsx";
import Table from "../../component/Table.jsx";
import Modal from "../../component/Modal.jsx";
import ContentTitle from "../../component/ContentTitle.jsx";
import SubTitle from '../../component/SubTitle.jsx'
import { useNavigate } from "react-router";

export default function EquipmentManagementSelect() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = React.useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  //게시판
  const thead = [
    <input type="checkbox" />,
    "No",
    "장비명",
    "시리얼 넘버",
    "기기 상태",
    "구매일",
    "배터리 잔량",
    "대여가능여부",
    "관리",
  ];
  const key = [
    "",
    "No",
    "equipment_name",
    "serialNumber",
    "work",
    "name",
    "battery",
    "rental",
    "management",
  ];
  const content = [
    {
      "": <input type="checkbox" />,
      No: 1,
      equipment_name: "스마트약상자",
      serialNumber: "ABCD-1",
      work: "작동",
      name: "2022.12.02",
      battery: "10%",
      rental: "대여가능",
      management: (
        <Button
          className={"btn-small gray-btn"}
          btnName={"사용자 등록"}
          onClick={(event) => (
            event.stopPropagation(), navigate("/EquipmentRentalInsert")
          )}
        />
      ),
    },
    {
      "": <input type="checkbox" />,
      No: 2,
      equipment_name: "혈압측정기",
      serialNumber: "ABCD-2",
      work: "수리중",
      name: "2022.12.02",
      battery: "0%",
      rental: "대여중",
      management: (
        <Button className={"btn-small gray-btn"} btnName={"사용자 수정"} />
      ),
    },
  ];
  return (
    <main>
      <Modal open={modalOpen} close={closeModal} header="장비등록">
        <div className="board-wrap">
          <table className="equipment-modal margin-bottom">
            <tbody>
              <tr>
                <th>장비명</th>
                <td>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <th>시리얼넘버</th>
                <td>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <th>기기상태</th>
                <td>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <th>구매일</th>
                <td>
                  <input type="date" />
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <Button
              className={"btn-100 green-btn"}
              btnName={"등록"}
              onClick={closeModal}
            />
          </div>
        </div>
      </Modal>
      <div className="content-wrap">
        <ContentTitle contentTitle={"장비 조회"} />
        <div className="board-wrap">
          <SubTitle
            className="margin-bottom"
            explanation={"장비명 클릭 시 상세페이지로 이동합니다."}
          />
          <div className="equipment-table">
            <Table
              className={"equipment-table"}
              head={thead}
              contents={content}
              contentKey={key}
              onClick={() => {
                navigate("/EquipmentManagementSelectOne");
              }}
            />
          </div>
          <div className="btn-wrap flex-end">
            <Button
              className={"btn-small green-btn"}
              btnName={"등록"}
              onClick={openModal}
            />
            <Button className={"btn-small gray-btn"} btnName={"삭제"} />
          </div>
        </div>
      </div>
    </main>
  );
}
