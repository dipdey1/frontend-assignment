import React from 'react'

const RadioInputs = ({title, name, required, value,optionsObject, handleClick}) => {
  return (
    <div className='flex flex-col' style={{"gap":"4px", "height": "100%"}}>
        <label className="block text-[14px] font-medium font-poppins">{title}{required === true ? <span style={{"color":"#D86161"}}>*</span> : null}</label>
            <div className='flex' style={{"gap": "16px"}}>
            {
                optionsObject.map((object) => 
                (<div key={object.name} className='flex' style={{"gap":"4px"}}>
                    <input type="radio" id={object.name} name={name} value={value === '' ? object.title : value} checked={value === object.title ? true : false} className="w-5 h-5 border border-CardBorder" onClick={handleClick}/>
                    <label htmlFor={object.name} className="block text-[14px] font-medium font-poppins"><span style={{"color":"#7A7A7A"}}>{object.title}</span></label> 
                </div>)
            )}  
            </div>
        </div>
  )
}

export default RadioInputs