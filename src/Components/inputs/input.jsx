import React from 'react'
import './input.css'


export const Input = ({ fieldType, type, height, width }) => {

    if (fieldType === 'password') {
        return (
            <div className="inputbox" style={{height: height, width: width}}>
                <input type="password" required/>
            </div>
        )
    } else {
        return (
            <input type={type} required />
        )
    }
}
