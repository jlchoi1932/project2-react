import React from "react";
import Button from "../../component/Button.jsx";
import { useNavigate } from "react-router";

export default function SeniorInsert() {
  const navigate = useNavigate();
  return (
    <main>
      <div className="content-wrap row">
        <div className="page-title margin-bottom">대상자 등록</div>
          <table className="margin-bottom2 senior-insert">
            <tr>
              <th>이름</th>
              <td>
                <input type="text" />
              </td>
              <th>생년월일</th>
              <td>
                <div className="flex">
                  <select name="year" id="year">
                    <option value="">년</option>
                  </select>
                  <select name="month" id="month">
                    <option value="">월</option>
                  </select>
                  <select name="days" id="days">
                    <option value="">일</option>
                  </select>
                </div>
              </td>
            </tr>
            <tr>
              <th>성별</th>
              <td className="flex-start gender">
                <div className="flex-start">
                  <input type="checkbox"></input>
                  <label for="gender">남</label>
                </div>
                <div className="flex-start">
                  <input type="checkbox"></input>
                  <label for="gender">여</label>
                </div>
              </td>
              <th>요양등급</th>
              <td>
                <select name="" id="section">
                  <option value="">요양등급선택</option>
                  <option value="">1등급</option>
                  <option value="">2등급</option>
                  <option value="">3등급</option>
                  <option value="">4등급</option>
                  <option value="">등급없음</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>보호자 비상연락망</th>
              <td colSpan={3}>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <th>연락처</th>
              <td colSpan={3}>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <th>주소</th>
              <td colSpan={3}>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <th>복용중인 약</th>
              <td colSpan={3}>
                <textarea className="medicine" cols="30" rows="2"></textarea>
              </td>
            </tr>
            <tr>
              <th>기저질환</th>
              <td colSpan={3}>
                <textarea cols="30" rows="10"></textarea>
              </td>
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
              btnName={"등록"}
              onClick={() => {
                navigate("/SeniorSelect");
              }}
            />
          </div>
      </div>
    </main>
  );
}
