import Body from 'layout/Body';
import Header from 'layout/Header'
import Sidebar from 'layout/Sidebar';
import React from 'react'

import * as S from './Scaffol.styled';
export default function Scaffold({children}) {

    return (<S.Scaffold>
        <Header/>
        <Body>
            {children}
        </Body>
        <Sidebar/>
    </S.Scaffold>)
}
