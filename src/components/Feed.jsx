import React from 'react'
import { Timeline } from 'react-twitter-widgets'

export default function Feed({ userName }) {
    // e.target.value.charAt(0).includes("@") ? e.target.value.slice(1) : e.target.value)
    console.log(userName.charAt(0).includes("@") ? userName.slice(1) : userName);
    return (
        <>
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: (!userName) ? "elonmusk" : userName 
                }}
                options={{
                    height: '450',
                    width: '600',
                    darkMode: 'true'
                }}
            />
        </>
    )
}
