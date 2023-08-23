import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Weather from "../pages/main/Weather.jsx";
import Sidebar from "./Menu.jsx";

function Header({title , getHeader}) {
  const onClickIcon=()=>{
    getHeader(); //이벤트 함수 만들어서 헤더값을 트루로 해줌으로써 아이콘이 눌렸다는 것을 알려줌 -> 부모에 있는 헤더 값 실행
  }

  return (
    <header>
      <div className="header-flex flex flex-align">
        <div className="page-title flex flex-align">
          <MenuIcon onClick={onClickIcon} />
          <span>{title}</span>
        </div>
        <Weather />
      </div>
    </header>
  );
}

export default Header;
