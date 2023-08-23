import React from 'react'

export default function Button({btnName,className,onClick}) {
  return (
    <button className={className} onClick={onClick}>{btnName}</button>
  )
}
