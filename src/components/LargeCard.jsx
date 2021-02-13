import React from 'react'
import "./scss/card.scss";

export default function LargeCard({ children }) {
    return (
        <div className="card card--center card--large">
            { children }
        </div>
    )
}
