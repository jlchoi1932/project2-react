import React from "react";
import Title from "../../component/Title.jsx";
import Table from "./../../component/Table.jsx";
import Map from "./Map.jsx";
import RowChart from "./RowChart.jsx";
import Chart1 from "./Chart1.jsx";
import Chart2 from "./Chart2.jsx";
import Chart3 from "./Chart3.jsx";
import Weather from "./Weather.jsx";
import Donut1 from "./Donut1.jsx";
import Donut2 from "./Donut2.jsx";
import Donut3 from "./Donut3.jsx";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function Main() {
  const tableHead = ["이름", "시리얼 넘버", "위치"];
  const Key = ["name", "serialNumber", "location"];
  const content = [
    {
      name: "스마트약상자",
      serialNumber: "ABCD-1",
      location: "대구광역시 서구 상중이동",
    },
    {
      name: "스마트약상자",
      serialNumber: "ABCD-2",
      location: "대구광역시 서구 내당4동",
    },
    {
      name: "스마트약상자",
      serialNumber: "ABCD-3",
      location: "대구광역시 서구 내당2,3동",
    },
    {
      name: "스마트약상자",
      serialNumber: "ABCD-4",
      location: "대구광역시 서구 평리3동",
    },
    {
      name: "스마트약상자",
      serialNumber: "ABCD-5",
      location: "대구광역시 서구 내당1동",
    },
  ];

  return (
    <main>
      <div className="main-grid-government">
        <div className="content-box combine-left">
          <div className="flex margin-bottom">
            <Title title={"케어 노인 분포 현황"} />
            <AddCircleIcon sx={{ fontSize: 20, color: "#1976d2" }} />
          </div>
          <Map />
        </div>
        <div className="content-box ">
          <div className="margin-bottom">
            <Title title={"노인 분포도"} />
          </div>
          <RowChart />
        </div>
        <div className="content-box">
          <div className="margin-bottom">
            <Title title={"요양 등급별 노인 현황"} />
          </div>
          <Donut1 />
        </div>
        <div className="content-box">
          <div>
            <div className="flex margin-bottom">
              <Title title={"노인 외출 현황"} />
              <AddCircleIcon sx={{ fontSize: 20, color: "#1976d2" }} />
            </div>
            <Donut2 />
          </div>
        </div>
        <div className="content-box">
          <div className="flex margin-bottom">
            <Title title={"장기 미복약 현황"} />
            <AddCircleIcon sx={{ fontSize: 20, color: "#1976d2" }} />
          </div>
          <Donut3 />
        </div>
        <div className="content-box combine-right-government">
          <div className="flex margin-bottom">
            <Title title={"약상자 여닫음 횟수 통계"} />
            <AddCircleIcon sx={{ fontSize: 20, color: "#1976d2" }} />
          </div>
          <Chart1 />
        </div>
        <div className="content-box combine-left">
          <div className="flex margin-bottom">
            <Title title={"월별 방문 현황 통계"} />
            <AddCircleIcon sx={{ fontSize: 20, color: "#1976d2" }} />
          </div>
          <Chart3 />
        </div>
        <div className="content-box combine-right-government">
          <div className="flex margin-bottom">
            <Title title={"장비현황"} />
            <AddCircleIcon sx={{ fontSize: 20, color: "#1976d2" }} />
          </div>
          <Table head={tableHead} contents={content} contentKey={Key} />
        </div>
      </div>
    </main>
  );
}

export default Main;
