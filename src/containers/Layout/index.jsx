import React from 'react'
import Header from './Header'
import "./reset.scss"

export default function Layout({children}) {
    return (<>
        <Header/>

        { children }
    </>)
}
