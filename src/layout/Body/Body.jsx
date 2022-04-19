import React from 'react'
import * as S from './Body.styled';

export default function Body({children}) {

    return (<S.Body>
        <div className='Body__container'>
            {children}
        </div>
    </S.Body>)
}
