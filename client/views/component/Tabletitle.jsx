import React from 'react'
import styled from 'styled-components'

export default function TableTitle({tableTitle}) {
  return (
    <TableTitleStyled>{tableTitle}</TableTitleStyled>
  )
}

const TableTitleStyled = styled.p`
  width: 100%;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  text-align: center;
  background-image:
      linear-gradient(to right, #7D9D9C, #F0EBE3);
  background-size: 13% 15%;
  background-repeat: no-repeat;
  background-position: center bottom;
  &::before {
    content: "김복남";
    font-size: 1.8rem;
  }  
  
`