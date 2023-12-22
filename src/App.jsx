import React, { useState } from 'react'
import Colorpicker from './assets/Colorpicker'

const App = () => {
  let colors=['Red','White','Yellow','Purple','Green','Blue','Gray','Olive','Pink','Orange','Maroon']
  let [mainColor,setMainColor]=useState("rebeccapurple")
  let putColor=(insertColor)=>{
    setMainColor(insertColor)
  }
  return (
    <>
    <div className="w-full h-screen flex items-center" style={{background:mainColor}} >
    <div className="py-5 h-fit fixed  flex-col flex w-max border-black border-[2px] rounded-full bg-white ">
    {colors.map((i,index)=>(
  
  <Colorpicker
  key={index} color={i} putColor={putColor}/>
  ))}
    </div>
    </div>
    </>
  )
}

export default App