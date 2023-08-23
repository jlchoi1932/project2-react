import React, { useState } from "react";

import Button from "./Button.jsx";

const CATEGORY_LIST = [
  { id: 0, data: "서울" },
  { id: 1, data: "인천" },
  { id: 2, data: "경기" },
  { id: 3, data: "경북" },
  { id: 4, data: "경남" },
  { id: 5, data: "전북" },
  { id: 6, data: "전남" },
  { id: 7, data: "제주" },
];
const CATEGORY_LIST1 = [
  { id: 0, data: "전체" },
  { id: 0, data: "광현리" },
  { id: 1, data: "금구리" },
  { id: 2, data: "내량리" },
  { id: 3, data: "대북리" },
  { id: 4, data: "대흥리" },
  { id: 5, data: "동부리" },
  { id: 6, data: "무성리" },
  { id: 7, data: "사직리" },
  { id: 8, data: "삽령리" },
  { id: 9, data: "상곡리" },
  { id: 10, data: "서부리" },
  { id: 11, data: "수서리" },
  { id: 12, data: "오곡리" },
  { id: 13, data: "외량리" },
  { id: 14, data: "용대리" },
  { id: 15, data: "정리" },
  { id: 15, data: "하곡리" },
];
const CATEGORY_LIST2 = [
  { id: 0, data: "전체" },
  { id: 0, data: "사리리" },
  { id: 1, data: "보현리" },
  { id: 2, data: "복성리" },
  { id: 3, data: "위성리" },
  { id: 4, data: "달산리" },
  { id: 5, data: "송원리" },
  { id: 6, data: "신계리" },
  { id: 7, data: "도산리" },
  { id: 8, data: "서경리" },
  { id: 9, data: "평호리" },
  { id: 10, data: "산법리" },
  { id: 11, data: "내의리" },
  { id: 12, data: "봉황리" },
  { id: 13, data: "봉소리" },
];
const CATEGORY_LIST3 = [
  { id: 0, data: "전체" },
  { id: 0, data: "노행리" },
  { id: 1, data: "오천리" },
  { id: 2, data: "성리" },
  { id: 3, data: "병수리" },
  { id: 4, data: "불로리" },
  { id: 5, data: "내리리" },
  { id: 6, data: "중구리" },
  { id: 7, data: "거매리" },
  { id: 8, data: "장군리" },
  { id: 9, data: "장기리" },
  { id: 10, data: "금매리" },
  { id: 11, data: "화계리" },
  { id: 12, data: "마시리" },
  { id: 13, data: "매곡리" },
  { id: 14, data: "고곡리" },
];
const CATEGORY_LIST4 = [
  { id: 0, data: "전체" },
  { id: 0, data: "창평리" },
  { id: 1, data: "가호리" },
  { id: 2, data: "춘산리" },
  { id: 3, data: "대율리" },
  { id: 4, data: "동산리" },
  { id: 5, data: "남산리" },
  { id: 6, data: "명산리" },
  { id: 7, data: "신화리" },
];

const CATEGORY_LIST5 = [
  { id: 0, data: "전체" },
  { id: 0, data: "나호리" },
  { id: 1, data: "이화리" },
  { id: 2, data: "두북리" },
  { id: 3, data: "선곡리" },
  { id: 4, data: "미성리" },
  { id: 5, data: "모산리" },
  { id: 6, data: "문덕리" },
  { id: 7, data: "달산리" },
  { id: 8, data: "봉산리" },
];

const CATEGORY_LIST6 = [
  { id: 0, data: "전체" },
  { id: 0, data: "읍내리" },
  { id: 1, data: "수북리" },
  { id: 2, data: "수서리" },
  { id: 3, data: "이지리" },
  { id: 4, data: "파전리" },
  { id: 5, data: "신덕리" },
  { id: 6, data: "지호리" },
  { id: 7, data: "연계리" },
  { id: 8, data: "매성리" },
  { id: 9, data: "원산리" },
  { id: 10, data: "금양리" },
];
const CATEGORY_LIST7 = [
  { id: 0, data: "전체" },
  { id: 0, data: "백학리" },
  { id: 1, data: "삼산리" },
  { id: 2, data: "봉림리" },
  { id: 3, data: "무암리" },
  { id: 4, data: "운산리" },
  { id: 5, data: "화본리" },
  { id: 6, data: "화전리" },
];

const CATEGORY_LIST8 = [
  { id: 0, data: "전체" },
  { id: 0, data: "화수리" },
  { id: 1, data: "화북리" },
  { id: 2, data: "괴산리" },
  { id: 3, data: "학성리" },
  { id: 4, data: "장곡리" },
  { id: 5, data: "인곡리" },
  { id: 6, data: "양지리" },
  { id: 7, data: "낙전리" },
  { id: 8, data: "가암리" },
  { id: 9, data: "석산리" },
  { id: 10, data: "학암리" },
];

const locations = [
  {
    id: "no1",
    label: "군위읍",
    list: CATEGORY_LIST1,
  },
  {
    id: "no2",
    label: "소보면",
    list: CATEGORY_LIST2,
  },
];

export default function DetailSearch({}) {
  const [checkedList, setCheckedList] = useState([]);
  const [selectArea, setSelectArea] = React.useState();

  const onCheckedElement = (checked, item) => {
    if (checked) {
      setCheckedList([...checkedList, item]);
    } else if (!checked) {
      setCheckedList(checkedList.filter((el) => el !== item));
    }
  };

  const onRemove = (item) => {
    setCheckedList(checkedList.filter((el) => el !== item));
  };

  const categories = locations.map((location) => (
    <li>
      <label htmlFor={location.id}>{location.label}</label>
      <input type="radio" name="location" id={location.id} />
      <div className="area-list flex">
        <ul className="flex">
          {location.list.map((item) => (
            <li className="flex-start">
              <input
                type="checkbox"
                className="checkCon"
                id={item.id}
                value={item.data}
                onChange={(e) => {
                  onCheckedElement(e.target.checked, e.target.value);
                }}
                checked={checkedList.includes(item.data) ? true : false}
              />
              <label htmlFor={item.id}>{item.data}</label>
            </li>
          ))}
        </ul>
      </div>
    </li>
  ));

  return (
    <div className="search-group">
      <div className="search-area">
        <div className="detail-search">
          <table>
            <tbody>
              <tr>
                <th>검색</th>
                <td colSpan={3}>
                  <div className="flex">
                    <select name="" id="">
                      <option value="">구분</option>
                      <option value="">어르신 성함</option>
                      <option value="">보호사 성함</option>
                    </select>
                    <input type="text" />
                  </div>
                </td>
              </tr>
              <tr>
                <th>생년월일</th>
                <td>
                  <div className="flex-start">
                    <select name="" id="">
                      <option value="">연도</option>
                    </select>
                    <select name="" id="">
                      <option value="">월</option>
                    </select>
                    <select name="" id="">
                      <option value="">일</option>
                    </select>
                  </div>
                </td>
                <th>외출 기간 및 방문기간</th>
                <td>
                  <input type="date" name="" id="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <details>
          <summary>지역별 상세 조회</summary>
          <div className="mobile-area-wrap">
            <div className="flex">
              <label>지역 선택</label>
              <select>
                <option>전체</option>
                <option>군위읍</option>
                <option>소보면</option>
                <option>효령면</option>
                <option>부계면</option>
                <option>우보면</option>
                <option>의흥면</option>
                <option>산성면</option>
                <option>삼국유사면</option>
              </select>
            </div>
            <div className="flex">
              <label>세부 지역 선택</label>
              <select>
                <option>전체</option>
                <option>군위읍</option>
                <option>소보면</option>
                <option>효령면</option>
                <option>부계면</option>
                <option>우보면</option>
                <option>의흥면</option>
                <option>산성면</option>
                <option>삼국유사면</option>
              </select>
            </div>
          </div>
          <div className="area-wrap">
            <div>
              <ul className="area flex">
                <li>
                  <label htmlFor="all">전체</label>
                  <input type="checkbox" id="all" />
                  <div className="area-list">
                    <ul className="flex"></ul>
                  </div>
                </li>
                {categories}
                <li>
                  <label htmlFor="no3">효령면</label>
                  <input type="checkbox" id="no3" />
                  <div className="area-list flex">
                    <ul className="flex-start">
                      {CATEGORY_LIST3.map((item) => {
                        return (
                          <li className="flex">
                            <input
                              type="checkbox"
                              className="checkCon"
                              id={item.id}
                              value={item.data}
                              onChange={(e) => {
                                onCheckedElement(
                                  e.target.checked,
                                  e.target.value
                                );
                              }}
                              checked={
                                checkedList.includes(item.data) ? true : false
                              }
                            />
                            <label htmlFor={item.id}> {item.data} </label>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
                <li>
                  <label htmlFor="no4">부계면</label>
                  <input type="checkbox" id="no4" />
                  <div className="area-list flex">
                    <ul className="flex-start">
                      {CATEGORY_LIST4.map((item) => {
                        return (
                          <li className="flex">
                            <input
                              type="checkbox"
                              className="checkCon"
                              id={item.id}
                              value={item.data}
                              onChange={(e) => {
                                onCheckedElement(
                                  e.target.checked,
                                  e.target.value
                                );
                              }}
                              checked={
                                checkedList.includes(item.data) ? true : false
                              }
                            />
                            <label htmlFor={item.id}>{item.data}</label>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
                <li>
                  <label htmlFor="no5">우보면</label>
                  <input type="checkbox" id="no5" />
                  <div className="area-list flex">
                    <ul className="flex-start">
                      {CATEGORY_LIST5.map((item) => {
                        return (
                          <li className="flex">
                            <input
                              type="checkbox"
                              className="checkCon"
                              id={item.id}
                              value={item.data}
                              onChange={(e) => {
                                onCheckedElement(
                                  e.target.checked,
                                  e.target.value
                                );
                              }}
                              checked={
                                checkedList.includes(item.data) ? true : false
                              }
                            />
                            <label htmlFor={item.id}>{item.data}</label>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
                <li>
                  <label htmlFor="no6">의흥면</label>
                  <input type="checkbox" id="no6" />
                  <div className="area-list flex">
                    <ul className="flex-start">
                      {CATEGORY_LIST6.map((item) => {
                        return (
                          <li className="flex">
                            <input
                              type="checkbox"
                              className="checkCon"
                              id={item.id}
                              value={item.data}
                              onChange={(e) => {
                                onCheckedElement(
                                  e.target.checked,
                                  e.target.value
                                );
                              }}
                              checked={
                                checkedList.includes(item.data) ? true : false
                              }
                            />
                            <label htmlFor={item.id}>{item.data}</label>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
                <li>
                  <label htmlFor="no7">산성면</label>
                  <input type="checkbox" id="no7" />
                  <div className="area-list flex">
                    <ul className="flex-start">
                      {CATEGORY_LIST7.map((item) => {
                        return (
                          <li className="flex">
                            <input
                              type="checkbox"
                              className="checkCon"
                              id={item.id}
                              value={item.data}
                              onChange={(e) => {
                                onCheckedElement(
                                  e.target.checked,
                                  e.target.value
                                );
                              }}
                              checked={
                                checkedList.includes(item.data) ? true : false
                              }
                            />
                            <label htmlFor={item.id}>{item.data}</label>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
                <li>
                  <label htmlFor="no8">삼국유사면</label>
                  <input type="checkbox" id="no8" />
                  <div className="area-list flex">
                    <ul className="flex-start">
                      {CATEGORY_LIST8.map((item) => {
                        return (
                          <li className="flex">
                            <input
                              type="checkbox"
                              className="checkCon"
                              id={item.id}
                              value={item.data}
                              onChange={(e) => {
                                onCheckedElement(
                                  e.target.checked,
                                  e.target.value
                                );
                              }}
                              checked={
                                checkedList.includes(item.data) ? true : false
                              }
                            />
                            <label htmlFor={item.id}>{item.data}</label>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </details>
      </div>
      <div className="select-area">
        <div>
          <p>{selectArea}</p>
        </div>
        <div>
          <ul>
            {checkedList.map((item) => {
              return (
                <Button
                  className="item"
                  btnName={item}
                  onClick={() => onRemove(item)}
                ></Button>
              );
            })}
            <div className="btn-box flex-center">
              <Button className={"btn-large gray-btn"} btnName={"초기화"} />
              <Button className={"btn-large green-btn"} btnName={"조회"} />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
