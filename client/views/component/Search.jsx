import React from "react";
import Button from "./Button.jsx";

export default function Search() {
  return (
    <div className="search-group search-area">
      <div className="flex search-line">
        <div className="flex-start flex50">
          <label className="flex15" htmlFor="name">
            이름검색
          </label>
          <input
            type="text"
            name="name"
            placeholder="조회할려는 이름을 입력해주세요."
            autocomplete="off"
            id="name"
          />
        </div>
        <div className="flex-start flex45">
          <label className="flex15" htmlFor="birth">
            생년월일
          </label>
          <div className="info flex85" id="info__birth">
            <select className="box" id="birth-year">
              <option disabled selected>
                출생 연도
              </option>
            </select>
            <select className="box" id="birth-month">
              <option disabled selected>
                월
              </option>
            </select>
            <select className="box" id="birth-day">
              <option disabled selected>
                일
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="btn-box flex-center">
        <Button className={"btn-large gray-btn"} btnName={"초기화"} />
        <Button className={"btn-large green-btn"} btnName={"조회"} />
      </div>
    </div>
  );
}
