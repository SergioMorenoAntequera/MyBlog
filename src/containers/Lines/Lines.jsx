import React from 'react'
import {LineTypes, renderLine} from 'types/lineTypes'
import * as S from "./Lines.styled"

function Lines({lines, amountToShow}) {
  amountToShow = amountToShow ?? lines?.length

  return (<S.Lines>
    {lines?.map((line, index) => {
        if(index >= amountToShow) return;
        
        return renderLine(line)
    })}
  </S.Lines>)
}

export default Lines