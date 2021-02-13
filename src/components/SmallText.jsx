import React from 'react'
import "./scss/small_text.scss"

export default function SmallText({ children, className }) {
    return (
        <p className={`small-text ${className}`}>
            { children }
        </p >
    )
}
