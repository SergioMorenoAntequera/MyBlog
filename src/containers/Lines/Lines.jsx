import React from 'react'
import {LineTypes} from 'types/lineTypes'

function Lines({lines}) {
    
  return (<p>
    {lines.map(line => {
        switch (line.type) {
            
            case LineTypes.PARAGRAPH: {
                
            } break;

            case LineTypes.IMAGE: {

            } break;
        
            default: break;
        }

    })}
  </p>)
}

export default Lines