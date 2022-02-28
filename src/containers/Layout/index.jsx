import React from 'react'
import Header from './Header'
import "./reset.scss"
import "./style.scss"


export default function Layout({children}) {

    return (<div className='Layout'>
        <Header/>
        <main>
            { children }
        </main>
    </div>)
}
