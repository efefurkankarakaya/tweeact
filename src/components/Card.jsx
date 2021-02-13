import React from 'react'
import "./scss/card.scss";

export default function Card({ children }) {
    return (
        <div className="card card--center">
            { children }
        </div>
    )
}
