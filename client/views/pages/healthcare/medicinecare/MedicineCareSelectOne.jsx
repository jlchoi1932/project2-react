import React from "react";
import Button from "../../../component/Button.jsx";
import Modal from "../../../component/Modal.jsx";
import { useNavigate } from "react-router";
import Chart1 from "../../../component/chart/Chart1.jsx";
import ContentTitle from "../../../component/ContentTitle.jsx";
import TableTitle from "../../../component/Tabletitle.jsx";

export default function MedicineCareSelectOne() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = React.useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <main>
      <Modal open={modalOpen} close={closeModal} header="복약 내역 수정">
        <div>
          <table className="margin-bottom medicine-revise">
            <tr>
              <th>대상자명</th>
              <td></td>
            </tr>
            <tr>
              <th>복용날짜</th>
              <td>
                <input type="date" name="date" id="date" />
              </td>
            </tr>
            <tr>
              <th>아침</th>
              <td className="flex">
                <div className="flex-start">
                  <input type="radio" name="moning-taking" id="moning-taking" />
                  <label htmlFor="moning-taking">복용</label>
                </div>
                <div className="flex-start">
                  <input
                    type="radio"
                    name="moning-not-taken"
                    id="moning-not-taken"
                  />
                  <label htmlFor="moning-not-taken">미복용</label>
                </div>
              </td>
            </tr>
            <tr>
              <th>점심</th>
              <td className="flex">
                <div className="flex-start">
                  <input type="radio" name="lunch-taking" id="lunch-taking" />
                  <label htmlFor="lunch-taking">복용</label>
                </div>
                <div className="flex-start">
                  <input
                    type="radio"
                    name="lunch-not-taken"
                    id="lunch-not-taken"
                  />
                  <label htmlFor="lunch-not-taken">미복용</label>
                </div>
              </td>
            </tr>
            <tr>
              <th>저녁</th>
              <td className="flex">
                <div className="flex-start">
                  <input type="radio" name="dinner-taking" id="dinner-taking" />
                  <label htmlFor="dinner-taking">복용</label>
                </div>
                <div className="flex-start">
                  <input
                    type="radio"
                    name="dinner-not-taken"
                    id="dinner-not-taken"
                  />
                  <label htmlFor="dinner-not-taken">미복용</label>
                </div>
              </td>
            </tr>
            <tr>
              <th>수정 상세 사유</th>
              <td className="flex">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="수정 상세 사유를 기입해주세요."
                ></textarea>
              </td>
            </tr>
          </table>
          <div>
            <Button className={"btn-100 green-btn"} btnName={"등록"} />
          </div>
        </div>
      </Modal>
      <div className="content-wrap">
        <ContentTitle contentTitle={"복약 상세 페이지"}/>
        <div className="detail-graph">
          <TableTitle tableTitle={" 님의 복약 내역"}/>
          <Chart1 />
        </div>
        <div className="board-wrap">
          <table className="margin-bottom2 medicine-detail-table">
            <thead>
              <tr>
                <th rowSpan="2">No</th>
                <th rowSpan="2">날짜</th>
                <th colSpan="3">복약상태</th>
                <th rowSpan="2">필요 복용 횟수</th>
                <th rowSpan="2">복약률</th>
                <th rowSpan="2">수정 상세 사유</th>
                <th rowSpan="2">수정자</th>
                <th rowSpan="2">수정일시</th>
                <th rowSpan="2">관리</th>
              </tr>
              <tr>
                <th>아침</th>
                <th>점심</th>
                <th>저녁</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2</td>
                <td>2022.08.10</td>
                <td>미복약</td>
                <td>미복약</td>
                <td>미복약</td>
                <td>3회</td>
                <td>0%</td>
                <td>3일간 미복약으로 확인 되어 전화드림( 아들내 방문 중 )외출</td>
                <td>김대상</td>
                <td>2022.12.27</td>
                <td>
                  <div className="btn-wrap flex-center">
                    <Button
                      className={"btn-small green-btn"}
                      btnName={"수정"}
                      onClick={openModal}
                    />
                    <Button className={"btn-small gray-btn"} btnName={"삭제"} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>2022.08.09</td>
                <td>복약</td>
                <td>미복약</td>
                <td>복약</td>
                <td>3회</td>
                <td>90%</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <div className="btn-wrap flex-center">
                    <Button
                      className={"btn-small green-btn"}
                      btnName={"수정"}
                      onClick={openModal}
                    />
                    <Button className={"btn-small gray-btn"} btnName={"삭제"} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="btn-wrap flex-center">
            <Button
              className={"btn-large gray-btn"}
              btnName={"이전"}
              onClick={() => {
                navigate("/MedicineCareSelect");
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
