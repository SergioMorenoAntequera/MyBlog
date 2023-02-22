import { useState, useEffect, useRef } from 'react'
import type { Heading } from '../layouts/PostLayout.astro'

type Props = { fixedMessage:string, options: Heading[]}
const FixedDropdown = ({ fixedMessage = '', options }: Props): any => {
    options = [{depth: 1, slug: '', text: 'Resumen'}, ...options]
    
    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElements>(null);
    
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
          if (ref.current && !ref.current.contains(event.target)) {
            setOpen(false)
          }
        }
  
        document.addEventListener('mousedown', handleClickOutside);
  
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
    
    return <div ref={ref} className="select-none">
        <div className='flex items-center font-bold' onClick={()=>setOpen(!open)}> 
            
            { fixedMessage}
            
            {open && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M7 14l5-5 5 5z"/>
            </svg>}
            {!open && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M7 10l5 5 5-5z"/>
            </svg>}
             
        </div>
        { open && <div className='max-h-80 overflow-auto'> 
            {options.map(option => 
                <a className='block text-black hover:bg-slate-100 transition py-1 pl-4' key={option.slug} href={`#${option.slug}`} onClick={()=>setOpen(false)}> 
                    {option.text} 
                </a>
            )}
        </div>}
    </div>
}

export default FixedDropdown