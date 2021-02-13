import React from 'react'
import "./scss/header.scss";

import { Link } from "react-router-dom";

export default function Header({ items }) {
    console.log(items);
    const resultHTML = [];
    items.forEach(({ id, title, href }) => {
        resultHTML.push(<Link to={href} key={id} className="nav__item">{title}</Link>)
    })
    return (
        <header className="header">
            <nav className="nav">
               { resultHTML }
            </nav>
        </header>
    )
}
