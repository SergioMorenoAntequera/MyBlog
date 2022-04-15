import Body from 'layout/Body';
import Header from 'layout/Header'
import React from 'react'

import * as S from './Scaffol.styled';
export default function Scaffold({children}) {

    return (<S.Scaffold>
        <Header/>
        <Body>
            {children}
        </Body>
    </S.Scaffold>)
}
