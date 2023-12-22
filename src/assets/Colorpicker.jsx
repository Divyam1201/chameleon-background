import React from 'react'

const Colorpicker = ({color,putColor}) => {
    let setColor=(param)=>{
putColor(color)
    }

  return (
    <button className='m-[2px] px-3 border-2 rounded-2xl' style={{backgroundColor:color}} onClick={setColor}>{color}</button>
  )
}

export default Colorpicker