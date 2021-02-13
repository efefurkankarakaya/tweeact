import React from 'react'
import "./scss/card.scss";

export default function SmallCard({ children }) {
    return (
        <div className="card card--center card--small">
            { children }
        </div>
    )
}
