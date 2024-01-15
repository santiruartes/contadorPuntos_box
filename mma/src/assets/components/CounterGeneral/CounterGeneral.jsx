import { useState } from 'react'
import 'tailwindcss/tailwind.css'

export const CounterGeneral = () => {

  const [nameBlueCorner, setNameBlueCorner] = useState('')
  

  const handleChangeName = (e) => {
    
    const newName = e.target.value;

    setNameBlueCorner = newName
 
  }


  return (
    <section className='flex flex-col items-center justify-center gap-2'>
        
        <input 
             type="text" 
             placeholder='Ingrese el nombre'
             value={nameBlueCorner}
             onChange={handleChangeName}
            />  

        <div>
            <h3 className='text-cyan-700'>
                {setNameBlueCorner} Blue corner
            </h3>        
        </div>

    

    </section>
  )
}
