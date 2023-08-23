import React from "react";
import Title from "../../component/Title.jsx";
import Table from "../../component/Table.jsx";
import Map from "../../component/chart/Map.jsx";
import Chart1 from "../../component/chart/Chart1.jsx";
import Chart2 from "../../component/chart/Chart2.jsx";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PersonIcon from '@mui/icons-material/Person';


export default function Main2() {
  const tableHead = ["방문날짜", "방문사유", "방문 상세 사유"];
  const Key = ["date", "reason", "detail_reason"];
  const content = [
    {
      date: "2022.12.12",
      reason: "어르신케어",
      detail_reason: "하루동안 미복약으로 방문. 방문시 두통을 호소하셔 병원 동행",
    },
  ];

  //노인리스트
  const tableHead2 = [
    "이름",
    "요양등급",
    "생년월일",
    "연락처",
    "주소",
    "기저질환",
  ];
  const Key2 = [
    "name",
    "level_of_care",
    "birth",
    "phone",
    "address",
    "management_number",
  ];
  const content2 = [
    {
      name: "김복남",
      level_of_care: "1등급",
      birth: "1948.11.15",
      phone: "010-1234-5678",
      address: "경상북도 군위군 삼국유사면",
      management_number: "혈압",
    },
    {
      name: "홍길동",
      level_of_care: "2등급",
      birth: "1948.05.18",
      phone: "010-3333-3333",
      address: "경상북도 군위군 삼국유사면",
      management_number: "당뇨",
    },
    {
      name: "김말순",
      level_of_care: "3등급",
      birth: "1939.03.19",
      phone: "010-3333-4444",
      address: "경상북도 군위군 삼국유사면",
      management_number: "천식",
    },
    {
      name: "신정길",
      level_of_care: "1등급",
      birth: "1945.05.19",
      phone: "010-3333-5555",
      address: "경상북도 군위군 삼국유사면",
      management_number: "폐렴",
    },
    {
      name: "김정남",
      level_of_care: "1등급",
      birth: "1945.05.19",
      phone: "010-3333-6666",
      address: "경상북도 군위군 삼국유사면",
      management_number: "인지장애",
    },
  ];

  return (
    <main>
      <div className="main-grid-government">
        <ul className="content-box statistics flex combine-left">
          <li>
            <p>전체 대상자</p>
            <p>400</p>
          </li>
          <li>
            <p>미복약 대상자</p>
            <p>100</p>
          </li>
          <li>
            <p>복용 대상자</p>
            <p>300</p>
          </li>
        </ul>
        <div className="content-box combine-left combine-bottom-government ">
          <div className="flex margin-bottom">
            <Title title={"케어 노인 분포 현황"} explanation={"지역 선택 시 해당 지역의 미복약 노인리스트가 보여집니다."} />
            <AddCircleIcon sx={{ fontSize: 20, color: "#1976d2" }} />
          </div>
          <Map />
          <div className="content-box">
            <div className="margin-bottom">
              <Title title={"장기 미복약 노인 리스트"} explanation={"대상자 클릭 시 오른쪽에 통계 시각화가 표시됩니다."} />
            </div>
            <div style={{ height: "20vh", overflow: "auto" }}>
              <Table className={"none-medicine-list"} head={tableHead2} contents={content2} contentKey={Key2} />
            </div>
          </div>
        </div>
        <div className="content-box combine-right-government">
          <div className="flex">
            <div className="main-battery-title flex"><PersonIcon sx={{ fontSize: 40, color: "#1976d2" }}/><span>김복남</span><p>스마트 약상자 배터리 잔량이</p></div>
            <div className="battery flex">
              <p>33%</p>
            </div>
          </div>
        </div>
        <div className="content-box combine-right-government ">
          <div className="flex margin-bottom">
            <Title title={"복약 기록"} explanation={"복약 기록을 나타내는 그래프"} />
            <AddCircleIcon sx={{ fontSize: 20, color: "#1976d2" }} />
          </div>
          <Chart1 />
        </div>
        <div className="content-box combine-right-government">
          <div className="flex margin-bottom ">
            <Title title={"댁내 온도"} explanation={"일주일간의 댁내 온도를 나타내는 그래프"} />
            <AddCircleIcon sx={{ fontSize: 20, color: "#1976d2" }} />
          </div>
          <Chart2 />
        </div>
        <div className="content-box combine-right-government">
          <div className="flex margin-bottom">
            <Title title={"최근 방문 일지"} explanation={"선택하신 어르신의 최근 방문 일지"} />
            <AddCircleIcon sx={{ fontSize: 20, color: "#1976d2" }} />
          </div>
          <div>
            <Table className={"recent-visit"} head={tableHead} contents={content} contentKey={Key} />
          </div>
        </div>
      </div>
    </main>
  );
}
