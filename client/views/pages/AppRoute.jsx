/**
 * @author : 최정우
 * @since : 2022.09.20
 * @dscription : Application의 Route 정보를 관리하는 Component 입니다.
 */
import React from "react";
//react router 라이브러리 import
import { Routes, Route } from "react-router-dom";

import Test from "./Test/Test.jsx";
import Main2 from "./main/Main2.jsx";
import SeniorSelect from "./senior_management/SeniorSelect.jsx";
import SeniorInsert from "./senior_management/SeniorInsert.jsx";
import SeniorSelectOne from "./senior_management/SeniorSelectOne.jsx";
import MedicineCareSelect from "./healthcare/medicinecare/MedicineCareSelect.jsx";
import MedicineCareSelectOne from "./healthcare/medicinecare/MedicineCareSelectOne.jsx";
import TemperatureManagementSelect from "./healthcare/temperature/TemperatureManagementSelect.jsx";
import TemperatureManagementSelectOne from "./healthcare/temperature/TemperatureManagementSelectOne.jsx";
import VisitSelect from "./visit/visit/VisitSelect.jsx";
import VisitInsert from "./visit/visit/VisitInsert.jsx";
import VisitSelectOne from "./visit/visit/VisitSelectOne.jsx";
import EquipmentRentalInsert from "./equipment/EquipmentRentalInsert.jsx";
import EquipmentManagementSelect from "./equipment/EquipmentManagementSelect.jsx";
import EquipmentManagementSelectOne from "./equipment/EquipmentManagementSelectOne.jsx";
import UserAuthoriySelect from "./authority/UserAuthoriySelect.jsx";
import MyInfoUpdate from "./authority/MyInfoUpdate.jsx";
import AuthorityManagement from "./authority/AuthorityManagement.jsx";

function AppRoute() {
  return (
    <Routes>
      <Route path="/Test" element={<Test />}></Route>
      <Route path="/" element={<Main2 />}></Route>
      <Route path="/SeniorSelect" element={<SeniorSelect />}></Route>
      <Route path="/SeniorInsert" element={<SeniorInsert />}></Route>
      <Route path="/SeniorSelectOne" element={<SeniorSelectOne />}></Route>
      <Route
        path="/MedicineCareSelect"
        element={<MedicineCareSelect />}
      ></Route>
      <Route
        path="/MedicineCareSelectOne"
        element={<MedicineCareSelectOne />}
      ></Route>
      <Route
        path="/TemperatureManagementSelect"
        element={<TemperatureManagementSelect />}
      ></Route>
      <Route
        path="/TemperatureManagementSelectOne"
        element={<TemperatureManagementSelectOne />}
      ></Route>
      <Route path="/VisitInsert" element={<VisitInsert />}></Route>
      <Route path="/VisitSelect" element={<VisitSelect />}></Route>
      <Route path="/VisitSelectOne" element={<VisitSelectOne />}></Route>
      <Route
        path="/EquipmentRentalInsert"
        element={<EquipmentRentalInsert />}
      ></Route>
      <Route
        path="/EquipmentManagementSelect"
        element={<EquipmentManagementSelect />}
      ></Route>
      <Route
        path="/EquipmentManagementSelectOne"
        element={<EquipmentManagementSelectOne />}
      ></Route>
      <Route
        path="/UserAuthoriySelect"
        element={<UserAuthoriySelect />}
      ></Route>
      <Route path="/MyInfoUpdate" element={<MyInfoUpdate />}></Route>
      <Route
        path="/AuthorityManagement"
        element={<AuthorityManagement />}
      ></Route>
    </Routes>
  );
}

export default AppRoute;
