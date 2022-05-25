import React from 'react'
import { renderLine } from 'types/lineTypes'
import * as S from "./Lines.styled"

function Lines({lines, amountToShow}) {
  amountToShow = amountToShow ?? lines?.length

  return (<S.Lines>
    {lines?.map((line, index) => {
        if(index >= amountToShow) return null;
        return renderLine(line)
    })}
  </S.Lines>)
}

export default Lines