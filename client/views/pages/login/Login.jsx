import React from "react";
import Button from "../../component/Button.jsx";
import Join from "../join/Join.jsx"

export default function Login({ getLogin }) {
  const [isJoin, setIsJoin] = React.useState(false);
  const onClickJoin = () => {
    setIsJoin(true);
  };

  const onClickLogin = () => {
    getLogin();
  };
  return (
    <div className="row login-wrap">
      <h1>시니어 스마트 케어 모니터링 플랫폼</h1>
      <div className="container row flex-center join-login">
        {isJoin ? <Join /> : (<div className="login-form">
          <div>
            <h3>로그인</h3>
            <div className="login-inner">
              <div className="content">
                <i className="fa-solid fa-user"></i>
                <input
                  required
                  maxlength="15"
                  type="text"
                  placeholder="아이디를 입력하세요"
                />
              </div>
              <div className="content">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  placeholder="비밀번호를 입력하세요"
                />
              </div>
            </div>
          </div>
          <div className="btn-wrap">
            <Button
              className={"btn-100 green-btn"}
              btnName={"로그인"}
              onClick={onClickLogin}
            />
            <div className="flex btn-bottom">
              <Button className={"join-btn"}
                btnName={"회원가입"} onClick={onClickJoin} />
            </div>
          </div>
        </div>)}
      </div>
    </div>
  );
}
