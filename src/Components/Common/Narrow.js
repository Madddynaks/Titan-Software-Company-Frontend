import React from 'react'

export default function Narrow(props) {
  return (
    <div className={`Narrow ${props.class} `}>
      {props.children}
    </div>
  )
}

