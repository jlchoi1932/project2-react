import React from "react";
import Button from "../../component/Button.jsx";
import ContentTitle from "../../component/ContentTitle.jsx";

export default function EquipmentRentalInsert() {
  return (
    <main>
      <div className="content-wrap">
      <ContentTitle contentTitle={"장비 대여"} />
        <div className="margin-bottom2 insert">
          <div className="flex30">
            <div className="flex margin-bottom">
              <input
                type="text"
                name=""
                id=""
                className="flex80"
                placeholder="사용자 검색"
              />
              <Button btnName={"검색"} className={"flex20"} />
            </div>
            <ul className="user-list">
              <li>검색 내역이 없습니다.</li>
            </ul>
          </div>
          <table className="flex70 margin-bottom">
            <tbody className="equipment-insert">
              <tr>
                <th>기기종류</th>
                <td colSpan={5}>
                  <div className="flex-start">
                    <input type="checkbox" />
                    <label htmlFor="">스마트 약상자</label>
                    <input type="checkbox" />
                    <label htmlFor="">심전도</label>
                  </div>
                </td>
              </tr>
              <tr>
                <th>장비넘버</th>
                <td colSpan={5}>
                  <input type="text" name="" id="" disabled />
                </td>
              </tr>
              <tr>
                <th>사용자</th>
                <td colSpan={5}>
                  <div className="flex">
                    <input type="text" disabled />
                  </div>
                </td>
              </tr>
              <tr>
                <th>주소</th>
                <td colSpan={5}>
                  <div className="flex">
                    <input type="text" disabled />
                  </div>
                </td>
              </tr>
              <tr>
                <th>대여일</th>
                <td colSpan={5}>
                  <div className="flex">
                    <input type="date" />~
                    <input type="date" />
                  </div>
                </td>
              </tr>
              <tr>
                <th>아침</th>
                <td>
                  <select name="" id="" className="select100">
                    <option value="">미사용</option>
                    <option value="">사용</option>
                  </select>
                </td>
                <th>점심</th>
                <td>
                  <select name="" id="" className="select100">
                    <option value="">미사용</option>
                    <option value="">사용</option>
                  </select>
                </td>
                <th>저녁</th>
                <td>
                  <select name="" id="" className="select100">
                    <option value="">미사용</option>
                    <option value="">사용</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>비고</th>
                <td colSpan={5}>
                  <textarea name="" id="" cols="30" rows="10" style={{height:"192px"}}></textarea>
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
