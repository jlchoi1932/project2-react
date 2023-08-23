import React from "react";
import Button from "../../component/Button.jsx";
import { useNavigate } from "react-router";
export default function Join() {
  const navigate = useNavigate();
  return (
      <div className="container row flex-center join-login">
        <div className="join-group">
          <h3>회원가입</h3>
          <div className="join-inner">
            <div>
              <div className="flex-start margin-bottom2">
                <label className="flex25">구분</label>
                <select name="division" id="section">
                  <option value="manager">관리자</option>
                  <option value="individual">개인</option>
                  <option value="protection_agency">보호기관</option>
                  <option value="hospital">병원</option>
                  <option value="government">지자체</option>
                </select>
              </div>
            </div>
            <div>
              <div className="flex-start margin-bottom2">
                <label className="flex25" htmlFor="name">
                  기관명
                </label>
                <select name="division" id="section">
                  <option value="manager">기관명</option>
                </select>
              </div>
            </div>
            <div>
              <div className="flex-start margin-bottom2">
                <label className="flex25" htmlFor="name">
                  이름
                </label>
                <input
                  type="text"
                  name="id"
                  placeholder=""
                  autocomplete="off"
                  id="id"
                />
              </div>
            </div>
            <div className="id">
              <div className="flex-start margin-bottom2">
                <label className="flex25" htmlFor="id">
                  아이디
                </label>
                <input
                  type="text"
                  name="id"
                  placeholder=""
                  autocomplete="off"
                  id="id"
                />
                <Button
                  btnName={"중복확인"}
                  className={"green-btn btn-large"}
                  onclick="openIdChk()"
                />
              </div>
            </div>
            <div>
              <div className="flex-start margin-bottom2">
                <label className="flex25" htmlFor="password">
                  비밀번호
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder=""
                  autocomplete="off"
                  id="password"
                />
              </div>
            </div>
            <div>
              <div className="flex-start margin-bottom2">
                <label className="flex25" htmlFor="password_check">
                  비밀번호 확인
                </label>
                <input
                  type="text"
                  name="password_check"
                  placeholder=""
                  autocomplete="off"
                  id="password_check"
                />
              </div>
            </div>
            <div>
              <div className="flex margin-bottom2">
                <label className="flex25" htmlFor="phone_number">
                  전화번호
                </label>
                <input
                  type="text"
                  name="phone_number"
                  placeholder=""
                  autocomplete="off"
                  id="phone_number"
                />
              </div>
            </div>
            <div className="btn-wrap">
              <Button className={"gray-btn btn-large"} btnName={"취소"} />
              <Button
                className={"green-btn btn-large"}
                btnName={"등록"}
                onClick={() => {
                  navigate("Login");
                }}
              />
            </div>
          </div>
        </div>
      </div>
  );
}
