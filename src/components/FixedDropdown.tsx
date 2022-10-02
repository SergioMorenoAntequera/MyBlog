import { useState } from 'react'
import type { Heading } from '../layouts/PostLayout.astro'

type Props = { options: Heading[], fixedMessage:string}
const FixedDropdown = ({ options, fixedMessage = '' }: Props): any => {
    const [open, setOpen] = useState(false)
    
    return <div>
        <div onClick={()=>setOpen(!open)}> { fixedMessage} </div>
        { open && <div> 
            {options.map(option => 
                <a className='block' key={option.slug} href={`#${option.slug}`} onClick={()=>setOpen(false)}> {option.text} </a>
            )}
        </div>}
    </div>
}

export default FixedDropdown