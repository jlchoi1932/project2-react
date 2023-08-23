/**
 * @author : 최정우
 * @since : 2022.09.20
 * @dscription : React를 활용한 Client단 구현 대상인 Application의 시작점(Index) Component 입니다.
 */
import React from "react";

//Application의 Route 정보를 관리하는 Component
import AppRoute from "./AppRoute.jsx";

//Test Layout
import Header from "../layout/Header.jsx";
import Menu, { items } from "../layout/Menu.jsx";
import Login from "./login/Login.jsx";
import { useLocation, useNavigate } from "react-router";
import Weather from "./main/Weather.jsx";
import Sidebar from "../layout/Menu.jsx";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = React.useState(false);
  const [headerData, setHeaderData] = React.useState(false);


  const getLogin = () => {
    setIsLogin(true);
    navigate("/Main");
  };

  const getHeader = () => { //자식이 실행하는 헤더 값 받는 함수 실행되면 트루됨
    setHeaderData(true);
    if(headerData == true){
      setHeaderData(false);
    }
  }

  const { title } = items.find(
    (item) =>
      item.path === location.pathname ||
      location.pathname.startsWith(item.prefix) ||
      item.childrens?.some((child) => location.pathname.startsWith(child.path))
  ) ?? { title: '' };
  

  return (
    <div id="App">
      {isLogin ? (
        <div id="layout">
          <Header title={title} getHeader={getHeader}/>
          {headerData ? <Menu props={"show-menu"}/>:<Menu props={"nav"}/>}
          <div id="pages">
            <AppRoute />
          </div>
        </div>
      ) : (
        <Login getLogin={getLogin} />
      )}
    </div>
  );
}

export default App;
