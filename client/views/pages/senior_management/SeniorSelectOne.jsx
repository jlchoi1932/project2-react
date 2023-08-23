import React from "react";
import Button from "../../component/Button.jsx";
import { useNavigate } from "react-router";
import ContentTitle from "../../component/ContentTitle.jsx";

export default function SeniorSelectOne() {
  const navigate = useNavigate();
  return (
    <main>
    <div className="content-wrap row">
    <ContentTitle contentTitle={"대상자 상세 프로필"}/>
      <div>
        <table className="margin-bottom senior-detail">
          <tbody>
            <tr>
              <th>이름</th>
              <td>
                <span>김복남</span>
              </td>
              <th>사용자등록번호</th>
              <td>
                <span>202280102</span>
              </td>              
            </tr>
            <tr>
            <th>생년월일</th>
              <td>
                <span>1948.11.15</span>
              </td>
              <th>연락처</th>
              <td>
                <span>010-1234-5678</span>
              </td>
            </tr>
            <tr>
              <th>요양등급</th>
              <td>
                <span>1등급</span>
              </td>
              <th>성별</th>
              <td>
                <span>남</span>
              </td>              
            </tr>
            <tr>
            <th>주소</th>
              <td>
                <span>경상북도 군위군 삼국유사면</span>
              </td>
              <th>보호자 비상연락망</th>
              <td>
                <span>010-1234-5678</span>
              </td>
            </tr>
            <tr>
              <th>복용중인 약</th>
              <td colSpan={3}>
                <span>혈압약</span>
              </td>
            </tr>
            <tr>
              <th>기저질환</th>
              <td colSpan={3} style={{height:"300px"}}>
                <span>고혈압</span>
              </td>
            </tr>
          </tbody>
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
