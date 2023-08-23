import React from "react";
import Table from "../../component/Table.jsx";
import Button from "../../component/Button.jsx";

export default function UserAuthoriySelect() {
  const thead1 = [
    "No",
    "사용자명",
    "사용자ID",
    "성별",
    "생년월일",
    "주소",
    "대상자 관리",
  ];
  const key1 = [
    "No",
    "name",
    "Id",
    "gender",    
    "birth",
    "address",
    "management",
  ];
  const content1 = [
    {
      No: 1,
      name: "김복남",
      Id: "admin",
      gender:"여",
      birth: "1948.11.15",
      address: "경상북도 군위군 삼국유사면",
      management: (
        <Button className={"btn-small gray-btn"} btnName={"대상자 매칭"} onClick={()=>navigate("/SeniorInsert")} />
      )
    },
  ];  
  
  const thead2 = [
    "No",
    "사용자명",
    "사용자ID",
    "관리기관",
    "성별",
    "생년월일",
    "주소",
    "담당대상자",
  ];
  const key2 = [
    "No",
    "name",
    "Id",
    "management_agency",
    "gender",
    "birth",
    "address",
    "Target_management",  
  ];
  const content2 = [
    {
      No: 1,
      name: "김훈",
      Id: "admin2",
      management_agency: "보호재단",
      gender: "남",
      birth: "1988.02.11",
      address: "경상북도 군위군 삼국유사면",
      Target_management:(
        <Button className={"btn-small gray-btn"} btnName={"대상자 매칭"} onClick={()=>navigate("/SeniorInsert")} />
      ),
      
    },
  ];
  const thead3 = [
    "No",
    "사용자명",
    "사용자ID",
    "관리기관",
    "성별",
    "생년월일",
    "주소",
  ];
  const key3 = [
    "No",
    "name",
    "Id",
    "management_agency",
    "gender",
    "birth",
    "address",
  ];
  const content3 = [
    {
      No: 1,
      Id: "admin",
      name: "홍길동",
      management_agency: "보훈병원",
      gender: "여",
      birth: "1985.10.24",
      address: "경상북도 군위군 삼국유사면",
      
    },
  ];  
  const thead4 = [
    "No",
    "사용자명",
    "사용자ID",
    "관리기관",
    "성별",
    "생년월일",
    "주소",
  ];
  const key4 = [
    "No",
    "name",
    "Id",
    "management_agency",
    "gender",
    "birth",
    "address",
  ];
  const content4 = [
    {
      No: 1,
      Id: "test",
      name: "김신",
      management_agency: "서구청",
      gender: "여",
      birth: "1990.10.24",
      address: "대구광역시 서구",
    },
  ];  
  const thead5 = [
    "No",
    "사용자명",
    "사용자ID",
    "성별",
    "생년월일",
    "주소",
    "관리",
  ];
  const key5 = [
    "No",
    "name",
    "Id",
    "gender",    
    "birth",
    "address",
    "management",
  ];
  const content5 = [
    {
      No: 1,
      name: "김복남",
      Id: "admin",
      gender:"여",
      birth: "1948.11.15",
      address: "경상북도 군위군 삼국유사면",
      management: (
        <Button className={"btn-small gray-btn"} btnName={"대상자 매칭"} onClick={()=>navigate("/SeniorInsert")} />
      )
    },
  ];  
  

  const data = [
    {
      id: 1,
      title: " 보호자",
      description: (
        <Table
          head={thead1}
          contents={content1}
          contentKey={key1}
          onClick={() => {
            navigate("/SeniorSelectOne");
          }}
        />
      )
    },
    {
      id: 2,
      title: "보호사",
      description: (
        <Table
          head={thead2}
          contents={content2}
          contentKey={key2}
          onClick={() => {
            navigate("/SeniorSelectOne");
          }}
        />
      )
    },
    {
      id: 3,
      title: "병원",
      description: (
        <Table
          head={thead3}
          contents={content3}
          contentKey={key3}
          onClick={() => {
            navigate("/SeniorSelectOne");
          }}
        />
      )
    },
    {
      id: 4,
      title: "지자체",
      description: (
        <Table
          head={thead4}
          contents={content4}
          contentKey={key4}
          onClick={() => {
            navigate("/SeniorSelectOne");
          }}
        />
      )
    },
    {
      id: 5,
      title: "관리자",
      description: (
        <Table
          head={thead5}
          contents={content5}
          contentKey={key5}
          onClick={() => {
            navigate("/SeniorSelectOne");
          }}
        />
      )
    },
  ];
  const [index, setIndex] = React.useState(1);
  return (
    <main>
      <div className="tab-container">
        <ul className="tab-menu">
          {data.map((item) => (
            <li
              key={item.id}
              className={index === item.id ? "active" : null}
              onClick={() => setIndex(item.id)}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <div className="content-wrap">
          <div className="search-management flex-end margin-bottom2">
            <select name="management-agency">
              <option value="기관전체">기관전체</option>
              <option value="대구보훈병원">대구보훈병원</option>
              <option value="군위군청">군위군청</option>
            </select>
            <select>
              <option value="이름">이름</option>
              <option value="아이디">아이디</option>
            </select>
            <input type="text" />
            <Button className={"btn-small gray-btn"} btnName={"검색"} onClick={()=>navigate("/SeniorInsert")} />
          </div>
          <ul className="tab-content">
            {data
              .filter((item) => index === item.id)
              .map((item) => (
                <li>{item.description}</li>
              ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
