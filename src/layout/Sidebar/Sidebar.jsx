import Caption from 'components/Caption'
import React from 'react'

import * as S from './Sidebar.styled'

export default function Sidebar({className}) {

  return (<>
    <S.RightSidebar className={className}>
      <div className="all-rights-reserved">
        <Caption>
          <p> Website developed and maintained by Sergio Moreno Antequera (Seran) </p>
          <p> © All Lefts Reserved {new Date().getFullYear()} </p>
        </Caption>
      </div>
      
    </S.RightSidebar>
  </>)
}
