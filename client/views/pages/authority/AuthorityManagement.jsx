import React,{useRef} from "react";
import ContentTitle from "../../component/ContentTitle.jsx";
import SubTitle from "../../component/SubTitle.jsx";
import Button from "../../component/Button.jsx";

import AuthSubmenu, { authorityList } from "../../component/AuthSubmenu.jsx";

export default function AuthorityManagement() {
  const checkMap = useRef({}); //check

  const menu = {
    시니어관리: ["시니어관리"],
    건강관리: ["복약관리", "댁내온도관리", "복약통계"],
    방문관리: ["방문관리"],
    장비관리: ["장비관리"],
    설정: ["내정보 관리", "사용자 관리", "권한 관리"],
  };
  // 체크된 대메뉴에 속하는 모든 소메뉴 값 가져오기
  function getSmallValues() {
    let smallList = [];
    const obj_length = document.getElementsByName("chk_largemenu").length;
    for (let i = 0; i < obj_length; i++) {
      if (document.getElementsByName("chk_largemenu")[i].checked == true) {
        const large = document.getElementsByName("chk_largemenu")[i].id;
        smallList.push(...menu[large]);
      }
    }
    return smallList;
  }

  //체크박스 값 불러오기 -> 버튼 클릭으로 바꾸기
  const onCheckedElement = (checked, title) => {
    let smallValues = getSmallValues();
    let subAuthMap = checkMap.current;
    Object.entries(subAuthMap).forEach(([small, auth]) => {
      if (auth.checked || smallValues.includes(small)) {
        auth.add(title);
      }
      if (!checked){
        auth.delete(title); //체크박스 해제시 버튼 삭제
      }
    })
  };

  //버튼 클릭 시 삭제
  // function onBtnDelete(){
  //   const buttons = document.getElementsByClassName('xbutton');
  //   for(let button of buttons) {
  //     button.addEventListener('click', (event) => {
  //       event.target.remove();

  //       const re = document.getElementsByName("operator_list").length;
  //       for (let i = 0; i < re; i++) {
  //         const check_value = document.getElementsByName("operator_list")[i];
  //         const rdCheck = [check_value.value];

  //         if (event.target.id == rdCheck) {
  //         check_value.checked = false;
  //         }
  //       }
  //     })
  //   }
  // }

  return (
    <main>
      <div className="content-wrap">
        <ContentTitle contentTitle={"권한관리"} />
        <div className="board-wrap">
          <SubTitle
            className="margin-bottom"
            explanation={"메뉴 권한을 설정할 수 있습니다."}
          />
          <div className="board-wrap">
            <table className="authority-table">
              <thead>
                <tr>
                  <th colSpan={2} style={{ width: "30%" }}>
                    메뉴 목록
                  </th>
                  <th style={{ width: "70%" }}>운영자 목록</th>
                </tr>
                <tr>
                  <th>대메뉴</th>
                  <th>소메뉴</th>
                  <th style={{ backgroundColor: "transparent" }}>
                    <div className="flex">
                      {authorityList.map((i) => (
                        <div className="flex-start">
                          <input
                            className="flex10"
                            type="checkbox"
                            name="operator_list"
                            id={i}
                            value={i} //값
                            onChange={(e) => {
                              onCheckedElement(
                                e.target.checked,
                                e.target.value
                              );
                            }}
                          />
                          <label htmlFor={i} className="flex90">
                            {i}
                          </label>
                        </div>
                      ))}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(menu).map(([key, value], idx) =>
                  value.map((item, index) => (
                    <tr key={idx}>
                      {index === 0 && (
                        <td rowSpan={value.length}>
                          <div className="flex-center">
                            <input
                              type="checkbox"
                              id={key} //for 과 id 를 맞춰주어야 라벨을 눌렀을 때 체크박스 활성화
                              className="flex10"
                              name="chk_largemenu"
                            />
                            <label htmlFor={key} className="flex60">
                              {key}
                            </label>
                          </div>
                        </td>
                      )}
                      <AuthSubmenu authRef={(a) => checkMap.current[item] = a} label={item} />
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <div className="btn-wrap flex-end">
              <Button className={"btn-small green-btn"} btnName={"저장"} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
