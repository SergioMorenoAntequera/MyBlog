import React from 'react'
import {LineTypes} from 'types/lineTypes'

function Lines({lines, amountToShow}) {
  amountToShow = amountToShow ?? lines.length

  return (<>
    {lines.map((line, index) => {
        if(index >= amountToShow) return;
        
        switch (line.type) {
            case LineTypes.PARAGRAPH: {
                return <p> {line.content} </p>
            }
            case LineTypes.IMAGE: {
                return <img src={line.content} alt={line.content} />
            }
            default: break;
        }
    })}
  </>)
}

export default Lines