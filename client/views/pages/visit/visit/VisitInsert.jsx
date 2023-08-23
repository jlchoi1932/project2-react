import React from "react";
import Button from "../../../component/Button.jsx";
import ContentTitle from "../../../component/ContentTitle.jsx";
import { useNavigate } from "react-router";
import Title from "../../../component/Title.jsx";

export default function VisitInsert() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = React.useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <main>
      <div className="content-wrap">
      <ContentTitle contentTitle={"방문 등록"} />
        <div className="margin-bottom2 insert">
          <div className="flex30">
            <div className="search-visit-insert flex">
              <select name="management-agency">
                <option value="기관전체">기관전체</option>
                <option value="대구보훈병원">대구보훈병원</option>
                <option value="군위군청">군위군청</option>
              </select>
              <select>
                <option value="이름">이름</option>
                <option value="사용자등록번호">사용자등록번호</option>
              </select>
              <input type="text" />
              <Button className={"btn-small gray-btn"} btnName={"검색"} onClick={() => navigate("/SeniorInsert")} />
            </div>
          </div>
          <table className="flex70">
            <tbody>
              <tr>
                <th>대상자</th>
                <td colSpan={3}>
                  <input type="text" name="" id="" disabled />
                </td>
              </tr>
              <tr>
                <th>생년월일</th>
                <td colSpan={3}></td>
              </tr>
              <tr>
                <th>성별</th>
                <td></td>
              </tr>
              <tr>
                <th>주소</th>
                <td></td>
              </tr>
              <tr>
                <th>방문날짜</th>
                <td colSpan={3}>
                  <input type="date" name="" id="" />
                </td>
              </tr>
              <tr>
                <th>방문사유</th>
                <td className="flex">
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">
                      정기방문
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">
                      어르신케어
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">
                      장비점검
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <th>방문 상세 사유</th>
                <td colSpan={3}>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="btn-wrap flex-center">
          <Button className={"btn-large gray-btn"} btnName={"취소"} />
          <Button className={"btn-large green-btn"} btnName={"등록"} />
        </div>
      </div>
    </main>
  );
}
