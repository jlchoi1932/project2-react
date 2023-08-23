import React from "react";
import Button from "../../../component/Button.jsx";
import ContentTitle from "../../../component/ContentTitle.jsx";
import Chart2 from "../../../component/chart/Chart2.jsx";
import TableTitle from "../../../component/Tabletitle.jsx";

export default function VisitSelectOne() {
  return (
    <main>
      <div className="content-wrap">
        <ContentTitle contentTitle={"방문 관리 상세페이지"} />
        <div>
          <div className="detail-graph">
            <TableTitle tableTitle={" 님의 방문 내역"} />
            <Chart2 />
          </div>
          <table className="senior-detail margin-bottom">
            <tr>
              <th>대상자</th>
              <td>김말복</td>
              <th>사용자등록번호</th>
              <td>
                202280102
              </td>
            </tr>
            <tr>
              <th>생년월일</th>
              <td>1945.11.05</td>
              <th>성별</th>
              <td>여</td>
            </tr>
            <tr>
              <th>주소</th>
              <td>경상북도 군위군 삼국유사면</td>
              <th>방문날짜</th>
              <td>2022.12.23</td>
            </tr>
            <tr>
              <th>방문보호사</th>
              <td>김철수</td>
              <th>보호사 연락처</th>
              <td>010-1234-1234</td>
            </tr>
            <tr>
              <th>방문사유</th>
              <td colSpan={3}>정기방문</td>
            </tr>
            <tr>
              <th>방문 상세 사유</th>
              <td colSpan={3} style={{ height: "200px", overflow: "auto", textAlign: "left" }}>하루동안 미복약으로 방문.</td>
            </tr>
          </table>
          <div className="btn-wrap flex-center">
            <Button
              className={"btn-large gray-btn"}
              btnName={"이전"}
              onClick={() => {
                navigate("/SeniorSelect");
              }}
            />
            <Button
              className={"btn-large green-btn"}
              btnName={"수정"}
              onClick={() => {
                navigate("/SeniorInsert");
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
