import React from 'react'
import styled from 'styled-components'

export default function ContentTitle({contentTitle}) {
  return (
    <ContentTitleStyled>{contentTitle}</ContentTitleStyled>
  )
}

const ContentTitleStyled = styled.p`
  position: relative;
  width: 100%;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 4rem;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -11px;
    height: 1px;
    width: 100%;
    max-width: 100%;
    background-color: #d1e4e3;
  }  
  &::before {
    content: "";
    position: absolute;
    z-index: 10;
    left: 0;
    bottom: -15px;
    height: 8px;
    width: 1rem;
    margin-right: 1rem;
    background-color: #7D9D9C;
  }
  
`