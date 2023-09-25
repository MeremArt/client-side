import React from 'react'
import './button.css'

export const Button = ({value, onClick}) => {
  return (
    <button onClick = {onClick}>
        {value}
    </button>
  )
}
