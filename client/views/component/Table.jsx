import React from "react";
// import styled from "styled-components";

export default function Table({ head, contents, contentKey, onClick, className}) {
  return (
    <table className={className}>
      <thead>
        <tr>
          {head.map((i) => {
            return <th>{i}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {contents.map((i, index) => {
          return (
            <tr key={index}>
              {contentKey.map((kes) => {
                return <td onClick={onClick}>{i[kes]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}


// const TableStyled = styled.table`
//   border-top: 2px solid #2d303f;
//   border-bottom: 1px solid #e4dccf;
//   /* &:hover {
//     background-color: #e4dccf;
//   } */
// `;

// const TrStyled = styled.tr`
//   cursor: pointer;
// `;

// const ThStyled = styled.th`
//   padding: 1rem 0;
//   font-weight: bold;
//   background-color: #f0ebe3;
//   font-size: 1.4rem;
//   text-align: center;
// `;

// const TdStyled = styled.td`
//   padding: 1rem 0;
//   border-top: 1px solid #ececec;
//   text-align: center;
//   font-size: 1.3rem;
//   background-color: #ffffff;
// `;
