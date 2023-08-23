import React from "react";
import ClusteredColumnChart from "../../../component/chart/ClusteredColumnChart.jsx";
import ContentTitle from "../../../component/ContentTitle.jsx";
import TableTitle from "../../../component/Tabletitle.jsx";

export default function TemperatureManagementSelectOne() {
  return (
    <main>
      <div className="content-wrap">
        <ContentTitle contentTitle={"댁내 온도 상세 페이지"} />
        <div className="detail-graph">
          <TableTitle tableTitle={" 님의 댁내 온도 정보"}/>
          <ClusteredColumnChart />
        </div>
        <div className="board-wrap">
          <table className="table-border margin-bottom2 temperature-modal">
            <thead>
              <tr>
                <th rowSpan="2">No</th>
                <th rowSpan="2">날짜</th>
                <th colSpan="4">댁내온도</th>
              </tr>
              <tr>
                <th>02:00</th>
                <th>10:00</th>
                <th>14:00</th>
                <th>23:00</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2</td>
                <td>2022.08.10</td>
                <td>18 ℃</td>
                <td>5 ℃</td>
                <td>10 ℃</td>
                <td>13 ℃</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2022.08.09</td>
                <td>18 ℃</td>
                <td>5 ℃</td>
                <td>10 ℃</td>
                <td>13 ℃</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
