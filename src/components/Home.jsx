import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Hashtag } from "react-twitter-widgets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Feed from "./Feed";
import SmallText from "./SmallText";
import SmallCard from "./SmallCard";
import LargeCard from "./LargeCard";
import CardContainer from "./CardContainer";

import "./scss/home.scss";

export default function Home() {
    const [userName, setUserName] = useState("");
  
    useEffect(() => {
        console.log(userName);
    }, [])

    return (
        <div className="home">
            <CardContainer>
                {/* <div className="home__card home__card--center home__card--small"> */}
                <SmallCard>
                    <span className="home--heading">Search <FontAwesomeIcon icon={faSearch} size="1x" color="rgba(70, 164, 241, 0.712)"/></span>
                    <input id="user-name-input" className="home__input" placeholder="@username" onInput={(e) => setUserName(e.target.value.charAt(0).includes("@") ? e.target.value.slice(1) : e.target.value)}/>
                    <SmallText>This API won"t allow you to see private tweets, try only on non-private accounts.</SmallText>
                    <Hashtag hashtag="react" />
                </SmallCard>
                <SmallCard>
                    <a className="home__icon--large" href="https://github.com/efefurkankarakaya"><FontAwesomeIcon icon={faGithub} size="1x" color="rgba(70, 164, 241, 0.712)"/></a>
                    <SmallText>Feel free to use and fork.</SmallText>
                </SmallCard>
            </CardContainer>
            
            <CardContainer>
                <LargeCard>
                    <Feed userName={ userName }/>
                </LargeCard>
            </CardContainer>
        </div>
    )
}
