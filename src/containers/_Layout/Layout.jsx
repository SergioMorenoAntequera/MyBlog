import React from 'react'
import Header from './Header'
import "./reset.scss"
import "./Layout.scss"


export default function Layout({children}) {

    return (<div className='Layout'>
        <Header/>
        <main>
            { children }
        </main>
    </div>)
}
